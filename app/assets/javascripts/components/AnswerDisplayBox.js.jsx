var AnswerDisplayBox = React.createClass({
  getInitialState: function(){
    return {
      content: "loading..."
    }
  },
  componentDidMount: function(){
    this.firebaseRef = new Firebase( this.props.fire );
    this.firebaseRef.child("content").on('value', function(snapshot){
      this.setState({
        content: snapshot.val()
      })
    }.bind(this));
  },
  render: function(){
    return (
      <div className="w50 db">
        <div className="w100 pb75 bg-w pr">
          <div className="pa" key={this.props.answer.key}>
            <p>Id: {this.props.answer.val.id} Content: {this.state.content}</p>
          </div>
        </div>
      </div>
    );
  }
});

