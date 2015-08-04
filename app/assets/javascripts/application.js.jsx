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
      page: 'home',
      question: null,
      solution: null,
    }
  },
  goToPage: function(name, question, solution){
    this.setState({
      page: name,
      question: question,
      solution: solution,
    });
  },
  render: function(){
    return (
      <div>
        <Header go={this.goToPage} page={this.state.page} question={this.state.question} solution={this.state.solution} />
        <Body   go={this.goToPage} page={this.state.page} question={this.state.question} solution={this.state.solution} />
        <Footer go={this.goToPage} page={this.state.page} question={this.state.question} solution={this.state.solution} />
      </div>
    )
  }
});

React.render( <App />, document.body);
