var React = require("react");
var ArticleComponent = require("./components/articlecomponent");
var Layout;

class Articles extends React.Component {
  render() {
    console.log(this.props);
    let commentBoxLink = "/articles/view/" + this.props.article[0].id;
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
        <div className ="row">
        </div>
        <div className="row">
          <div className="col-10 message">
          </div>
        </div>
        <div className="row justify-content-center add-a-comment">
          <button type="button" className="btn btn-secondary" id="comment-box-button">Add a comment</button>
        </div>
        <div className="row justify-content-center" id="comment-form" style={{visibility: 'hidden'}}>
          <h3>Add your comment</h3>
          <form id="comment-box" method="POST" action={commentBoxLink}>
            <div>
              <input type="text" name="article_id" value={this.props.article[0].id} style={{visibility: 'hidden'}}></input>
            </div>
            <div>
              <textarea rows="10" cols="80" type="text" id="article-content" name="message"></textarea>
            </div>
            <div className="row justify-content-center">
              <button className="btn btn-secondary" type="submit">Comment</button>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Articles;