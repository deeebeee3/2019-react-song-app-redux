//import React from "react";
import React, { Component } from "react"; // alternate way of importing Component base class
import { connect } from "react-redux";
import { selectSong } from "../actions"; // was exported as a named function

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//Anytime redux state is updated, mapStateToProps function will rerun with newly create state object
const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };

  //songs will show up as props in SongList component
};

//create an instance of connect component and pass it some configuration that will get it to reach back up to the
//Provider and tell it that it wants to get a list of all the songs inside of our app.
export default connect(
  mapStateToProps,
  { selectSong: selectSong }
)(SongList);

/*
function connect(){
    return function(){
        console.log('hello');
    }
}

connect()();
*/
