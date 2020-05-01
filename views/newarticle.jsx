var React = require("react");
var ArticleComponent = require("./components/articlecomponent");
var Layoutanonymous = require("./components/layoutanonymous");
var Layoutadmin = require("./components/layoutadmin");
var Layoutstandard = require("./components/layoutstandard");

class Newarticle extends React.Component {
  render() {
    return (
      <Layoutadmin>
        <div className="header row-10">
          <h2>Create new Article</h2>
        </div>
        <div className="new-article-form row-10 justify-content-center">
          <form method="POST" action="/">
            <div>Title</div>
            <div>
              <input type="text" name="title"></input>
            </div>
            <div>Banner image link (Size: 1600x900)</div>
            <div>
              <input type="text" name="image"></input>
            </div>
            <div>
              <div>Content</div>
              <textarea rows="10" cols="80" type="text" id="article-content" name="content"></textarea>
            </div>
            <div>
              <input type="submit" value="Create"></input>
            </div>
          </form>
        </div>
      </Layoutadmin>
    );
  }
}

module.exports = Newarticle;