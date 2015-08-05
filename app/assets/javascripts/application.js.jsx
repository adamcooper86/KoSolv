//= require jquery
//= require jquery_ujs
//= require react
//= require react_ujs
//= require_tree ./components
//= require_self

var call = function(action, method, data){
  return new Promise(function(resolve, reject){
    request = $.ajax({
      url:      action,
      method:   method,
      data:     data,
      dataType: "json"
    });

    request.done(function(serverData){
      resolve(serverData)
    });

    request.fail(function(serverData){
      reject(serverData)
    });
  });
}

var App = React.createClass({
  getInitialState: function(){
    return {
      page: 'login',
      user: null,
      question: null,
      solution: null,
    }
  },
  currentUser: function( ){
    call('/current', 'get')
      .then(function(responseData){
        this.setState({
          user: responseData,
          page: 'home'
        });
      })
      .catch(function(responseData){
        console.log('No user signed in');
      });
  },
  componentDidMount: function(){
    this.currentUser();
  },
  goToPage: function(name, question, solution){
    this.setState({
      page: name,
      question: question,
      solution: solution,
    });
  },
  handleSuccessfulLogin: function(user){
    this.setState({
      page: 'home',
      user: user,
    });
  },
  render: function(){
    return (
      <div>
        <Header go={this.goToPage}
                page={this.state.page}
                question={this.state.question}
                solution={this.state.solution}
                user={this.state.user}/>
        <Body   go={this.goToPage}
                page={this.state.page}
                question={this.state.question}
                solution={this.state.solution}
                login={this.handleSuccessfulLogin}
                user={this.state.user}/>
        <Footer go={this.goToPage}
                page={this.state.page}
                question={this.state.question}
                solution={this.state.solution}
                user={this.state.user} />
      </div>
    )
  }
});

React.render( <App />, document.body);
