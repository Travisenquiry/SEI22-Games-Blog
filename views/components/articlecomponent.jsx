var React = require("react");

class Articlecomponent extends React.Component {
  render() {
    let articleLink = "/articles/" + this.props.id;
    return (
      <div className="row justify-content-center">
        <a href={articleLink}><img src={this.props.image} className="img-fluid" /></a>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

module.exports = Articlecomponent;