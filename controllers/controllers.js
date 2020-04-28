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


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    //index: indexControllerCallback,
  };

}