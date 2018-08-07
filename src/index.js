import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import artistsReducer from './reducers/artists-reducer'
import albumsReducer from './reducers/albums-reducer'

const allReducers = combineReducers({
	artists: artistsReducer,
	albums: albumsReducer
})
const store = createStore(
	allReducers, 
	{
		artists: [{name: 'Ryan Adams'}],
		albums: 'Heartbreaker'
	},
	window.devToolsExtension && window.devToolsExtension()

);

// console.log(store.getState())

// const updateAlbumsAction = {
// 	type: 'updateAlbums',
// 	payload: {
// 		albums: 'Gold'
// 	}
// }
// store.dispatch(updateAlbumsAction)

ReactDOM.render(
		<Provider store={store}><App /></Provider>, document.getElementById('root')
		
);
