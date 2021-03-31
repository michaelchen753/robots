import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: '',
            robots: []
        }
    }

    componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
        }

    eventHandler = (e) =>{
        this.setState({
            inputValue: e.target.value            
        })             
    } 
    render () {
        const{robots, inputValue} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(inputValue.toLowerCase()) 
        })
        return !robots.length ? 
        <h1>Loading</h1>:
         <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange= {this.eventHandler} />
            <Scroll>
                <ErrorBoundary>
                    <CardList  robots= {filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>               
    }    
}

export default App;