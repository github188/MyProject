import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title, List, ListItem, StyleProvider} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'

//借伞历史组件
export default class BorrowHistoryScreen extends Component {
    render() {
        let items = [
            {startTime:20170728,endTime:20170730,fee:3,duration:3},
            {startTime:20170722,endTime:20170724,fee:3,duration:3}]

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
                            <Title>用伞记录</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='help' />
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                    <List dataArray={items} renderRow={(item) =>
                        <ListItem>
                            <Text>{item.startTime}</Text>
                            <Text>{item.endTime}</Text>
                            <Text>{item.duration}天</Text>
                            <Text>{item.fee}元</Text>
                        </ListItem>
                    }>
                    </List>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}