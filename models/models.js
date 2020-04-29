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

  return {
    //getAll:getAll,
    //postNewArticlePage: postNewArticlePage,
    postRegisterPage: postRegisterPage,
    postLoginPage: postLoginPage
  };
};