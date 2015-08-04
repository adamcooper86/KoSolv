var NavigationBarLeft = React.createClass({
  handleClick: function(event){
    event.preventDefault();
    this.props.go(event.target.parentElement.id);
  },
  render: function(){
    return (
      <ul className="fl cr m0 p0">
        <a href="/home" id="homePage" className="fl" onClick={this.handleClick}><button className="h100 w100">Home</button></a>{' '}
        <a href="/questions" id="questions" className="fl db" onClick={this.handleClick}><button className="h100 w100">Questions</button></a>
      </ul>
    )
  }
});
