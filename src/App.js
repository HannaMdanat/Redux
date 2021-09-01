import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import List from './components/List/List';
import Filter from './components/Filter/Filter'
import './App.css';

const data = require('./mockData/endPoint.json');

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_DATA',
      payload: data
    })
  }, []);

  function handleSelectChange(event) {
    dispatch({ type: 'CHANGE_TYPE', payload: data.items ,runs: event.target.parentElement.getAttribute('value'), run: event.target.value })
  }

  return (
    <div className="App">
      <div className='card-wrapper'>
        {(data.items || []).map(item => {
          return (
            <div className='card' key={item.id}>
              <div className='top-part'>
                <h3>User Name</h3>
                <h3>User Type</h3>
              </div>
              <div value={item.id} className='bottom-part'>
                <h5>{item.name}</h5>
                <select onChange={handleSelectChange}>
                  <option value='Admin' >Admin</option>
                  <option value='Editor'>Editor</option>
                  <option value='Viewer'>Viewer</option>
                </select>
              </div>
            </div>
          )
        })}
      </div>
      <Filter items={data.items} />
    </div>
  );
}

export default App;
