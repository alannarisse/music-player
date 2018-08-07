import React, { Component } from 'react';
import './App.css'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'




class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			query: ''
		}
	}

	search(){
		console.log('this.state', this.state);
		const client_id = 'db3464895b1143efac929c0c9558fe28'; // Your client id
		const client_secret = '456b12001e134de78f7337853a5950c7';
		const BASE_URL = 'https://api.spotify.com/v1/search'
		const FETCH_URL = BASE_URL + 'client_id=' + client_id + 'client_secret=' + client_secret + 'q=' + this.state.query
						+ '&type=artist&limit=1';
		console.log('FETCH_URL', FETCH_URL);
	}

	render (){
		return(
			<div>
				<header role="banner">
					<h1>Music Master from App</h1>
				</header>
				<main role="main">
					
					<FormGroup>
						<InputGroup>
							<FormControl
						 		type="text"
						 		placeholder="Search an artist... "
						 		value={this.state.query}
						 		onChange={event => {this.setState({query: event.target.value})}}
						 		// what's the enter key value? //onKeyPress={event => console.log('event.key', event.key)}
						 		onKeyPress={event => {
						 			if (event.key === 'Enter'){
						 				this.search();
						 			}

						 		}}
							/>
							<InputGroup.Addon onClick={() => this.search()}>
								<Glyphicon glyph="search"></Glyphicon>
							</InputGroup.Addon>
						</InputGroup>
					</FormGroup>

					<section className="profile">
						<div>Artist Picture</div>
						<div>Artist Name</div>
					</section>
					<section className="gallery">
						gallery
					</section>
				</main>
			</div>
		)
	};

}

export default App;