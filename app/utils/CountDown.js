import React, { Component , PropTypes} from 'react';
import {Text} from 'native-base';

// {id , startTime, deathCount}
var timeRecodes = [];  //根据id来记录LCCountDownButton的信息

export default class CountDown extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state={
            timer:'default'
        }
    }

    static propTypes = {
        id:React.PropTypes.string,          //按钮的身份标识,同一个页面的按钮是同一个id
        beginText:React.PropTypes.string,   //初始状态文字
        endText:React.PropTypes.string,     //读秒结束后文字
        count:React.PropTypes.number,       //计时数
        auto:React.PropTypes.bool,
        pressAction:React.PropTypes.func,   //按下按钮的事件,但是触发倒数需要你自己来调用方法
        changeWithCount:React.PropTypes.func,   //读秒变化的函数,该函数带有一个参数count,表示当前的剩余事件
        end:React.PropTypes.func,           //读秒完毕后的函数
    }

    componentWillMount() {
        this.state = {
            timer:this.props.beginText,
        }
    }

    componentDidMount() {
        const {id,changeWithCount,auto} = this.props;
        for(var i = 0 ; i<timeRecodes.length ; i ++){
            let obj = timeRecodes[i];
            if (obj.id == id){
                let liveTime = Date.now() - obj.startTime
                if (liveTime < obj.deathCount * 1000){
                    //避免闪动
                    let detalTime = Math.round(liveTime/1000);
                    let content = changeWithCount(obj.deathCount - detalTime);
                    this.setState({
                        timer:content
                    });
                    //手动调用倒计时
                    this.startCountDownWithCount(obj.startTime);

                }
                return;
            }
        }
        if (auto){
            console.log('start timer')
            this.startCountDown();
        }
    }

    componentWillUnmount() {
        this.interval && clearInterval(this.interval)
    }

    startCountDownWithCount(startTime){
        const {changeWithCount,endText,count,end}= this.props;
        this.startTime = startTime;
        this.interval = setInterval(()=>{
            let detalTime = Math.round((Date.now() - this.startTime)/1000);
            let content = changeWithCount(count - detalTime);
            if (detalTime >= count){
                content = endText;
                this.interval && clearInterval(this.interval)
                end && end();
            }
            this.setState({
                timer:content
            })
        },1000)
    }

    recordTimerInfo(){
        const {id , count} = this.props;
        var hasRecord = false;
        for (var i = 0 ; i < timeRecodes.length ; i ++){
            let obj = timeRecodes[i];
            if(obj.id == id){
                obj.startTime = Date.now();
                hasRecord = true;
                break;
            }
        }
        if (!hasRecord){
            let timerInfo = {
                id:id,
                deathCount:count,
                startTime:Date.now()
            }
            timeRecodes.push(timerInfo)
        }
    }

    //外界调用
    startCountDown(){
        this.startCountDownWithCount(Date.now());
        this.recordTimerInfo();
    }

    render(){
        return (
            <Text>
                {this.state.timer}
            </Text>
        );
    }
}