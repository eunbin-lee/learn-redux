import { combineReducers } from 'redux';
import color from './modules/color';
import counter from './modules/counter';
import changecolor from './modules/changecolor';
import todos from './modules/todos';

export default combineReducers({
  color,
  counter,
  changecolor,
  todos,
});
