/**
 * @author Philip Van Raalte
 * @date 2017-09-19.
 */
import {FETCH_USER} from "../actions/types";

export default function (state = null, action) {
  switch(action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}