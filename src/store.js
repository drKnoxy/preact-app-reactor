import { Component } from 'preact';

export default class Store extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    // api -> state
  }

  render() {
    // if you have any state that should block rendering
    // check for it and return null
    return this.props.children({ ...this.state });
  }
}
