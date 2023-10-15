import React from 'react'

const EventHandling = () => {
  return (
    <div className='container'>
        <h1 className='text-center'>Event Handling in React</h1>
        <hr />

        <button id="somebtn" className='btn btn-primary' onClick={ () => { alert('button was clicked')} }>Click Event</button>

        <input type="text" className='form-control' onChange={(e) => { console.log(e.target.value) }} />
        <input type="color" onChange={ (e) => {document.body.style.background = e.target.value}} />
        <input type="range" min={0} max={360} onChange={ (e) => {
            document.querySelector('#somebtn').style.transform = `rotate(${e.target.value}deg)`
        }}/>
    </div>
  )
}

export default EventHandling