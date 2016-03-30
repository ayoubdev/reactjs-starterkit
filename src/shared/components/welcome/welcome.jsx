import React from "react";

class WelcomeComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let params = this.props.params;
		
		return (
			<p> Welcome {params.name} to React world ! [You are {params.age} years old] </p>
		);
	}
}

WelcomeComponent.propTypes = {
	params: React.PropTypes.object
};

export default WelcomeComponent;
