import { MainStackNav }  from '../routers/MainStackRouter';
import { NavigationActions } from 'react-navigation';

export default function nav(state, action) {
    let nextState;
    switch (action.type) {
        case 'Login':
            console.log('nav.login');
            nextState = MainStackNav.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            if (action.next){
                nextState = MainStackNav.router.getStateForAction(
                                NavigationActions.navigate({ routeName: action.next }),
                                nextState
                            );
            }
            break;
        case 'Logout':
            console.log('nav.logout');
            console.log(state);
            while (state.index>0){
                nextState = MainStackNav.router.getStateForAction(
                    NavigationActions.back(),
                    state
                );
                state=nextState;
            };
            break;
        case 'Return2Main':
            console.log('nav.Return2Main');
            console.log(state);
            while (state.index>0){
                nextState = MainStackNav.router.getStateForAction(
                    NavigationActions.back(),
                    state
                );
                state=nextState;
            };
            break;
        default:
            nextState = MainStackNav.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}