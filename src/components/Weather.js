import React from "react";

class Weather extends React.Component {
    render() {
        return(
                <div>
                    {this.props.temperature && <h2>{this.props.city}</h2>}
                    {this.props.temperature && <h3>Temperature: {this.props.temperature}</h3>}
                    {this.props.error && <h2>{this.props.error}</h2>}
                </div>
                );
    }
};
export default Weather;

