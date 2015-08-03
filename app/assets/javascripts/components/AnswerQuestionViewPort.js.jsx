var AnswerQuestionViewPort = React.createClass({
  getInitialState: function() {
    return {
      answer: ""
    };
  },
  componentDidMount: function(){
    var refUrl = "https://glaring-heat-160.firebaseIO.com/questions/" + this.props.question.id + "solutions/" + this.props.solution.id
    this.firebaseRef = new Firebase( refUrl );
    this.firebaseRef.on('child_added', function(snapshot){
      this.setState({
        answer: this.state.answer.concat([{key: snapshot.key(), val: snapshot.val()}])
      })
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        <h1>AnswerQuestionViewPort</h1>
        <h2>Question Info</h2>
        <p>{this.props.question.id}</p>
        <p>{this.props.question.prompt}</p>
        <h2>Solution</h2>
        <p>{this.props.solution.id}</p>
        <AnswersContainer />
      </div>
    );
  }

});