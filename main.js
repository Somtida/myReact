var Root = React.createClass({

  getInitialState: function(){
    return{
      count: 5,
      something: 'Amy',
      timer: 0,
      timerInteralID: null,
      buttonLabel: 'Start'
    }
  },

  addCount: function(){
    console.log('add')
    this.setState({ count: this.state.count+1 })
  },
  minusCount: function(){
    if(this.state.count>0){
      this.setState({ count: this.state.count-1 })
      console.log('minus')
    }else{
      console.log('cannot minus')

    }
  },
  startStopTimer: function(){
    if(this.state.timerInteralID===null){
      this.setState({buttonLabel: 'Stop'});
      this.state.timerInteralID = setInterval(() => {
        this.setState({timer: this.state.timer +1 });
      }, 1000)
    }else{
      this.setState({buttonLabel: 'Start'});
      clearInterval(this.state.timerInteralID);
      this.setState({timerInteralID: null});
    }
  },
  startTimer: function(){
    if(!this.state.timerInteralID){
      this.state.timerInteralID = setInterval(() => {
        this.setState({timer: this.state.timer +1 });
      }, 1000)

    }
    // var self = this;
    // setInterval(function(){
    //   self.setState({timer: this.state.timer +1 });
    // }, 1000)
  },
  stopTimer: function(){
    clearInterval(this.state.timerInteralID);
    this.setState({timerInteralID: null});
  },
  resetTimer: function(){
    // if(this.start.timerInteralID){
    //   clearInterval(this.state.timerInteralID);
    // }

    clearInterval(this.state.timerInteralID);
    this.setState({
      buttonLabel : 'Start',
      timer: 0,
      timerInteralID: null
    });
  },

  render: function(){
    // console.log(this.state)

    return(
    <div>
      <h1>Hello, {this.state.something}!</h1>
      <p>Let's count stuff!</p>

      <h3>Time: {this.state.timer}</h3>
    {/*  <button onClick={this.startTimer}>Start</button>
  <button onClick={this.stopTimer}>Stop</button>
<button className="btn btn-info" onClick={this.startStopTimer}>{this.state.buttonLabel}</button>*/}
<button className="btn btn-info" onClick={this.startStopTimer}>{this.state.timerInteralID===null ? 'START' : 'STOP' }</button>
<button className="btn btn-danger" onClick={this.resetTimer}>Reset</button>

      <h3>Counter: {this.state.count}</h3>
    <button className="btn btn-success" onClick={this.addCount}>+</button>
  <button className="btn btn-warning" onClick={this.minusCount}>-</button>

    </div>
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
