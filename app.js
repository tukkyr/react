var React = require('react');
var ReactDOM = require('react-dom');

class Element extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(
  <Element name='Tester'/>,
  document.getElementById('root')
);
