import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const UpdateAddress = () => {
  const [number, setNumber] = useState(1234567890)
  const [address, setAddress] = useState({
    first_name: 'first_name',
    last_name: 'last_name',
    company: 'company',
    address1: 'address1',
    address2: 'address2',
    city: 'city',
    province: 'provience',
    country: 'country',
    zip: 'zip',
    phone: '1234567890',
    name: 'name',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (number === undefined || number.toString().length !== 10) {
      alert('Please Enter a Valid number')
      return
    }

    try {
      const res = await axios.put('https://hoomanlabs-fokv.onrender.com/api/addresses', {
        phno: number.toString(),
        newAddress: address,
      })

      if (res.data?.errormsg) {
        alert(res.data.errormsg)
        return
      }

      alert(res.data.msg)
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
        <label>firstName</label>
        <input
          type='text'
          value={address.first_name}
          onChange={(e) => {
            setAddress((val) => ({
              ...val,
              first_name: e.target.value,
            }))
          }}
        />
        <br />
        <label>lastName</label>
        <input
          type='text'
          value={address.last_name}
          onChange={(e) => {
            setAddress((val) => ({
              ...val,
              last_name: e.target.value,
            }))
          }}
        />
        <br />
        <label>company</label>
        <input
          type='text'
          value={address.company}
          onChange={(e) => {
            setAddress((val) => ({
              ...val,
              company: e.target.value,
            }))
          }}
        />
        <br />
        <label>address1</label>
        <input
          type='text'
          value={address.address1}
          onChange={(e) => {
            setAddress((val) => ({
              ...val,
              address1: e.target.value,
            }))
          }}
        />
        <br />
        <label>address2</label>
        <input
          type='text'
          value={address.address2}
          onChange={(e) => {
            setAddress((val) => ({
              ...val,
              address2: e.target.value,
            }))
          }}
        />
        <br />
        <label>city</label>
        <input
          type='text'
          value={address.city}
          onChange={(e) => {
            setAddress((val) => ({
              ...val,
              city: e.target.value,
            }))
          }}
        />
        <br />
        <label>provience</label>
        <input
          type='text'
          value={address.province}
          onChange={(e) => {
            setAddress((val) => ({
              ...val,
              province: e.target.value,
            }))
          }}
        />
        <br />
        <label>country</label>
        <input
          type='text'
          value={address.country}
          onChange={(e) => {
            setAddress((val) => ({
              ...val,
              country: e.target.value,
            }))
          }}
        />
        <br />
        <label>zip</label>
        <input
          type='text'
          value={address.zip}
          onChange={(e) => {
            setAddress((val) => ({
              ...val,
              zip: e.target.value,
            }))
          }}
        />
        <br />
        <label>phone</label>
        <input
          type='text'
          value={address.phone}
          onChange={(e) => {
            setAddress((val) => ({
              ...val,
              phone: e.target.value,
            }))
          }}
        />
        <br />
        <label>name</label>
        <input
          type='text'
          value={address.name}
          onChange={(e) => {
            setAddress((val) => ({
              ...val,
              name: e.target.value,
            }))
          }}
        />
        <br />
        <button
          onClick={handleSubmit}
          style={{ marginBottom: '2vh' }}
          className='submit'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default UpdateAddress
