import {GET_ARTICLES, PAGE, LOADING, GET_ARTICLE} from './types'

import Api from '../servise/Api';

const api = new Api();

export  function getArticles(page) {
  return async (dispatch) => {
 dispatch({ type: LOADING, payload: true });
    const articles = await api.getArticles(page);
    dispatch({ type: GET_ARTICLES, payload: articles });
	 dispatch({ type: LOADING, payload: false });
  };
}


export  function getSingleArticle(slug) {
  return async (dispatch) => {
 dispatch({ type: LOADING, payload: true });
    const article = await api.getArticle(slug);
    dispatch({ type: GET_ARTICLE, payload: article });
	 dispatch({ type: LOADING, payload: false });
  };
}


export  function updatePage(page) {
return {type: PAGE, payload:page}
}


export function onLoaded(flag){
	 return ({ type: LOADING, payload: flag });
}

