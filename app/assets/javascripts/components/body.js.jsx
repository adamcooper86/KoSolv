var Body = React.createClass({
  getInitialState: function() {
    return {
      questionsList: [],
      solutionsList: [],
    };
  },
  createNewSolution: function(event) {
    event.preventDefault();
    var newQuestion = {
      id: event.target.id,
      prompt: event.target.parentNode.textContent,
    }
    var body = this;
    call('/solutions', 'post', {question_id: newQuestion.id}).then(function(serverData){
      body.props.go('answerViewPort', newQuestion, serverData);
    });
  },
  updateQuestionList: function(questionObjects){
    this.setState({
      questionsList: questionObjects
    });
  },
  updateSolutionList: function(solutionObjects){
    this.setState({
      solutionsList: solutionObjects
    });
  },
  renderSolution: function(question, solution){
    this.props.go('answerViewPort', question, solution);
  },
  render: function() {
    if(this.props.page === 'answerViewPort'){
      var viewPort = <AnswerQuestionViewPort question={this.props.question}
                                             solution={this.props.solution}/>
    }else{
      var questionList = <QuestionList answer={this.createNewSolution}
                                       list={this.state.questionsList}
                                       makeList={this.updateQuestionList} />
      var solutionList = <OpenSolutionsList answer={this.renderSolution}
                                            list={this.state.solutionsList}
                                            questionList={this.state.questionsList}
                                            makeList={this.updateSolutionList}/>
    }

    return (
      <div id="main">
        { questionList }
        { solutionList }
        { viewPort}
      </div>
    );
  }
});
