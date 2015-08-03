var OpenSolutionsList = React.createClass({
  makeSolutions: function(){
    var solutionList = this;
    this.props.request('/solutions', 'get')
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
  render: function() {
    var listItems = this.props.list.map(function(item, index){
      var key = "p" + index;
      return <li key={ key }>{this.findQuestion(item)[0].prompt} <a id={item.id} href='/solutions/{ item.id }/answer' onClick={ this.props.answer }>Answer</a></li>
    }.bind(this));
    return (
      <div>
        <h3>Open Solutions</h3>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }

});

