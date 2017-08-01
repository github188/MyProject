'use strict'

import { addNavigationHelpers,DrawerNavigator } from 'react-navigation';
import React,{Component} from 'react';
import { connect } from 'react-redux';

import ShareScreen from '../screen/ShareScreen';
import MenuScreen from '../screen/MenuScreen';

export const MenuDrawerNav = DrawerNavigator({
    Menu: { screen: MenuScreen },
    },{
    headerMode: 'none',
    contentComponent:props => <ShareScreen {...props}/>
});

const MenuDrawerRouter = ({ dispatch, nav }) => (
    <Root>
        <MenuDrawerNav navigation={addNavigationHelpers({ dispatch, state: nav })} />
    </Root>
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(MenuDrawerRouter);