import './App.css';
import React ,{useState} from 'react';
import Reminder from './components/reminder form/reminder';
import data from './components/data';

function App () {
  const [people, setpeople] = useState(data)
  
  return(
      <div className='main'>
        <h3>{people.length} birthday toda</h3>
        <Reminder className="person" people = {people}/> 
        <button className='btn-clear' onClick={() => setpeople([])}>Clear all</button>
       </div>
    )
  }


export default App;
