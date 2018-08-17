import React, { Component } from "react";
import cards from "../../cards.json";

import Card from "../Card";
import Scoreboard from "../Scoreboard";
import Footer from "../Footer";

// let chihuahuaArray = ["/assets/images/brown-chihuahua.jpg", "/assets/images/chubby-chihuahua.jpg", "/assets/images/grumpy-chihuahua.jpg", "/assets/images/lady-chihuahua.jpg",  "/assets/images/stern-chihuahua.jpg", "/assets/images/white-chihuahua.jpg"]

class Game extends Component {

    state = {
        chihuahuas: cards,
        matches: 0,
        guesses: 0,
        matchedChihuahua: 3,
        guessed: false
    }

    

    // getRandImg = () => {

        //something to get a random one and set it the image value of the card.
        // for (let i = 0; i < chihuahuaArray.length; i++)
        // console.log("From get rand img" + newImg);
        // return newImg
    // }

    

    // shuffle = () => {
        //something to shuffle the image array
        // this.state.chihuahuas.map(chihuahuaMap => {
        //     chihuahuaArray.push(chihuahuaMap.image);
        //     this.getRandImg()
        // })
    // }

    

    getChihuahua = (id) => {
        
        if (id === this.state.matchedChihuahua) {
            // if a chihuahua is a match 
            // update the matches state by one 
            // but not the guesses state 
            // if the are also a match pick a new random chihuahua
            let randomId = Math.floor(Math.random() * this.state.chihuahuas.length) + 1;
            this.setState({
                matches: this.state.matches + 1,
                matchedChihuahua: randomId,
            });
            // this.shuffle();
            
        } else {
            // if they are not a match update the 
            // guesses state by one 
            this.setState({
                guesses: this.state.guesses + 1,
                guessed: true
            });
            // this.shuffle();
        }
    }

    render() {
        return (
            <div className="container">
                <Scoreboard
                    matches={this.state.matches}
                    guesses={this.state.guesses}
                />
                <div className="row">
                    {this.state.chihuahuas.map(chihuahua => (
                        <Card
                            guessed={chihuahua.guessed}
                            key={chihuahua.id}
                            id={chihuahua.id}
                            name={chihuahua.name}
                            image={chihuahua.image}
                            getChihuahua={this.getChihuahua}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Game;