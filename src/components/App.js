import axios from 'axios';
import qs from 'qs';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';
import ResultPage from './ResultPage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/match/results' component={ResultPage} />
			</BrowserRouter>
		</div>
	);
}

export default App;
