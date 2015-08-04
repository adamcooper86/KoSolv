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
  handleChange: function(event){
    this.firebaseRef.child(this.state.answers[0].key).child('content').set(event.target.value)
  },
  addAnswer: function(){
    viewPort = this;
    call('/answers', 'post', {solution_id: this.props.solution.id})
      .then(function(serverData){
        var answer = serverData
        viewPort.firebaseRef.push(answer);
      }).catch(function(serverData){
        console.log('error' + serverData);
      });
  },
  render: function() {
    return (
      <div id="questionViewPort">
        <h2>{this.props.question.prompt}</h2>
        <button onClick={ this.addAnswer }>Add Answer</button>
        <AnswersContainer answers={this.state.answers}
                          change={this.handleChange}
                          add={this.addAnswer} />
      </div>
    );
  }
});
