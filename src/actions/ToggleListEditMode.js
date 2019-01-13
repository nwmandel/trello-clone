import {
  LIST_EDIT_MODE_ENABLED,
} from './ActionTypes';

export default function enableListMode() {
  return dispatch => dispatch({ type: LIST_EDIT_MODE_ENABLED, payload: true });
}
