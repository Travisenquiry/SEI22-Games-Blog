var React = require("react");
var ArticleComponent = require("./components/articlecomponent");
var Layout;

class Articles extends React.Component {
  render() {
    if(this.props.status === undefined){
      Layout = require("./components/layoutanonymous");
    }else if(this.props.status === "admin") {
      Layout = require("./components/layoutadmin");
    }else if(this.props.status === "standard") {
      Layout = require("./components/layoutstandard");
    }
    return (
        <Layout>
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
        </Layout>
      );
  }
}

module.exports = Articles;