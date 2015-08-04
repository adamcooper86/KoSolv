var AnswersContainer = React.createClass({
  handleChange: function(event){
    this.props.change(event);
  },
  render: function() {
    var answers = this.props.answers.map(function(item, index){
      return(
        <li key={item.key}>Id: {item.val.id} Content: {item.val.content} Solution:{item.val.solution_id}</li>
      )
    });
    return (
      <div>
        <div className="w50 db">
          <div className="w100 pb75 bg-w pr">
            <textarea className="pa w100"
                      onChange={this.handleChange}>
            </textarea>
          </div>
        </div>
      </div>
    );
  }

});
