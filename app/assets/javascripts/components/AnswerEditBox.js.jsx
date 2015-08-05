var AnswerEditBox = React.createClass({
  getInitialState: function(){
    return {
      content: "loading..."
    }
  },
  componentDidMount: function(){
    //var answer = this.findUserAnswer();
    // this.firebaseRef = new Firebase( this.props.fire );
    // this.firebaseRef.child("content").on('value', function(snapshot){
    //   this.setState({
    //     content: snapshot.val()
    //   })
    // }.bind(this));
  },
  handleChange: function(event){
    console.log(this.refs.editArea.getDOMNode())
  },
  render: function(){
    return (
      <div className="w50 db">
        <div className="w100 pb75 bg-w pr">
          <textarea ref="editArea"
                    className="pa w100"
                    onChange={this.handleChange}
                    defaultValue={this.state.content}>
          </textarea>
        </div>
      </div>
    );
  }
});



