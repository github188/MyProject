import { AppNavigator } from '../app';
import { NavigationActions } from 'react-navigation';

export default function nav(state, action) {
    let nextState;
    switch (action.type) {
        case 'Login':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            if (action.next){
                nextState = AppNavigator.router.getStateForAction(
                                NavigationActions.navigate({ routeName: action.next }),
                                nextState
                            );
            }
            break;
        case 'Logout':
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}