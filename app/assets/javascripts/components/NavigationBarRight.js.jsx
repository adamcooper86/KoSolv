var NavigationBarRight = React.createClass({
  handleClick: function(event){
    event.preventDefault();
    this.props.go(event.target.parentNode.id);
  },
  render: function(){
    return (
      <ul className="fr cr m0 p0">
        <a href="/login" id="login" className="h100px db" onClick={this.handleClick}><button className="h100 w100">Login</button></a>
      </ul>
    )
  }
});
