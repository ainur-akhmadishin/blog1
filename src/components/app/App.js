import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Route } from 'react-router-dom';
import CardList from '../cardList'
import Article from '../article'
import SignIn from '../signIn'
import classes from './App.module.scss'

const App = () =>
		<BrowserRouter>
		<div className = {classes.App}>
	<Route path = '/' exact component = {CardList} />
	<Route path = "/article/:slug"  component = {Article} />
	<Route path = '/sign-in' component = {SignIn} />
	</div>
		</BrowserRouter>



function mapStateToProps(state) {
const {articles} = state;
return articles
}



export default connect(mapStateToProps, null)(App);

