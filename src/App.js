import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal'

Modal.setAppElement('#root')
class App extends Component {
  constructor() {
    super();
    this.state = {
      timeslots: [9, 10, 11, 12, 1, 2, 3, 4],
      names: [],
      phoneNumbers: [],
      classNames: "input",
      scheduled: [false, false, false, false, false, false, false, false],
      count: 0
    }
    this.handleName = this.handleName.bind(this)
    this.handlePhone = this.handlePhone.bind(this)
}
handleName(event, index){
    const namesArr = this.state.names.slice();
    const scheduledArr = this.state.scheduled.slice();

    scheduledArr[index] = true
    namesArr[index] = event.target.value

    this.setState({
      names: namesArr,
      scheduled: scheduledArr
    })
    if(this.state.names[index]) { // this isnt a thing anymore
      this.setState({
        classNames: 'input inputChanged',
      })
    }
  }

  handlePhone(event, index){
    const phoneArr = this.state.phoneNumbers.slice();
    phoneArr[index] = event.target.value
    this.setState({
      phoneNumbers: phoneArr,
    })
    if (this.state.phoneNumbers[index]){
      // inputBox.backgroundColor = "blue"
      this.setState({
        classNames: 'input inputChanged'
      })
    }
  }

  howManyScheduled(){
    var newCount = 0;
    for (var i =0; i<this.state.scheduled.length; i++){
      if (this.state.scheduled[i] === true){
        newCount ++;
        console.log(newCount)
      }
    }
    this.setState({
      count: newCount
    })
  }

  render() {
    // console.log(inputBox);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Your Scheduler! <br/> Today's Meetings: {this.state.count}</h1>
        </header>
        {this.state.timeslots.map((hour, index) =>
          <TimeSlot time={`${hour}am`} name={this.state.names[index]}
            phoneNumber={this.state.phoneNumbers[index]}
            classNames={this.state.classNames} handleName={(e)=>this.handleName(e, index)}  handlePhone={(e)=> this.handlePhone(e, index)}/>
        )}
        <div> Your longest Free Slot:{this.state.scheduled.join("-")} </div>
        {/* <TimeSlot time="9am" name={this.state.name} phoneNumber={this.state.phoneNumber} classNames={this.state.classNames} handleName={(e)=>this.handleName(e)}  handlePhone={(e)=> this.handlePhone(e)}/>
        <TimeSlot time="10am" name={this.state.name} phoneNumber={this.state.phoneNumber} classNames={this.state.classNames} handleName={(e)=>this.handleName(e)} handlePhone={(e)=> this.handlePhone(e)}/>
        <TimeSlot time="11am" name={this.state.name} phoneNumber={this.state.phoneNumber} classNames={this.state.classNames} handleName={(e)=>this.handleName(e)} handlePhone={(e)=> this.handlePhone(e)}/>
        <TimeSlot time="12am" name={this.state.name} phoneNumber={this.state.phoneNumber} classNames={this.state.classNames} handleName={(e)=>this.handleName(e)} handlePhone={(e)=> this.handlePhone(e)}/>
        <TimeSlot time="1pm" name={this.state.name} phoneNumber={this.state.phoneNumber} classNames={this.state.classNames} handleName={(e)=>this.handleName(e)}  handlePhone={(e)=> this.handlePhone(e)}/>
        <TimeSlot time="2pm" name={this.state.name} phoneNumber={this.state.phoneNumber} classNames={this.state.classNames} handleName={(e)=>this.handleName(e)}  handlePhone={(e)=> this.handlePhone(e)}/>
        <TimeSlot time="3pm" name={this.state.name} phoneNumber={this.state.phoneNumber} classNames={this.state.classNames} handleName={(e)=>this.handleName(e)}  handlePhone={(e)=> this.handlePhone(e)}/>
        <TimeSlot time="4pm" name={this.state.name} phoneNumber={this.state.phoneNumber} classNames={this.state.classNames} handleName={(e)=>this.handleName(e)}  handlePhone={(e)=> this.handlePhone(e)}/> */}

      </div>
    );
  }
}

class TimeSlot extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
handleOpenModal(){
  this.setState({ showModal: true });
}

handleCloseModal(){
  this.setState({ showModal: false });
}

  render() {

    let className;
    if (this.props.name || this.props.phoneNumber ){

      className = "input inputChanged";
    }
    else {
      className = "input"
    }


    return(
    <div className={className} style={{align: "center"}}>
      <text>{this.props.time}</text><br/>
      <button onClick={this.handleOpenModal}>Schedule</button><br/>
      <Modal className="modal" isOpen={this.state.showModal}>
      Name: <input type="text" value={this.props.name} onChange={(e) => this.props.handleName(e)}/><br/>
      Phone: <input type="text" value={this.props.phoneNumber} onChange={(e) => this.props.handlePhone(e)}/><br/>
      <button onClick={this.handleCloseModal}>Done</button>
    </Modal>
      <text>{this.props.name}</text><br/>
      <text>{this.props.phoneNumber}</text><br/>
    </div>
  )}
}
export default App;
