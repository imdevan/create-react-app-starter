import {UI_LOADED} from '../actions/ui';

function user(state = {}, action) {
  switch (action.type) {
    case UI_LOADED:
      return {...state, loaded: action.loaded}
    default:
      return state
  }
}

export default user;
