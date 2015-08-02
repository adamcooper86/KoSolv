var AnswerQuestionViewPort = React.createClass({
  getInitialState: function() {
    return {
      answer: ""
    };
  },
  componentDidMount: function(){
    this.firebaseRef = new Firebase("https://glaring-heat-160.firebaseIO.com/questions");
    this.firebaseRef.on('child_added', function(snapshot){
      debugger
      this.setState({
        answer: this.state.answer.concat([{key: snapshot.key(), val: snapshot.val()}])
      })
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        <h1>AnswerQuestionViewPort</h1>
        <p>{this.props.question.id}</p>
        <p>{this.props.question.prompt}</p>
      </div>
    );
  }

});