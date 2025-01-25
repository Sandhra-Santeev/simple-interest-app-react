import { Button, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  const [principal,setPrincipal] = useState("")
  const [rate,setRate] =  useState("")
  const [year,setYear] =  useState("")
  const [isPrincipal,setIsPrincipal] =  useState(true)
  const [isRate,setIsRate] =  useState(true)
  const [isYear,setIsYear] =  useState(true)
  const [interest,setInterest] =  useState(0)


  const validate = (e)=>{
    // console.log(e.target)   
    const {name,value} = e.target
    console.log(name);
    console.log(value);
    // console.log(value.match('^[0-9]*$'));//returns an array when value matches with regular expression else returns null ^[0-9a-zA-z]$

    if(!!value.match('^[0-9]*$')){
      if(name == 'principal'){
        setPrincipal(value)
        setIsPrincipal(true)
      }
      else if(name == 'rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    }
    else{
      if(name == 'principal'){
        setPrincipal(value)
        setIsPrincipal(false)
      }
      else if(name == 'rate'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }

    }
    
    
    
  }

  const handleReset = ()=>{
    setPrincipal("")
    setRate("")
    setYear("")
    setIsPrincipal(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }

  const calculate = ()=>{
    setInterest((principal*rate*year)/100)
  }


  return (
    <>
      <div className="bg-dark d-flex justify-content-center align-items-center" style={{width:"100%",height:"100vh"}}>
        <div className='bg-light p-5 rounded-2 m-5'>
          <h1>Simple Interest App</h1>
          <span>Calculate your simple interest</span>
          <div className='bg-warning p-3 mt-4 d-flex flex-column text-center rounded'>
            <h1 className="mt-3">₹{interest}</h1>
            <p>Total Simple Interest</p>
          </div>
          <div className="mb-3 mt-3">
          <TextField onChange={(e)=>validate(e)} value={principal} name='principal' id="outlined-basic" label="Principal Amount (₹)" variant="outlined" className='w-100' />
           {isPrincipal==false&& <p className='text-danger'>*Invalid Input</p>}
          </div>
          <div className="mb-3 "><TextField onChange={(e)=>validate(e)} value={rate} name='rate' id="outlined-basic" label="Rate of Interest (%)" variant="outlined" className='w-100' />
          {isRate==false&& <p className='text-danger'>*Invalid Input</p>}
          </div>
          <div className="mb-3"><TextField onChange={(e)=>validate(e)} value={year} name='year' id="outlined-basic" label="Year" variant="outlined" className='w-100' />
          {isYear==false&& <p className='text-danger'>*Invalid Input</p>}
          </div>
          <div className="mt-3 d-flex p-3 justify-content-around">
          <Button onClick={calculate} variant="contained" size ="large" color="success" className='me-3'>CALCULATE</Button>
          <Button onClick={handleReset} variant="outlined" size ="large" color="success">RESET</Button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
