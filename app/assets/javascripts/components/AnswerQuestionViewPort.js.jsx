var AnswerQuestionViewPort = React.createClass({
  getInitialState: function() {
    return {
      answers: []
    };
  },
  componentDidMount: function(){
      this.setFirebaseRef();
      this.bindFireBaseSolution();
  },
  setFirebaseRef: function(){
    var refUrl = "https://glaring-heat-160.firebaseIO.com/questions/" + this.props.question.id + "/solutions/" + this.props.solution.id
    this.firebaseRef = new Firebase( refUrl );
  },
  bindFireBaseSolution: function() {
    this.firebaseRef.on('child_added', function(snapshot){
      this.setState({
        answers: this.state.answers.concat([{key: snapshot.key(), val: snapshot.val()}])
      })
    }.bind(this));
  },
  addAnswer: function(){
    viewPort = this;
    this.props.request('/answers', 'post', {solution_id: this.props.solution.id})
      .then(function(serverData){
        viewPort.firebaseRef.push(serverData);
      }).catch(function(serverData){
        console.log('error' + serverData);
      });
  },
  render: function() {
    return (
      <div>
        <h1>AnswerQuestionViewPort</h1>
        <h2>Question Info</h2>
        <p>{this.props.question.id}</p>
        <p>{this.props.question.prompt}</p>
        <h2>Solution</h2>
        <p>{this.props.solution.id}</p>
        <AnswersContainer answers={this.state.answers} add={this.addAnswer} />
      </div>
    );
  }

});
