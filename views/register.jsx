var React = require("react");
var Layout = require("./components/layoutanonymous");

class Register extends React.Component {
  render() {
    return (
      <Layout>
        <div className="row justify-content-center">
          <h2>Register Account</h2>
        </div>
        <div className="row justify-content-center">
          <form method="POST" action="/register">
            <div>
              Username:
              <input type="text" name="username"></input>
            </div>
            <div>
              Password:{' '}
              <input type="password" name="password"></input>
            </div>
            <div className="row justify-content-center">
              <input type="submit" value="Register"></input>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Register;