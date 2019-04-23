//import React from "react";
import React, { Component } from "react"; // alternate way of importing Component base class
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    console.log(this.props);
    return <div>SongList</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };

  //songs will show up as props in SongList component
};

//create an instance of connect component and pass it some configuration that will get it to reach back up to the
//Provider and tell it that it wants to get a list of all the songs inside of our app.
export default connect(mapStateToProps)(SongList);

/*
function connect(){
    return function(){
        console.log('hello');
    }
}

connect()();
*/
