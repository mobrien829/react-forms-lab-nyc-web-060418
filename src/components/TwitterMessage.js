import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  handleChanges = event => {
    this.setState(
      {
        message: event.target.value
      },
      () => console.log(this.state.message)
    );
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.handleChanges}
          type="text"
          value={this.state.message}
        />
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
