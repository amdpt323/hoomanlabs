import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const GetOrderDetails = () => {
  const [number, setNumber] = useState(0)
  const [order, setOrder] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(
        `https://hoomanlabs-fokv.onrender.com/api/orders/getOrderDetails?orderId=${number}`
      )

      if (res.data?.errormsg) {
        alert(res.data.errormsg)
        return
      }

      setOrder(res.data.orderDetails[0])
      // console.log(res)
      // console.log(res.data.orderDetails)
      // console.log(order)
    } catch (error) {
      console.log(error)
    }
    console.log(order)
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
        <label>Enter OrderId</label>
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

      {order.status !== undefined && (
        <div style={{ overflow: 'scroll' }}>
          <p>status : {order.status}</p>
          {order.line_items.map((it, index) => {
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
                <p>name : {it.name}</p>
                <p>price : {it.price}</p>
                <p>weight : {it.weight}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default GetOrderDetails
