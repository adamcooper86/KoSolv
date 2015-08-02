var QuestionList = React.createClass({
  getInitialState: function(){
    return {
      list: []
    }
  },
  makeQuestions: function(){
    var questionList = this;
    this.props.request('/questions', 'get')
                      .then(function(serverData){
                        questionList.setState({ list: serverData });
                      })
                      .catch(function(serverData){
                        console.log(serverData);
                      });
  },
  componentDidMount: function() {
    this.makeQuestions();
  },
  render: function() {
    var listItems = this.state.list.map(function(item, index){
      return <li key={index}>{item.prompt} <a id={item.id} href='/questions/{ item.id }/answer' onClick={ this.props.answer }>Answer</a></li>
    }.bind(this));
    return (
      <ul>
        { listItems }
      </ul>
    );
  }

});

