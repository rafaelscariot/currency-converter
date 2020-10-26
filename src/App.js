import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Conversor from './components/Conversor';
import './components/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/conversor' render={() =>
					<div className='container'>
						<div className="row mt-4">
							<div className="col-sm">
								<Conversor coinA={`USD`} coinB={`BRL`} />
							</div>
							<div className="col-sm">
								<Conversor coinA={`CAD`} coinB={`BRL`} />
							</div>
						</div>
						<div className='row mt-4'>
						<div className="col-sm">
								<Conversor coinA={`EUR`} coinB={`BRL`} />
							</div>
							<div className="col-sm">
								<Conversor coinA={`AUD`} coinB={`BRL`} />
							</div>
						</div>
						<div className='row mt-4'>
							<div className="col-sm">
								<Conversor coinA={`SGD`} coinB={`BRL`} />
							</div>
							<div className="col-sm">
								<Conversor coinA={`ARS`} coinB={`BRL`} />
							</div>
						</div>
					</div>
				} />
			</Switch>
		</Router>
	);
}

export default App;