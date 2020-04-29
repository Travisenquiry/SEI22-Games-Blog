module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const controllerCallbacks = require('./controllers/controllers')(allModels);

  //All GET routes
  app.get('/articles/new', controllerCallbacks.showNewArticle);
  app.get('/login', controllerCallbacks.showLoginPage);
  app.get('/register', controllerCallbacks.showRegisterPage);
  app.get('/', controllerCallbacks.showHomePage);

  //All POST routes
  //app.post('/', controllerCallBacks.submitNewArticle);

  //app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};