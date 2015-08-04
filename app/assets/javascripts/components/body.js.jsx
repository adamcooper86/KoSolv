var Body = React.createClass({
  getInitialState: function() {
    return {
      answerQuestionViewPort: false,
      question: null,
      solution: null,
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
    request('/solutions', 'post', {question_id: newQuestion.id}).then(function(serverData){
      body.setState({
        answerQuestionViewPort: true,
        question: newQuestion,
        solution: serverData,
      });
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

    this.setState({
      answerQuestionViewPort: true,
      solution: solution,
      question: question,
    });
  },
  render: function() {
    if(this.state.answerQuestionViewPort === false){
      var questionList = <QuestionList answer={this.createNewSolution}
                                       list={this.state.questionsList}
                                       makeList={this.updateQuestionList} />
      var solutionList = <OpenSolutionsList answer={this.renderSolution}
                                            list={this.state.solutionsList}
                                            questionList={this.state.questionsList}
                                            makeList={this.updateSolutionList}/>
    }else{
      var viewPort = <AnswerQuestionViewPort question={this.state.question}
                                             solution={this.state.solution}/>
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
