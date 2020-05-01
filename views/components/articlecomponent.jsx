var React = require("react");

class Articlecomponent extends React.Component {
  render() {
    let articleLink = "/articles/view/" + this.props.id;
    return (
      <div className="row justify-content-center article">
        <div className="col-10 justify-content-center">
          <a href={articleLink}><img src={this.props.image} className=" img-fluid" /></a>
          <h2><a className="headline" href={articleLink}>{this.props.title}</a></h2>
        </div>
      </div>
    );
  }
}

module.exports = Articlecomponent;