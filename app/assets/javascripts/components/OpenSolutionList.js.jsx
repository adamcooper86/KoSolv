var OpenSolutionsList = React.createClass({
  makeSolutions: function(){
    var solutionList = this;
    call('/solutions', 'get')
      .then(function(serverData){
        solutionList.props.makeList( serverData );
      })
      .catch(function(serverData){
        console.log(serverData);
      });
  },
  componentDidMount: function() {
    this.makeSolutions();
  },
  findQuestion(item){
    questions = this.props.questionList;
    if(questions.length > 0){
      return $.grep(questions, function(question){
        return question.id === item.question_id
      });
    }
  },
  findSolution(item_id){
    solutions = this.props.list;
    if(solutions.length > 0){
      return $.grep(solutions, function(solution){
        return solution.id == item_id
      });
    }
  },
  handleAnswer: function(event){
    event.preventDefault();
    solution_id = event.target.id
    question_id = event.target.id

    solution = this.findSolution(solution_id)[0]
    question = this.findQuestion(solution)[0]

    this.props.answer(question, solution)

  },
  render: function() {
    var listItems = this.props.list.map(function(item, index){
      var key = "s" + index;
      var question = this.findQuestion(item)[0]
      return <li key={ key }>{question.prompt}
               <a id={item.id}
                  href='/solutions/{ item.id }/answer'
                  onClick={ this.handleAnswer}
                  data-question-id={question.id}>Answer
                </a>
              </li>
    }.bind(this));
    return (
      <div id="OpenSolutionList">
        <h3>Open Solutions</h3>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }

});

