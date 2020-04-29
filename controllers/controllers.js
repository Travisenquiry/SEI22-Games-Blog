module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  /*let indexControllerCallback = (request, response) => {
      db.models.getAll((error, allPokemon) => {
        response.render('pokemon/index', { allPokemon });
      });
  };*/

  let getHomePageControllerCallback = (request, response) =>  {
    response.render('home');
  };

  let getNewArticlePageControllerCallback = (request,response) => {
    response.render('newarticle');
  };

  /*let submitNewArticleControllerCallback = (request, response) => {

  };*/

  let getLoginPageControllerCallback = (request, response) => {
    response.render('login');
  };

  let getRegisterPageControllerCallback = (request, response) => {
    response.render('register');
  };

  let postRegisterPageControllerCallback = (request,response) => {
    db.models.postRegisterPage(request, response, (error, result) => {
      if(error) {
        console.log('Query error', error.message);
        response.send("query error");
      }else {
        response.cookie('username', result.rows[0].username);
        response.cookie('userstatus', result.rows[0].status);
        response.redirect('/');
      }
    });
  };

/**
 * ===========================================
 * Export controller functions as a module
 * ===========================================
 */
  return {
    getHomePage: getHomePageControllerCallback,
    getNewArticlePage: getNewArticlePageControllerCallback,
    getLoginPage: getLoginPageControllerCallback,
    getRegisterPage: getRegisterPageControllerCallback,
    postRegisterPage: postRegisterPageControllerCallback
  };

}