var React = require("react");
var ArticleComponent = require("./components/articlecomponent");
var Layoutanonymous = require("./components/layoutanonymous");
var Layoutadmin = require("./components/layoutadmin");
var Layoutstandard = require("./components/layoutstandard");

class Home extends React.Component {
  render() {
    let allArticles;
    if(this.props.articles === undefined){
      allArticles = <div className="row justify-content-center">No article yet!</div>
    }else {
      allArticles = this.props.articles.map(article => {
        return <ArticleComponent title={article.title} image={article.img} id={article.id}>
            </ArticleComponent>
      });
    }
    if(this.props.status === undefined) {
      return (
        <Layoutanonymous>
          {allArticles}
        </Layoutanonymous>
      );
    }else if(this.props.status === "admin"){
      return (
        <Layoutadmin>
          {allArticles}
        </Layoutadmin>
      );
    }else if(this.props.status === "standard") {
      return (
        <Layoutstandard>
          {allArticles}
        </Layoutstandard>
      )
    }
  }
}

module.exports = Home;