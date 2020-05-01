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

//All GET controllers
  let getHomePageControllerCallback = (request, response) =>  {
    db.models.getHomePage(request, response, (error, result) => {
      if(error) {
        console.log("Query error", error.message);
        response.send("query error");
      }else {
        let data = {
          "articles": result.rows
        };
        response.render('home', data);
      }
    });
  };

  let getNewArticlePageControllerCallback = (request,response) => {
    response.render('newarticle');
  };

  let getLoginPageControllerCallback = (request, response) => {
    response.render('login');
  };

  let getRegisterPageControllerCallback = (request, response) => {
    response.render('register');
  };


//All POST controllers
  let postRegisterPageControllerCallback = (request,response) => {
    db.models.postRegisterPage(request, response, (error, result) => {
      if(error) {
        console.log('Query error', error.message);
        response.send("query error");
      }else {
        response.cookie('username', result.rows[0].username);
        response.cookie('userstatus', result.rows[0].status);
        response.cookie('userid', result.rows[0].id);
        response.redirect('/');
      }
    });
  };

  let postLoginPageControllerCallback = (request, response) => {
    db.models.postLoginPage(request, response, (error, result) => {
      if(error) {
        console.log('Query error', error.message);
        response.send("query, error");
      }else {
        console.log(result);
        if(result === null){
          response.redirect('/login');
        }else {
          response.cookie('username', result.rows[0].username);
          response.cookie('userstatus', result.rows[0].status);
          response.cookie('userid', result.rows[0].id);
          response.redirect('/');
        }
      }
    });
  };

  let postLogoutPageControllerCallback = (request, response) => {
    response.clearCookie('username');
    response.clearCookie('userstatus');
    response.redirect('/login');
  };

  let postArticlePageControllerCallback = (request, response) => {
    db.models.postArticlePage(request, response, (error, result) => {
      if(error) {
        console.log("Query error:", error.message);
        response.send("query error");
      }else {
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
    postRegisterPage: postRegisterPageControllerCallback,
    postLoginPage: postLoginPageControllerCallback,
    postLogoutPage: postLogoutPageControllerCallback,
    postArticlePage: postArticlePageControllerCallback
  };

}