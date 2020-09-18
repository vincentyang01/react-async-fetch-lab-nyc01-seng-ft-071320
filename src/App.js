import React from 'react';

class App extends React.Component{

    state = {
        peopleInSpace: []
    }

    render(){
        return(
            <div>
                {this.state.peopleInSpace.map((person) => <h1 key={person.id}>{person.name}</h1>)}
            </div>
        )
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(({response}) => {
            this.setState({ peopleInSpace: response})
        })
        
    }
}

export default App