import React, { Component } from 'react';

class ClassCount extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            // date:new Date(),
            posts:[]
        }
        this.handleCount = this.handleCount.bind(this);
    }

    handleCount () {
        this.setState({
            ...this.state,
            count:this.state.count + 1
        })
    }
    
    componentDidMount(){
        // this.timerId = setInterval(() => {
        //     this.tick()
        // }, 1000);
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => this.setState({
            posts : data
        }))
    }

    // componentWillUnmount(){
    //     clearInterval(this.timerId);
    // }

    // tick(){
    //     this.setState({
    //         date:new Date()
    //     })
    // }
    render() {
        const {date,count,posts} = this.state;
        return (
            <div>
                <h1> class component : {count}</h1>
                <p>{posts.length}</p>
                {/* <h2>date {date.toLocaleTimeString()}</h2> */}
                <button onClick={this.handleCount}>increase++</button>
            </div>
        );
    }
}

export default ClassCount;