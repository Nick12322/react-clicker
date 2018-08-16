import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
    <div className="jumbotron">
        <h1>Welcome to the chihuahua game!</h1>
        <p>Chihuahua Matches: {props.matches}</p>
        <p>Chihuahua Guesses: {props.guesses}</p>
        <p>In this game you pick a chihuahua, hopefully they pick you too to be their owner!</p>
    </div>
);

export default Scoreboard;