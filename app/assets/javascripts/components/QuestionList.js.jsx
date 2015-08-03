var QuestionList = React.createClass({
  makeQuestions: function(){
    var questionList = this;
    this.props.request('/questions', 'get')
                      .then(function(serverData){
                        questionList.props.makeList( serverData );
                      })
                      .catch(function(serverData){
                        console.log(serverData);
                      });
  },
  componentDidMount: function() {
    this.makeQuestions();
  },
  render: function() {
    var listItems = this.props.list.map(function(item, index){
      return <li key={index}>{item.prompt} <a id={item.id} href='/questions/{ item.id }/answer' onClick={ this.props.answer }>Answer</a></li>
    }.bind(this));
    return (
      <div>
        <h3>Questions</h3>
        <ul>
          { listItems }
        </ul>
      </div>
    );
  }

});

