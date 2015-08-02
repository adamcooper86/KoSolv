var AnswerQuestionViewPort = React.createClass({

  render: function() {
    debugger
    return (
      <div>
        <h1>AnswerQuestionViewPort</h1>
        <p>{this.props.question.id}</p>
        <p>{this.props.question.prompt}</p>
      </div>
    );
  }

});