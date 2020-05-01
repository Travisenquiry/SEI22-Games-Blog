var React = require("react");
var ArticleComponent = require("./components/articlecomponent");
var Layoutanonymous = require("./components/layoutanonymous");
var Layoutadmin = require("./components/layoutadmin");
var Layoutstandard = require("./components/layoutstandard");

class Articles extends React.Component {
  render() {
    if(this.props.status === undefined){
      return (
        <Layoutanonymous>
          <div className="row">
            <div className="col">
              <h2>{this.props.article[0].title}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>By: {this.props.article[0].username}</h5>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-10 article">
              <img src={this.props.article[0].img} className="img-fluid" />
              <p id="content">{this.props.article[0].content}</p>
            </div>
          </div>
        </Layoutanonymous>
      );
    }else if(this.props.status === "admin") {
      return (
        <Layoutadmin>
          <div className="row">
            <div className="col">
              <h2>{this.props.article[0].title}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>By: {this.props.article[0].username}</h5>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-10 article">
              <img src={this.props.article[0].img} className="img-fluid" />
              <p id="content">{this.props.article[0].content}</p>
            </div>
          </div>
        </Layoutadmin>
      );
    }else if(this.props.status === "standard") {
      return (
        <Layoutstandard>
          <div className="row">
            <div className="col">
              <h2>{this.props.article[0].title}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>By: {this.props.article[0].username}</h5>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-10 article">
              <img src={this.props.article[0].img} className="img-fluid" />
              <p id="content">{this.props.article[0].content}</p>
            </div>
          </div>
        </Layoutstandard>
      );
    }
  }
}

module.exports = Articles;