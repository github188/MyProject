import React, { Component } from 'react';
import { Container, Header, Content, Icon, StyleProvider, Input, Item} from "native-base";
import getTheme from '../../native-base-theme/components';
import mytheme from '../../native-base-theme/variables/mytheme'

//搜索
export default class WalletScreen extends Component {
    render() {
        return (
            <StyleProvider  style={getTheme(mytheme)}>
                <Container>
                    <Header searchBar>
                        <Item>
                            <Icon name="arrow-back" onPress={() => this.props.navigation.goBack()}/>
                            <Input placeholder="Search" />
                            <Icon name="search" onPress={() => console.log('search','')}/>
                        </Item>
                    </Header>
                    <Content>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}