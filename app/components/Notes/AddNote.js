var React = require('react');
var noteActions = require('../../actions/noteActions');
var notesStore = require('../../stores/NotesStore');

var AddNote = React.createClass({
  handleSubmit: function(){
    var market_id = notesStore.getState().market_id;
    var newNote = this.refs.note.getDOMNode().value;
    this.refs.note.getDOMNode().value = '';
    noteActions.addNote({market_id: market_id, note: newNote});
  },
  render: function(){
    return (
      <div className="input-group cushion">
        <input type="text" ref="note" className="form-control" placeholder="Add Note" />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    )
  }
});

module.exports = AddNote;
