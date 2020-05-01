var React = require("react");
var ArticleComponent = require("./components/articlecomponent");

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
    return (
      <html>
        <head>
          <meta charset="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
          <link rel="stylesheet" href="/style.css"></link>
        </head>
        <body>
          <div className="container">
            <div className="row justify-content-center">
              <h1>Gaming News and Articles</h1>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand">Navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">Register</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/articles/new">Create Article</a>
                  </li>
                  <li className="nav-item">
                    <form method="POST" action="/logout">
                      <div>
                        <input type="hidden" name="extra_logout_param"></input>
                      </div>
                      <input type="submit" className="nav-item link-button" value="Logout"></input>
                    </form>
                  </li>
                </ul>
              </div>
            </nav>
            {allArticles}
          </div>
          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;