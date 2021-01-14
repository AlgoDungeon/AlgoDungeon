import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/styles.scss';

function PlayerStats(props) {
  return (
    <div id="stats">
      <h3 id="player-name">Welcome, {props.playerName}!</h3>
      <label>Challenges Solved: </label>
      <span id="totalSolves">{props.totalSolves}</span>
      <p>
        <label>Total Points: </label>
        <span id="points">{props.totalPoints}</span>
      </p>
    </div>
  );
}

function mapStateToProps(state) {
  return { ...state.stats };
}

export default connect(mapStateToProps)(PlayerStats);
