import React, { Component } from "react";
import data from "../../public"
class Game extends Component {

    State = {
        data,
        Score: 0,
        TopScore: 0
    }

    componentDidMount() {
        this.setState({ data: this.shuffleData(this.state.data) })
    }

    // JS
    shuffleData = data => {
        let i = data.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    };
    
    handleCardClick = id => {
        this.id.map(this.state.data)
    }

    render() {
        return (
            <NavBar />
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