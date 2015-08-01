//= require jquery
//= require jquery_ujs
//= require react
//= require react_ujs
//= require_tree ./components
//= require_self

var App = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
});

React.render( <App />, document.body);