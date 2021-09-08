import React, { Component } from 'react'; 

export default class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            image: []
        };
    }

    componentDidMount() {
        fetch("https://dog.ceo/dog-api/")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    image: result.image
                })
            }
        )
    }
}