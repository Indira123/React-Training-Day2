import React from 'react';

class ClassBased extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Vijaya'
        }
    }
    handleClick() {
        this.setState({
            name: 'Smita'
        })
    }
    render() {
        return (
            <>
                <h3>State name is {this.state.name}</h3>
                <button onClick={() => this.handleClick()}>Change state</button>
            </>
        )
    }
}

export default ClassBased;