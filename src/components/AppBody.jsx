import React from 'react'

function AppBody() {
  let currDate = new Date().toLocaleDateString();
  let currTime = new Date().toLocaleTimeString(); 
  return (
    <div>
      <p>This is the clock that show the time in BHARAT at all times.</p>
      <p>This is the current time: {currTime} and this is the current date: {currDate}</p>
    </div>
  )
}

export default AppBody