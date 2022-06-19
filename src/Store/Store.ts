import { createStore } from 'redux';
import { tokenReducer } from './Tokens/TokensReducer';

const store = createStore(tokenReducer);

export default store;