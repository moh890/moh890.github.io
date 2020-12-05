import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Aboutus from './aboutus';
import Sports from './sports';
import News from './news';
import Education from './education';
import History from './history';
import Home from './home';

class header extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<Home />
				<nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top">
				<a class="navbar-brand" href="/home">Pulathisi Logo</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse " id="navbarNavDropdown">
					<ul class="navbar-nav mx-auto">
						<li class="nav-item">
							<a class="nav-link" href="/home"><span className="fa fa-home"></span> Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/aboutus"><span className='fa fa-ban'></span> Aboutus</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/news"><span className="fa fa-paper-plane"></span> News</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/history"><span className='fa fa-history'></span> History</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/education"><span className="fa fa-book"></span> Education</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/sports"><span className='fa fa-futbol-o'></span> Sports</a>
						</li>
						
					</ul>
				</div>
			</nav>
				<Switch>
					<Route path="/home" exact component={Home} />
					<Route path="/" exact component={Home} />
					<Route path="/aboutus" component={Aboutus} />
					<Route path="/news" component={News} />
					<Route path="/history" component={History} />
					<Route path="/education" component={Education} />
					<Route path="/Sports" component={Sports} />


				</Switch>
			</React.Fragment>
			
		);
	}
}

export default header;