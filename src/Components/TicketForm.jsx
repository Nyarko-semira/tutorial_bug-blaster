import React, { useState, useEffect } from 'react'
import '../styles.css'


const TicketForm = ({ dispatch, edittingTicket }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('1')

  const priorityLabels = {
    1: 'Low',
    2: 'Medium',
    3: 'High'
  }

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setPriority('1')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketData = {
      id: edittingTicket ? edittingTicket.id : new Date().toISOString(),
      title,
      description,
      priority
    };
    dispatch({
      type: edittingTicket ? 'UPDATE_TICKET' : 'ADD_TICKET',
      payload: ticketData,
    });
    clearForm();
  }

  return (
    <form onSubmit={handleSubmit} className='ticket-form'>
      <div>
        <label> Title</label>
        <input type="text" value={title}
          className='form-input'
          onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <label>Description</label>
        <textarea type="text" value={description}
          className='form-input'
          onChange={(e) => setDescription(e.target.value)} />
      </div>

      <fieldset className="priority-fieldset">
        <legend>Priority</legend>
        {
          Object.entries(priorityLabels).map(([value, label]) => (
            <label key={value} className='priority-label'>
              <input type="radio"
                value={value}
                checked={priority === value}
                className='priority-input'
                onChange={(e) => setPriority(e.target.value)}
              />
              {label}
            </label>
          ))}
      </fieldset>
      <div className='parent-btn'>
        <button type='submit' className='button'>Submit</button>
      </div>

    


    </form>
  )
}

export default TicketForm
