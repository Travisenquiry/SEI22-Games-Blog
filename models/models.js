/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (pool, sha256) => {

  // `dbPoolInstance` is accessible within this function scope

/*  let getAll = (callback) => {

    let query = 'SELECT * FROM pokemons';

    pool.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  }; */

  /*let postNewArticle = (request, response, callback) => {

  };*/

  //All GET models
  let getHomePage = (request, response, callback) => {
    let queryString = "SELECT * FROM articles";
    pool.query(queryString, (error, result) => {
      if(error) {
        callback(error, null);
      }else if(result.rows.length > 0) {
        callback(null, result);
      }else {
        callback(null, null);
      }
    });
  };

  let getArticlePage = (request, response, callback) => {
    let queryString = "SELECT articles.*, users.username FROM articles INNER JOIN users ON (articles.user_id = users.id) WHERE articles.id = " + request.params.id;
    pool.query(queryString, (error, result) => {
      if(error) {
        callback(error, null);
      }else if(result.rows.length > 0) {
        callback(null, result);
      }else {
        callback(null, null);
      }
    });
  };

   let getArticleCommentPage = (request, response, callback) => {
    let queryString = "SELECT comments.*, users.username FROM comments LEFT JOIN  users ON (comments.user_id = users.id) WHERE comments.article_id = " + request.params.id + " ORDER BY comments.id ASC";
    pool.query(queryString, (error, result) => {
      if(error) {
        callback(error, null);
      }else if(result.rows.length > 0) {
        callback(null, result);
      }else {
        callback(null, null);
      }
    });
  };

  //All POST models
  let postCommentPage = (request, response, callback) => {
    let queryString = "INSERT INTO comments (article_id, user_id, message) VALUES ($1, $2, $3)";
    let message = request.body.message.replace(/\n\r?/g, '<br />');
    let values = [request.body.article_id, request.cookies["userid"], message];
    pool.query(queryString, values, (error, result) => {
      if(error) {
        callback(error, null);
      }else {
        callback(null, null);
      }
    });
  };

  let postRegisterPage = (request, response, callback) => {
    let queryString = "INSERT INTO users (username, password, status) VALUES ($1, $2, $3)";
    let passwordValue = sha256(request.body.password);
    let values = [request.body.username, passwordValue, "standard"];
    pool.query(queryString, values, (error, result) => {
      if(error) {
          callback(error, null);
      }else {
        queryString = "SELECT * FROM users WHERE username = '" + request.body.username + "'";
        pool.query(queryString, (error, result) => {
          if(error) {
            callback(error, null);
          }else if(result.rows.length > 0) {
            callback(null, result);
          }else {
            callback(null, null);
          }
        });
      }
    });
  };

  let postLoginPage = (request, response, callback) => {
    let passwordHashed = sha256(request.body.password);
    let queryString = "SELECT * FROM users WHERE username = '" + request.body.username + "' AND password = '" + passwordHashed + "'";
    pool.query(queryString, (error, result) => {
      if(error) {
        callback(error, null);
      }else if(result.rows.length > 0) {
        callback(null, result);
      }else {
        callback(null, null);
      }
    });
  };

  let postArticlePage = (request, response, callback) => {
    let queryString = "INSERT INTO articles (user_id, title, content, img) VALUES ($1, $2, $3, $4)";
    let content = request.body.content.replace(/\n\r?/g, '<br />');
    let values = [request.cookies["userid"], request.body.title, content, request.body.image];
    pool.query(queryString, values, (error, result) => {
      if(error) {
        callback(error, null);
      }else {
        callback(null, null);
      }
    });
  };

  return {
    //getAll:getAll,
    //postNewArticlePage: postNewArticlePage,
    getHomePage: getHomePage,
    getArticlePage: getArticlePage,
    getArticleCommentPage: getArticleCommentPage,
    postCommentPage: postCommentPage,
    postRegisterPage: postRegisterPage,
    postLoginPage: postLoginPage,
    postArticlePage: postArticlePage
  };
};