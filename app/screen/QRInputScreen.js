import React, { Component } from 'react';
import { Image} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, Header, Content, Body, Left, Right, Button, Icon, Title, Form, Item, Label, Input, View} from "native-base";

const styles={
    view_content:{
        flex:1 ,
    },
    image:{
        flex: 1,
    },
    form:{
        flex: 3,
    }
}

//输入二维码组件
export default class QRInputScreen extends Component {
    render() {
        return (
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
                    <Image source={require('../resource/image/shadow.png')} style={styles.image}/>
                        <Form style={styles.form}>
                            <Item floatingLabel>
                                <Label>输入二维码下方的编号</Label>
                                <Input/>
                            </Item>
                            <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
                                <Button rounded onPress  = { () => this.props.navigation.navigate('Payment')}>
                                    <Icon name='md-checkmark-circle'/>
                                </Button>
                                <Button rounded>
                                    <Icon name='md-bulb'/>
                                </Button>
                            </View>
                        </Form>
                </View>
            </Container>
        );
    }
}