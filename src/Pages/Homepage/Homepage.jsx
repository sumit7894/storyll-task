import React from 'react'
import styles from './homepage.module.css'
import UserForm from '../../components/UserForm/UserForm'
const Homepage = () => {
  return (
    <div className={styles.main__homepage}>
        <UserForm/>
    </div>
  )
}

export default Homepage