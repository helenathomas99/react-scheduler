import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal'

Modal.setAppElement('#root')
class App extends Component {
  constructor() {
    super();
    this.state = {
    } 
}
  render() {
    // console.log(inputBox);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Your Scheduler</h1>
        </header>
        <TimeSlot time="9am"/>
        <TimeSlot time="10am"/>
        <TimeSlot time="11am"/>
        <TimeSlot time="12am"/>
        <TimeSlot time="1pm"/>
        <TimeSlot time="2pm"/>
        <TimeSlot time="3pm"/>
        <TimeSlot time="4pm"/>
      </div>
    );
  }
}

class TimeSlot extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phoneNumber: '',
      classNames: "input",
      showModal: false,
    }
    this.handleName = this.handleName.bind(this)
    this.handlePhone = this.handlePhone.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
handleOpenModal(){
  this.setState({ showModal: true });
}

handleCloseModal(){
  this.setState({ showModal: false });
}

  handleName(event){
    this.setState({
      name: event.target.value
    })
    if(this.state.name !== '') {
      this.setState({
        classNames: 'input inputChanged'
      })
    }
  }

  handlePhone(event){
    this.setState({
      phoneNumber: event.target.value,
    })
    if (this.state.phoneNumber !== ''){
      // inputBox.backgroundColor = "blue"
      this.setState({
        classNames: 'input inputChanged'
      })
    }
  }

  render() {
    return(
    <div className={this.state.classNames} style={{align: "center"}}>
      <text>{this.props.time}</text><br/>
      <button onClick={this.handleOpenModal}>Schedule</button><br/>
      <Modal className="modal" isOpen={this.state.showModal}>
      Name: <input type="text" value ={this.state.name} onChange={this.handleName}/><br/>
      Phone: <input type="text" value = {this.state.phoneNumber} onChange={this.handlePhone}/><br/>
      <button onClick={this.handleCloseModal}>Done</button>
    </Modal>
      <text>{this.state.name}</text><br/>
      <text>{this.state.phoneNumber}</text><br/>
    </div>
  )}
}

export default App;
