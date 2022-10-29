import './App.css';

function LoginForm() {
  return (
    <div id="LoginForm">
      <h3>Log In</h3>
      <label for="uname">User name:</label>
      <input type="text" id="uname" name="uname" /><br />
      <label for="pword">Password:</label>
      <input type="text" id="pword" name="pword" /><br />
      <input type="submit" value="submit" />
    </div>
  )
}

function NavForm() {
  return (
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">WebSiteName</a>
      </div>
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#">Page 1</a></li>
          <li><a href="#">Page 2</a></li>
          <li><a href="#">Page 3</a></li>
        </ul>
    </div>
  )
}

export {NavForm, LoginForm};