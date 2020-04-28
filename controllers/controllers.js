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



/**
 * ===========================================
 * Export controller functions as a module
 * ===========================================
 */
  return {
  //index: indexControllerCallback,
    showHomePage: showHomePageControllerCallback
  };

}