import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../components/UI/Footer';
import { Loader } from '../components/UI/Loader';
import NavBar from '../components/UI/NavBar';
import '../styles/App.css'

function Order() {

  const [orderText,setOrderText]=useState('')
  const [loading,setLoading]=useState(true)

  async function fetchOrderText() {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}api/pages/elem/author`)
    setOrderText(response.data)
  }
 


  useEffect(() => {
    fetchOrderText().finally(() => setLoading(false))

  }, [])

  if (loading) {
    return <Loader />
  }
  return (
    <div>
      <div className="content">
        <NavBar />
        <div>
          <h1>Заказ</h1>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Order;