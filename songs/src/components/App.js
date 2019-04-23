import React from "react";
import SongList from "./SongList";

/*
Not going to use component level state for this project so make 
App a functional rather than class based component... Instead going to use
Redux for managing state...
*/

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  );
};

export default App;
