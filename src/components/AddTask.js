import React, { Component } from 'react';


class AddTask extends Component {
    state = { 
        text: '',
        checked: false,
        date: '2023-11-21'
     } 
    render() { 
        return (
            <div>
                <input type="text" placeholder='Dodaj zadanie' value = {this.state.value} />
                <input type="checkbox" placeholder='Dodaj zadanie' checked = {this.state.checked} id='important' />
                <label htmlFor='important'> Priorytet</label>
                <br/>
                <label htmlFor='date'>Deadline </label>
                <input type='date' value={this.state.date} min="2023-11-21" max="2024-01-31" />
                <button> Dodaj</button>

            </div>
        );
    }
}
 
export default AddTask;