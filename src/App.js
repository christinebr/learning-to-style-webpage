import "./App.css";
import {
	Navbar,
	Myheader,
	About,
	Service,
	Numbers,
	Portfolio,
} from "./docs/components";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	// Redirect,
} from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Route>
					<Navbar></Navbar>
					<Myheader></Myheader>
				</Route>
				<Route>
					<About></About>
					<Numbers></Numbers>
				</Route>

				<Route>
					<Service></Service>
				</Route>

				<Route>
					<Portfolio></Portfolio>
				</Route>
			</Router>
		</>
	);
}

export default App;
