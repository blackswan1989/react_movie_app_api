import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    //console.log(props);
    const { location, history } = this.props;
    //console.log(location.state);
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span className="detail">{location.state.summary}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
