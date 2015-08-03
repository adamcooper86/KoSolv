var Body = React.createClass({
  getInitialState: function() {
    return {
      answerQuestionViewPort: false,
      question: null,
      solution: null,
    };
  },
  request: function(action, method, data){
    return this.props.request(action, method, data)
                      .then(function(serverData){
                        return serverData
                      })
                      .catch(function(serverData){
                        console.log(serverData);
                      });
  },
  createNewSolution: function(event) {
    event.preventDefault();
    var newQuestion = {
      id: event.target.id,
      prompt: event.target.parentNode.textContent,
    }
    var body = this;
    this.request('/solutions', 'post', {question_id: newQuestion.id}).then(function(serverData){
      body.setState({
        answerQuestionViewPort: true,
        question: newQuestion,
        solution: serverData,
      });
    });
  },

  render: function() {
    if(this.state.answerQuestionViewPort === false){
      var content = <QuestionList request={ this.request } answer={this.createNewSolution}/>
    }else{
      var content = <AnswerQuestionViewPort question={this.state.question} solution={this.state.solution}/>
    }

    return (
      <div>
        { content }
      </div>
    );
  }
});
