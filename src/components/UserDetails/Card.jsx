import React from 'react'
import styles from './card.module.css'
const Card = (props) => {
    const {name,email,dob,phone} = props;
  return (
    <div className={styles.main__card}>
        <h1>Name : {name}</h1>
        <h2>Email : {email}</h2>
        <h2>Date Of Birth : {dob}</h2>
        <h2>Phone number : {phone}</h2>
    </div>
  )
}

export default Card