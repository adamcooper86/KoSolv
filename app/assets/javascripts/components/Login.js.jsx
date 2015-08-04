var Login = React.createClass({
  getInitialState: function(){
    return {
      error: null
    }
  },
  handleSubmit: function(event){
    event.preventDefault();

    var LoginComponent = this;

    var data = {
      username: this.refs.username.getDOMNode().value,
      pin: this.refs.pin.getDOMNode().value,
    }

    call('/users', 'post', data)
      .then(function(serverData){
        LoginComponent.props.login(serverData);
      })
      .catch(function(serverData){
        LoginComponent.setState({
          error: "That was not a valid Login, please try again."
        });
      })
  },
  render: function(){
    var error = this.state.error;

    return(
      <div>
        <p>{error}</p>
        <form id="login" onSubmit={this.handleSubmit} >
          <input placeholder="Username" name="username" ref="username" />
          <input placeholder="Pin" name="pin" ref="pin" />
          <input type="submit" value="Come On In!" />
        </form>
      </div>
    )
  }
});
