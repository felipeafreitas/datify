import axios from 'axios';
import qs from 'qs';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';
import ResultPage from './ResultPage';
import SongInput from './SongInput';
import SingleSong from './SingleSong';


function App() {
	return (
		<div className='container'>
			<BrowserRouter>
				<Route exact path='/asdsad' component={Homepage} />
				<Route exact path='/match/results' component={ResultPage} />
				<SongInput />
				<Route exact path="/track/:id" component={SingleSong} />
        {/* <Route exact path='/match' component={} /> */}
		
			</BrowserRouter>
		</div>
	);
}

export default App;
