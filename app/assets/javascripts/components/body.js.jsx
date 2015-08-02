var Body = React.createClass({
  getInitialState: function() {
    return {
      answerQuestionViewPort: false,
      question: null,
    };
  },
  request: function(action, method, data){
    return this.props.request('/questions', 'get')
                      .then(function(serverData){
                        return serverData
                      })
                      .catch(function(serverData){
                        console.log(serverData);
                      });
  },
  answer: function(event) {
    event.preventDefault();
    var newQuestion = {
      id: event.target.id,
      prompt: event.target.parentNode.textContent,
    }
    this.setState({
      answerQuestionViewPort: true,
      question: newQuestion,
    });
  },
  render: function() {
    if(this.state.answerQuestionViewPort === false){
      var content = <QuestionList request={ this.request } answer={this.answer}/>
    }else{
      var content = <AnswerQuestionViewPort question={this.state.question} />
    }

    return (
      <div>
        { content }
      </div>
    );
  }
});
