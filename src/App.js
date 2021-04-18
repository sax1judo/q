import React,{useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './components/Card';
import EditForm from './components/EditForm';

const App = (props) => {
	useEffect(() => {
		props.setCards(JSON.parse(localStorage.getItem('cards')))
	},[])
	return (
		<Router>
			<div>
				<ul className="navigationLinks">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/cards">Cards</Link>
					</li>
					<li>
						<Link to="/cards/add">Add Card</Link>
					</li>
					
				</ul>

				<Switch>
					<Route exact path="/cards">
					{props.cards.map((card,idx)=>{
						return(
							<Link to={'/cards/'+ card.id+'/edit'} key={card.id} >
								<Card key={idx} card={card}/>
							</Link>
						)
					})}
					
					</Route>
					<Route path="/cards/add">
						
					</Route>
					<Route path="/cards/:id/edit" exact render={(props) => (<EditForm {...props}/>)}>
						
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
const mapStateToProps = state => ({
	cards: state.reducer.cards,
	
});
const mapDispatchToProps = dispatch => {
	return {
		setCards: (data) => dispatch({ type: 'SET_CARDS', data:data}),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);