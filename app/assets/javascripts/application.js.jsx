//= require jquery
//= require jquery_ujs
//= require react
//= require react_ujs
//= require_tree ./components
//= require_self

var App = React.createClass({
  request: function(action, method, data){
    debugger
    request = $.ajax({
      url:      action,
      method:   method,
      data:     data,
      dataType: "json"
    });

    request.done(function(serverData){
      console.log(serverData);
    });

    request.fail(function(serverData){
      console.log(serverData);
      console.log('ajax fail');
    });
  },
  render: function(){
    var data = this.request('/questions', 'get');
    debugger
    return (
      <div>
        <Header />
        <Body request={ this.request }/>
        <Footer />
      </div>
    )
  }
});

React.render( <App />, document.body);