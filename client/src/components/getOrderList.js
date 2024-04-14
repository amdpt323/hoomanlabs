import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const GetOrderList = () => {
  const [number, setNumber] = useState(0)
  const [orders, setOrders] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (number === undefined || number.toString().length !== 10) {
      alert('Please Enter a Valid number')
      return
    }

    try {
      const res = await axios.get(
        `https://hoomanlabs-fokv.onrender.com/api/orders/getOrderList?phno=${number}`
      )

      if (res.data?.errormsg) {
        alert(res.data.errormsg)
        return
      }

      setOrders(res.data.orderids)
      console.log(res)
      console.log(orders)
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

      {orders.length !== 0 && (
        <div style={{ overflow: 'scroll' }}>
          {orders.map((order, index) => {
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
                <p>order ID : {order.orderId}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default GetOrderList
