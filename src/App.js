import './App.css';
import {Component} from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            iscount: false
        };

    }

    start = () => {
        this.setState({iscount: true});

        this.counter = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000)


    }


    stop = () => {
        this.setState({iscount: false})
        clearInterval(this.counter)
    };
    reset = () => {
        this.setState({count: 0})
    };
    componentDidMount() {
        const user = localStorage.getItem('user')
        if (user){
            this.setState({count: +user})
        }
    }
    componentDidUpdate() {
        console.log('componentdidUpdate')
        localStorage.setItem('user',this.state.count)
    }
    componentWillUnmount() {
        clearInterval(this.counter)
    }

    render() {
        return (
            <div className="App">
                <div className="f mx-auto">
                    <h1>React Timer</h1>
                    <h3>{this.state.count}</h3>
                    <div className="">
                        {this.state.iscount ? (<button onClick={this.stop}>Stop</button>) : (
                            <button onClick={this.start}>Start</button>)}
                        <button onClick={this.reset}>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
