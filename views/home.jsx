var React = require("react");
var ArticleComponent = require("./components/articlecomponent");
var Layout;

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
    console.log(this.props);
    if(this.props.status === undefined) {
      Layout = require("./components/layoutanonymous");
    }else if(this.props.status === "admin"){
      Layout = require("./components/layoutadmin");
    }else if(this.props.status === "standard") {
      Layout = require("./components/layoutstandard");
    }
    return (
      <Layout>
        {allArticles}
      </Layout>
    );
  }
}

module.exports = Home;