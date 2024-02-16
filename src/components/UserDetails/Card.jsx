import React from 'react'
import styles from './card.module.css'
const Card = (props) => {
    const {name,email,dob,phone} = props;
    const dateObject = new Date(dob);

const year = dateObject.getFullYear();
const month = String(dateObject.getMonth() + 1).padStart(2, '0'); 
const day = String(dateObject.getDate()).padStart(2, '0');

const formattedDate = `${day}-${month}-${year}`;
  return (
    <div className={styles.main__card}>
        <h1>Name : {name}</h1>
        <h2>Email : {email}</h2>
        <h2>Date Of Birth : {formattedDate}</h2>
        <h2>Phone number : {phone}</h2>
    </div>
  )
}

export default Card