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
      }else if(result !== null){
        const data = {
          "articles": result.rows,
          "status": request.cookies["userstatus"]
        };
        response.render('home', data);
      }else {
        const data = undefined;
        response.render('home', data);
      }
    });
  };

  let getArticlePageControllerCallback = (request, response) => {
    db.models.getArticlePage(request, response, (error, result) => {
      if(error) {
        console.log("Query error", error.message);
      }else {
        const data = {
          "article": result.rows,
          "status": request.cookies["userstatus"]
        };
        response.render('articles', data);
      }
    });
  };

  let getNewArticlePageControllerCallback = (request,response) => {
    let status = request.cookies["userstatus"];
    if (status === "admin"){
      const data = {
        "status": status
      };
      response.render('newarticle', data);
    }else {
      response.redirect('/');
    }
  };

  let getLoginPageControllerCallback = (request, response) => {
    let status = request.cookies["userstatus"];
    if(status === undefined){
      response.render('login');
    }else {
      response.redirect('/');
    }
  };

  let getRegisterPageControllerCallback = (request, response) => {
    let status = request.cookies["userstatus"];
    if(status === undefined){
      response.render('register');
    }else {
      response.redirect('/');
    }

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
    response.clearCookie('userid');
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
    getArticlePage: getArticlePageControllerCallback,
    getNewArticlePage: getNewArticlePageControllerCallback,
    getLoginPage: getLoginPageControllerCallback,
    getRegisterPage: getRegisterPageControllerCallback,
    postRegisterPage: postRegisterPageControllerCallback,
    postLoginPage: postLoginPageControllerCallback,
    postLogoutPage: postLogoutPageControllerCallback,
    postArticlePage: postArticlePageControllerCallback
  };

}