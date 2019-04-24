import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if(!song){
      return <div>Select a song</div>
  }

  return <div>{song.title}</div>;
};

//Will be rerun whenever state updated - so component will have up to date state available through props
const mapStateTopProps = state => {
  return { selectedSong: state.selectedSong };
};

//All components hooked up to the connect function will automatically rerender whenever state updated
export default connect(mapStateTopProps)(SongDetail);
