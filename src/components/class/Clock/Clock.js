import { Component } from "react";


class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }
    }

    componentDidMount(){
        this.timeId = setInterval(() => {
            console.log('timer')
            this.setState({
                date : new Date()
            })
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeId)
    }
    render(){
        return (
            <div>
                <h1>this is clock</h1>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock;