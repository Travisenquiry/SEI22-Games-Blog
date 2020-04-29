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
  app.get('/articles/new', controllerCallbacks.getNewArticlePage);
  app.get('/login', controllerCallbacks.getLoginPage);
  app.get('/register', controllerCallbacks.getRegisterPage);
  app.get('/', controllerCallbacks.getHomePage);

  //All POST routes
  app.post('/register', controllerCallbacks.postRegisterPage);
  app.post('/login', controllerCallbacks.postLoginPage);
  //app.post('/', controllerCallBacks.submitNewArticle);

  //app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};