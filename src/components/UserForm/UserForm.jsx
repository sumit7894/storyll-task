import React from 'react'
import styles from './userform.module.css'
const UserForm = () => {
  return (
    <div className={styles.main__userform}>
        <h1 className={styles.heading}>
        Storyll Hiring Task
        </h1>
        <div className={styles.form__container}>
            <form>
                <div className={styles.input__container}>
                <label> Name</label>
                <input type='text' placeholder='Enter your name..'/>
                </div>

                <div className={styles.input__container}>
                <label> D.O.B</label>
                <input type='date' placeholder='Enter your date of birth..'/>
                </div>

                <div className={styles.input__container}>
                <label> Email</label>
                <input type='email' placeholder='Enter your name..'/>
                </div>

                <div className={styles.input__container}>
                <label> Phone</label>
                <input type='numeric' placeholder='Enter your name..'/>
                </div>
                <button className={styles.submit__button}>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default UserForm