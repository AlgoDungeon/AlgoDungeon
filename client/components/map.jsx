import React, { useEffect } from 'react';
import * as ROT from 'rot-js';

function Map() {
  useEffect(() => {
    // let newmap = new ROT.Map.Uniform(50, 30, {
    //   roomWidth: [3, 45],
    //   roomHeight: [3, 40],
    //   roomDugPercentage: 0.3,
    // });
    // console.log(newmap);
    // document.getElementById('displays').appendChild(newmap);
  });

  return (
    <div>
      <h1> Hello</h1>
      <div id="displays"></div>
    </div>
  );
}

export default Map;
