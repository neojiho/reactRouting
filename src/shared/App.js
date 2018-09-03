import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home, About} from 'pages';



class App extends Component {
	render(){
		return(
			<div>
				<Route exact path="/" component={Home} />{/*exact는 절대적인 path가 설정되어있어야 동작함.*/}
				<Switch>
					<Route path="/about/:name" component={About} />
					<Route path="/about" component={About} />
				</Switch>
			</div>
		)
	}
}

export default App;
