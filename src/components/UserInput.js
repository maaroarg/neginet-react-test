import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super();
    this.state = {
      history : [],
      historyPos: 0,
      current:"",
      error:false
    }
  }

  calculate(){
    //Evaluate input
    let res=0;
    const evaluateMath = new RegExp(/(\d+)([+\-*\/]\d+)*/);

    if(this.state.current.match(evaluateMath)){
      //Do the maths!
      try{
        eval("res="+this.state.current);
      }catch(e){
        this.showError();
        return;
      }
      //Send Results to parent component
      this.props.handleResults(res);

      //Save history
      this.setState({
        history:[...this.state.history, this.state.current],
        historyPos: this.state.history.length
      });

    }else{
      this.showError();
    }
  }

  showError(){
    //Show error to User
    this.setState({
      error: true
    });
  }

  handleChange(e){
      this.setState({
        current: e.target.value,
        error: false
      });
  }

  handleKey(e){

    if(e.key !== 'ArrowUp' && e.key !== 'ArrowDown' ) return;

    let currentPos = 0;
    if(e.key === 'ArrowUp'){
      currentPos = this.state.historyPos === this.state.history.length - 1 ? this.state.history.length - 1 : this.state.historyPos + 1;
    }else if(e.key === 'ArrowDown'){
      currentPos = this.state.historyPos !== 0 ? this.state.historyPos - 1 : 0;
    }

    this.setState({
      current : this.state.history[currentPos],
      historyPos: currentPos
    });
  }

  render(){
    return(
      <div>
        <input
          type="text"
          onChange={(e)=>this.handleChange(e)}
          onKeyUp={(e)=>this.handleKey(e)}
          value={this.state.current}
          placeholder="Enter Formula"/>
        <button
          onClick={()=>this.calculate()}
        >Send!
        </button>

        {this.state.error &&
          <span className="error">Input Error!</span>
        }
      </div>
    );
  }
}

export default UserInput;
