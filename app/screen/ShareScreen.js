import React, { Component } from 'react';
import { Container, Header, Content, Body, Left, Right, Button, Text, Icon, Title,List, ListItem,StyleProvider} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'

export default class SearchScreen extends Component {
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
                            <Title>分享</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='help' />
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <List>
                            <ListItem>
                                <Text>微信</Text>
                            </ListItem>
                            <ListItem>
                                <Text>微博</Text>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}