var Header = React.createClass({
  handleClick: function(name){
    this.props.go(name);
  },
  render: function(){
    return (
      <header className="bg-b h100px tac cr">
        <NavigationBarLeft go={this.handleClick} />
        <NavigationBarRight go={this.handleClick} page={this.props.page}/>
      </header>
    )
  }
});
