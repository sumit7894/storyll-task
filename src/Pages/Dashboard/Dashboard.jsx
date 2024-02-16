import React, { useEffect, useState } from 'react'
import styles from './dashboard.module.css'
import { BASE_URL } from '../../utils/constants'
import axios from 'axios'
import Card from '../../components/UserDetails/Card'

const Dashboard = () => {
  const [info,setInfo] = useState();
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/users`);
        console.log(response.data);
        setInfo(response.data.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[])
  return (
    <div className={styles.main__dashboard}>
      {info?.map((item,idx)=>(
        <Card name={item.name} email={item.email} phone={item.mobile}
        dob ={item.dob}
        key={idx}
        />
      ))}
    </div>
  )
}

export default Dashboard