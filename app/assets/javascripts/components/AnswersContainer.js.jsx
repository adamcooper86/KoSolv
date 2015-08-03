var AnswersContainer = React.createClass({
  render: function() {
    var answers = this.props.answers.map(function(item, index){
      return(
        <li key={item.key}>Id: {item.val.id} Content: {item.val.content} Solution:{item.val.solution_id}</li>
      )
    });
    return (
      <div>
        <h1>AnswerContainer</h1>
        <button onClick={ this.props.add }>Add Answer</button>
        <p>{answers}</p>
      </div>
    );
  }

});
