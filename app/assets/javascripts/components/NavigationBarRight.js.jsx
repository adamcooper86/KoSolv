var NavigationBarRight = React.createClass({
  handleClick: function(event){
    event.preventDefault();
    this.props.go(event.target.parentNode.id);
  },
  render: function(){
    if(this.props.page == "login"){
      var link = <a href="/login"
                    id="login"
                    className="h100px db"
                    onClick={this.handleClick}>
                    <button className="h100px w100px">
                      Login
                    </button>
                  </a>
    } else {
      var link =  <a href="/logout"
                    id="logout"
                    className="h100px db"
                    onClick={this.handleClick}>
                    <button className="h100px w100px">
                      Logout
                    </button>
                  </a>
    }
    return (
      <ul className="fr cr m0 p0">
        {link}
      </ul>
    )
  }
});
