//= require jquery
//= require jquery_ujs
//= require react
//= require react_ujs
//= require_tree ./components
//= require_self

var App = React.createClass({
  request: function(action, method, data){
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
  },
  render: function(){
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