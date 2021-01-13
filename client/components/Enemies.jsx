import React from 'react';

function Enemies() {
  return (
    <div
    />
  );
}

function mapStateToProps(state) {
  return { ...state.player };
}
export default connect(mapStateToProps)(handleMovement(Enemies));
