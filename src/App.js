import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import NotFound from "./components/NotFound";

class App extends React.Component {
	render() {
		return (
			<Router>
				<main>
					<h2>Simple React Router Example</h2>
					<nav id="navigation">
						<ul>
							<li>
								<Link to="/">Index</Link>
							</li>
							<li>
								<Link to="/section1">Section 1</Link>
							</li>
							<li>
								<Link to="/section2">Section 2</Link>
							</li>
							<li>
								<Link to="/section3">Section 3</Link>
							</li>
						</ul>
					</nav>
					<section id="contents">
						<Switch>
							{/*Use exact to prevent false positives when matching routes*/}
							<Route exact path="/" component={null} />
							<Route path="/section1" component={Section1} />
							<Route path="/section2" component={Section2} />
							<Route path="/section3" component={Section3} />
							<Route component={NotFound} />
						</Switch>
					</section>
				</main>
			</Router>
		);
	}
}

export default App;
