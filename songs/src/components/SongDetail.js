import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  console.log(props);
  return <div>SongDetail</div>;
};

const mapStateTopProps = state => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateTopProps)(SongDetail);
