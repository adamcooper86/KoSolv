var AnswerEditBox = React.createClass({
  getInitialState: function(){
    return {
      content: "loading..."
    }
  },
  setRef: function(answer){
    var refUrl = "https://glaring-heat-160.firebaseIO.com/questions/"
                 + this.props.question.id
                 + "/solutions/"
                 + this.props.solution.id
                 + "/"
                 + this.props.answer[0].key
    return( refUrl );
  },
  setFire: function(){
    var url = this.setRef()
    this.firebaseRef = new Firebase( url );
    this.firebaseRef.child("content").on('value', function(snapshot){
      this.setState({
        content: snapshot.val()
      })
    }.bind(this));
  },
  handleChange: function(event){
    this.firebaseRef.child("content").set(this.refs.editArea.getDOMNode().value)
  },
  componentDidUpdate: function(){
    if(this.props.answer.length > 0 && this.firebaseRef == undefined){
      this.setFire();
    }
  },
  render: function(){
    return (
      <div className="w50 db">
        <div className="w100 pb75 bg-w pr">
          <textarea ref="editArea"
                    className="pa w100"
                    onChange={this.handleChange}
                    value={this.state.content}>
          </textarea>
        </div>
      </div>
    );
  }
});
