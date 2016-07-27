var Welcome = React.createClass({
  render: function(){
    let {greeting, info} = this.props;
    console.log('this.props: ', this.props);
    return (
      <div>
        <h1>{greeting}</h1>
        <p>{info}</p>
      </div>
    )
  }
})

var Counter = React.createClass({
  getInitialState: function(){
    return{
      count: 0
    }
  },
  render: function(){
    return (
      <div>
        <h3>Counter {this.props.num}: {this.state.count}</h3>
        <button className="btn btn-success" onClick={() => this.setState({count: this.state.count+1})}>+</button>
        <button className="btn btn-warning" onClick={() => this.setState({count: this.state.count-1})}>-</button>
      </div>
    )

  }
})

var Root = React.createClass({

  getInitialState: function(){
    return{
      // count: 5,
      counters: {
        one: 0,
        two: 0
      },
      something: 'Amy',
      timer: 0,
      timerInteralID: null,
      buttonLabel: 'Start'
    }
  },

  addCount: function(event){
    // event.persist()
    // console.log(event.target.id);
    var counterId = event.target.id;

    let counters = Object.assign({}, this.state.counters);

    counters[counterId]++;

    this.setState({counters: counters});

    console.log(this.state.counters);

    console.log(counters);

  },
  minusCount: function(arg, event){
    console.log('arg: ', arg);
    console.log('minus count', arg, '\nevent', event);

    var counterId = arg;
    // console.log('counterId: ', counterId);
    let counters = Object.assign({}, this.state.counters);
    counters[counterId]--;
    this.setState({ counters: counters });
  },
  // addCount: function(){
  //   console.log('add')
  //   this.setState({ count: this.state.count+1 })
  // },
  // minusCount: function(){
  //   if(this.state.count>0){
  //     this.setState({ count: this.state.count-1 })
  //     console.log('minus')
  //   }else{
  //     console.log('cannot minus')
  //
  //   }
  // },
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
    let message = {
      greeting: "hello world",
      info: "Let's count stuff"
    }
    let num = 0

    return(
    <div>
      <Welcome {...message}/>
      <Counter num={++num}/>
      <Counter num={++num}/>
      <Counter num={++num}/>

    {/*   <h3>Time: {this.state.timer}</h3>
     <button onClick={this.startTimer}>Start</button>
  <button onClick={this.stopTimer}>Stop</button>
<button className="btn btn-info" onClick={this.startStopTimer}>{this.state.buttonLabel}</button>
<button className="btn btn-info" onClick={this.startStopTimer}>{this.state.timerInteralID===null ? 'START' : 'STOP' }</button>
<button className="btn btn-danger" onClick={this.resetTimer}>Reset</button>

      <h3>Counter 1: {this.state.counters.one}</h3>
    <button id="one" className="btn btn-success" onClick={this.addCount}>+</button>
  <button className="btn btn-warning" onClick={this.minusCount.bind(this, 'one')}>-</button>

<h3>Counter 2: {this.state.counters.two}</h3>
    <button id="two" className="btn btn-success" onClick={this.addCount}>+</button>
  <button className="btn btn-warning" onClick={this.minusCount.bind(this, 'two')}>-</button>
*/}
    </div>
    )
  }
})

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
