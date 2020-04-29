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

  let showHomePageControllerCallback = (request, response) =>  {
    response.render('home');
  };

  let showNewArticleControllerCallback = (request,response) => {
    response.render('newarticle');
  };

  let submitNewArticleControllerCallback = (request, response) => {

  };

  let showLoginPageControllerCallback = (request, response) => {
    response.render('login');
  };

  let showRegisterPageControllerCallback = (request, response) => {
    response.render('register');
  };


/**
 * ===========================================
 * Export controller functions as a module
 * ===========================================
 */
  return {
    showHomePage: showHomePageControllerCallback,
    showNewArticle: showNewArticleControllerCallback,
    showLoginPage: showLoginPageControllerCallback,
    showRegisterPage: showRegisterPageControllerCallback
  };

}