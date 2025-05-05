import React , {useReducer} from 'react'
import "./App.css"
import  "./styles.css"
import TicketForm from './Components/TicketForm'
import Ticketredure from './redures/Ticketredure'
import TicketList from './Components/TicketList'


const App = () => {
    const initialState = { tickets : [], edittingTicket: null};

   const [state, dispatch] = useReducer(Ticketredure, initialState)


  return (
    <div className='App'>
        <div className="container">
            <h1>Bug Blaster</h1>
            <TicketForm dispatch={dispatch}
            edittingTicket={state.edittingTicket}/>
            {
               state.tickets.length > 0  && 
               
               <div className='results'>
               <h2>All Tickets</h2>
                 
               <TicketList tickets={state.tickets}
                dispatch={dispatch}
               ></TicketList>
               </div>

            }

         
          
        </div>
      
    </div>
  )
}

export default App
