var React = require('react');
var notesStore = require('../../stores/NotesStore');
var AddNote = require('./AddNote');
var NotesList = require('./NotesList');
var noteActions = require('../../actions/noteActions');

var Notes = React.createClass({
  getInitialState: function(){
    return {
      notes: notesStore.getState().notes
    };
  },
  componentWillReceiveProps: function(obj){
    noteActions.changeMarket(obj.market_id);
  },
  componentDidMount: function(){
    noteActions.changeMarket(this.props.market_id);
    notesStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    notesStore.removeChangeListener(this._onChange);
  },
  render: function(){
    return (
      <div>
        <h3> Notes for {this.props.market_id} </h3>
        <AddNote market_id={this.props.market_id} />
        <NotesList notes={this.state.notes}/>
      </div>
    )
  },
  _onChange: function(){
    this.setState({
      notes: notesStore.getState().notes
    })
  }
});

module.exports = Notes;
