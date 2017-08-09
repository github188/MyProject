import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title,List, ListItem,StyleProvider} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'
import { NavigationActions } from 'react-navigation';

export default class  extends Component {
    render() {
        return (
            <StyleProvider  style={getTheme(mytheme)}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>确认页面</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='help' />
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <Text>将雨伞交给营业员解锁</Text>
                        <View>
                            <Text>timmer</Text>
                        </View>
                        <Button onPress = { () => this.props.navigation.dispatch({type:'Return2Main'})}>取消</Button>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}