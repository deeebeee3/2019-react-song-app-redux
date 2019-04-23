import React from "react";
import SongList from "./SongList";

/*
Not going to use component level state for this project so make 
App a functional rather than class based component... Instead going to use
Redux for managing state...
*/

const App = () => {
  return (
    <div>
      <SongList />
    </div>
  );
};

export default App;
