import React from 'react'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '50px',
        alignItems: 'center',
        width: '90vw',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '90vw',
          paddingBottom: '20vh',
        }}
      >
        <Link to={'/getAddresses'}>
          <div className='main-sbox'>Get Addresses</div>
        </Link>
        <Link to={'/updateAddress'}>
          <div className='main-sbox' style={{ backgroundColor: 'lightcoral' }}>
            Update Address
          </div>
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '90vw',
        }}
      >
        <Link to='/getOrderList'>
          <div className='main-sbox' style={{ backgroundColor: 'pink' }}>
            Get Order List
          </div>
        </Link>
        <Link to={'/getOrderDetails'}>
          <div className='main-sbox' style={{ backgroundColor: 'yellowgreen' }}>
            Get Order Details
          </div>
        </Link>
        <div className='main-sbox' style={{ backgroundColor: 'red' }}>
          Cancel Order
        </div>
      </div>
    </div>
  )
}

export default MainPage
