import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const GetAddress = () => {
  const [number, setNumber] = useState(0)
  const [address, setAddress] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (number === undefined || number.toString().length !== 10) {
      alert('Please Enter a Valid number')
      return
    }

    try {
      const res = await axios.get(
        `https://hoomanlabs-fokv.onrender.com/api/addresses?phno=${number}`
      )

      if (res.data?.errormsg) {
        alert(res.data.errormsg)
        return
      }

      setAddress(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '90vw',
        paddingBottom: '20vh',
        paddingTop: '5vh',
        height: '100vh',
        maxHeight: '100vh',
        alignItems: 'center',
      }}
    >
      <form>
        <label>Enter Customer Phone number</label>
        <input
          type='number'
          maxLength={10}
          minLength={10}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />{' '}
        <br />
        <button onClick={handleSubmit} style={{ marginBottom: '2vh' }}>
          Submit
        </button>
      </form>

      {address.length !== 0 && (
        <div style={{ overflow: 'scroll' }}>
          {address.map((add, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'burlywood',
                  width: '90vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '5vh',
                }}
              >
                <p>name : {add.name}</p>
                <p>address1 : {add.address1}</p>
                <p>address2 : {add.address2}</p>
                <p>city : {add.city}</p>
                <p>provience : {add.province}</p>
                <p>country : {add.country}</p>
                <p>phone : {add.phone}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default GetAddress
