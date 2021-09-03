import { combineReducers } from 'redux';
import articlesReduser from './articlesReduser';
import articleReduser from './articleReduser';
import loadingReduser from './loadingReduser';

const reducer = combineReducers({
  articles: articlesReduser,
  article: articleReduser,
  loading:loadingReduser,

});

export default reducer;