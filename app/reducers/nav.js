import { MainStackNav }  from '../routers/MainStackRouter';
import { NavigationActions } from 'react-navigation';

export default function nav(state, action) {
    let nextState;
    switch (action.type) {
        case 'Login':
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
            nextState = MainStackNav.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            );
            break;
        default:
            nextState = MainStackNav.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}