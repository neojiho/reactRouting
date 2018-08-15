import React, {Component} from 'react';
import './App.css';
import About from './components/About'
import Home from './components/Home'
import Repos from './components/Repos'


class App extends Component {

	constructor() {
		super(...arguments);
		this.state = {
			route: window.location.hash.substr(1)
		}
	}

	componentWillMount(){
		//window.location.href = "/";
	}

	componentDidMount() {

		window.addEventListener('hashchange', () => {
			this.setState({
				route: window.location.hash.substr(1)
			})
		})
	}

	render() {
		const routeLocation = ()=>{
			switch(this.state.route) {
				case '/about' : return <About />
				case '/repos' : return <Repos />
				default : return <Home />
			}
		};
		return (
			<div className="App">
				<header><h1><a href="/">Route example</a></h1></header>
				<menu>
					<ul>
						<li><a href="#/about">About</a></li>
						<li><a href="#/repos">Repos</a></li>
					</ul>
				</menu>
				<div>
				{routeLocation()}
				</div>
			</div>
		);
	}
}

export default App;
