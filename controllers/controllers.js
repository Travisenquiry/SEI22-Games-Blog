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
        const data = {
          "status": request.cookies["userstatus"]
        };
        response.render('home', data);
      }
    });
  };

  let getArticlePageControllerCallback = (request, response) => {
    db.models.getArticlePage(request, response, (error, result) => {
      if(error) {
        console.log("Query error", error.message);
      }else {
        let article = result.rows;
        db.models.getArticleCommentPage(request, response, (error, result) => {
          if(error) {
            console.log("QUERY ERROR", error.message);
          }else {
            let comments;
            if(!result){
              comments = "No comment yet";
            }else {
              comments = result.rows;
            }
            const data = {
              "article": article,
              "comments": comments,
              "status": request.cookies["userstatus"]
            };
            response.render('articles', data);
          }
        });
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
  let postCommentPageControllerCallback = (request, response) => {
    db.models.postCommentPage(request, response, (error, result) => {
      if(error) {
        console.log('QUERY ERROR', error.message);
        response.send("query ERROR COMMENT");
      }else {
        let link = "/articles/view/" + request.params.id;
        response.redirect(link);
      }
    });
  };

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
    postCommentPage: postCommentPageControllerCallback,
    postRegisterPage: postRegisterPageControllerCallback,
    postLoginPage: postLoginPageControllerCallback,
    postLogoutPage: postLogoutPageControllerCallback,
    postArticlePage: postArticlePageControllerCallback
  };

}