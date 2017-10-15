import React, { Component } from 'react';
import { Image} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, Header, Content, Body, Left, Right, Button, Icon, Title, Form, Item, Label, Input, View, StyleProvider, Text} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';

const windowHeight = Dimensions.get('window').height;

const styles={
    view_content:{
        height:windowHeight*1/3 ,
        justifyContent: 'space-around',
        padding:20
    },
}

//输入二维码组件
export default class QRInputScreen extends Component {
    render() {
        return (
            <StyleProvider  style={getTheme(mytheme)}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => {
                                console.log('input');
                                this.props.navigation.dispatch(NavigationActions.back())
                            }}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>输入编号</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='help' />
                            </Button>
                        </Right>
                    </Header>
                    <View style={styles.view_content}>
                        <Text style={{fontSize:20 ,alignSelf:'center'}}>输入二维码下方的数字</Text>
                        <Item regular>
                             <Input keyboardType='numeric' maxLength={7}/>
                        </Item>
                        <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
                            <Button rounded onPress  = { () => this.props.navigation.navigate('Payment')}>
                                <Icon name='done'/>
                            </Button>
                            <Button rounded>
                                <Icon name='highlight'/>
                            </Button>
                        </View>
                    </View>
                </Container>
            </StyleProvider>
        );
    }
}