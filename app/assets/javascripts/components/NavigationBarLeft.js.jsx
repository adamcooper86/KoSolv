var NavigationBarLeft = React.createClass({
  render: function(){
    return (
      <ul className="fl cr m0 p0">
        <a href="/home" id="home" className="fl"><button className="h100 w100">Home</button></a>{' '}
        <a href="/questions" id="questions" className="fl db"><button className="h100 w100">Questions</button></a>
      </ul>
    )
  }
});