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
  renderSolution: function(event){
    event.preventDefault();
    this.setState({
      answerQuestionViewPort: true,
      solution: event.target.id,
    });
  },
  render: function() {
    if(this.state.answerQuestionViewPort === false){
      var questionList = <QuestionList request={ this.request }
                                       answer={this.createNewSolution}
                                       list={this.state.questionsList}
                                       makeList={this.updateQuestionList} />
      var solutionList = <OpenSolutionsList request={ this.request }
                                            answer={this.renderSolution}
                                            list={this.state.solutionsList}
                                            questionList={this.state.questionsList}
                                            makeList={this.updateSolutionList}/>
    }else{
      var viewPort = <AnswerQuestionViewPort request={this.request}
                                             question={this.state.question}
                                             solution={this.state.solution}/>
    }

    return (
      <div>
        { questionList }
        { solutionList }
        { viewPort}
      </div>
    );
  }
});
