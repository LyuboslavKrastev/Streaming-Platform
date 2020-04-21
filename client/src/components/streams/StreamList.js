import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    let streamElements = this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle algined icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
    return streamElements;
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams), // turn the values into an array
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
