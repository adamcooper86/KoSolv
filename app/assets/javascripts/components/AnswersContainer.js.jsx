var AnswersContainer = React.createClass({
  setRef: function(answer){
    var refUrl = "https://glaring-heat-160.firebaseIO.com/questions/"
                 + this.props.question.id
                 + "/solutions/"
                 + this.props.solution.id
                 + "/"
                 + answer.key
    return( refUrl );
  },
  render: function() {
    var answers = this.props.answers.map(function(item, index){
      return(
        <AnswerDisplayBox fire={this.setRef(item)} answer={item}  />
      )
    }.bind(this));

    return (
      <div>
        <AnswerEditBox answers={this.props.answers}
                          question={this.props.question}
                          solution={this.props.solution}
                          user={this.props.user} />
        {answers}
      </div>
    );
  }
});
