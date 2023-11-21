import React, { Component } from 'react';


class AddTask extends Component {
    minDate = new Date().toISOString().slice(0,10)
    state = { 
        text: '',
        checked: false,
        date: this.minDate
     } 
     handleDate=e=>{
        this.setState({
            date: e.target.value
        })
     }
     handleText=e=>{
        this.setState({
            text: e.target.value
        })
     }
     handleCheck=e=>{
        this.setState({
            checked: e.target.checked
        })
     }
    render() { 
        return (
            <div>
                <input type="text" placeholder='Dodaj zadanie' value = {this.state.value} onChange={this.handleText}/>
                <input type="checkbox" placeholder='Dodaj zadanie' checked = {this.state.checked} id='important' onChange={this.handleCheck}/>
                <label htmlFor='important'> Priorytet</label>
                <br/>
                <label htmlFor='date'>Deadline </label>
                <input type='date' value={this.state.date} min={this.minDate} max="2024-01-31" onChange={this.handleDate}/>
                <button > Dodaj</button>

            </div>
        );
    }
}
 
export default AddTask;