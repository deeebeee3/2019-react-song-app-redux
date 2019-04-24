import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for: </h3>
      <p>Title: {selectedSong.title}</p>
      <p>Duration: {selectedSong.duration}</p>
    </div>
  );
};

//Will be rerun whenever state updated - so component will have up to date state available through props
const mapStateTopProps = state => {
  return { selectedSong: state.selectedSong };
};

//All components hooked up to the connect function will automatically rerender whenever state updated
export default connect(mapStateTopProps)(SongDetail);
