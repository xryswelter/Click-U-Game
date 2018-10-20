import React, { Component } from "react";
import data from "../../public/Assets/Data.js"
class Game extends Component {

    State = {
        data,
        Score: 0,
        TopScore: 0,
        correctness
    }

    componentDidMount() {
        this.setState({ data: this.shuffleData(this.state.data) })
    }

    // JS
    //Give by tutor
    shuffleData = data => {
        data.sort(function(a, b){return 0.5 - Math.random()});
        return data;
    };
    
    
    handleCardClick = id => {
        let id = this.id;
        let data = this.state.data;
        if(data[id].clicked){
            endGame();
        } else{
            this.setState(data)
        }
    }

    render() {
        return (
            <NavBar score = {this.state.Score} topScore = {this.state.TopScore} correctness= {this.state.correctness} />
            <Jumbotron />
            <Container>
                {this.state.data.map(item => {
                    <Card id={item.id} handleCardClick={this.handleCardClick} photo={item.image} />
                })}
            </Container>
            <Footer />
    )
    }
}