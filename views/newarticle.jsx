var React = require("react");
var ArticleComponent = require("./components/articlecomponent");
var Layoutadmin = require("./components/layoutadmin");

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
            <div id="image-after-upload"></div>
            <div>
              <button type="button" id="upload_widget" class="cloudinary-button">Upload files</button>
              <input type="text" name="image" id="image-link" style={{visibility:"hidden"}}></input>
            </div>
            <div>
              <div>Content</div>
              <textarea rows="10" cols="80" type="text" id="article-content" name="content"></textarea>
            </div>
            <div>
              <button className="btn btn-secondary" type="submit">Create</button>
            </div>
          </form>
        </div>
      </Layoutadmin>
    );
  }
}

module.exports = Newarticle;