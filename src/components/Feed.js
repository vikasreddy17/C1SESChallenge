import './Feed.css';
import React from 'react';
import Dropdown from './Dropdown';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
            ActivitiesParksData: []
		};
	}

	componentDidMount() {
        fetch("https://developer.nps.gov/api/v1/activities/parks?limit=50&api_key=aVCUOzdpJwz35ogufzSjF37a4v19pVjOelQ1pa5v")
        .then(res => res.json())
        .then(json => {
            this.setState({
                ActivitiesParksData: json["data"]
            })
        })
    }

	render() {
		var {ActivitiesParksData} = this.state;
		return (
			<div className = "Feed">
                <Dropdown title="Select Activity" items={ActivitiesParksData}/>
			</div>
	  	);	
  	}
}

export default App;
