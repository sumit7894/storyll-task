import React, { useState } from 'react'
import styles from './userform.module.css'
import toast,{ Toaster } from 'react-hot-toast';
import axios from 'axios';
import { checkDob, checkEmail, checkName } from '../../utils/validate';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/constants';
const UserForm = () => {
    const navigate = useNavigate();
    const [name,setName] = useState();
    const [dob,setDob] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();
    const handleSubmit = async()=>{
        const data = {name,dob,email,phone};
        if(!name || !dob || !email){
            toast.error("Please fill all the fields");
            return;
        }
        const validName = checkName(name);
        const validEmail = checkEmail(email);
        const validDob = checkDob(dob);
        console.log("this is dob validation",validDob)
       if(!validName){
        toast.error("Invalid Name")
        return;
       }
       if(!validEmail){
        toast.error("Invalid Email");
        return;
       }
       if(!validDob){
        toast.error("Age must be greater than 18");
        return;
       }
       
        try {
            const response = await axios.post(`${BASE_URL}/add`,data);
            console.log(response);
            toast.success(response?.data?.message);
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
            setTimeout(()=>{
                toast(error.response.data.message, {
                    icon: '⚠',
                  });
            },1000)
        }
    }
  return (
    <div className={styles.main__userform}>
        <h1 className={styles.heading}>
        Storyll Hiring Task
        </h1>
        <div className={styles.form__container}>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div className={styles.input__container}>
                <label> Name</label>
                <input type='text' placeholder='Enter your name..'
                onChange={(e)=>setName(e.target.value)}
                />
                </div>

                <div className={styles.input__container}>
                <label> D.O.B</label>
                <input type='date' placeholder='Enter your date of birth..'
                onChange={(e)=>setDob(e.target.value)}
                />
                </div>

                <div className={styles.input__container}>
                <label> Email</label>
                <input type='email' placeholder='Enter your mail id..'
                onChange={(e)=>setEmail(e.target.value)}
                />
                </div>

                <div className={styles.input__container}>
                <label> Phone</label>
                <input type='numeric' placeholder='Enter your Phone number..'
                onChange={(e)=>setPhone(e.target.value)}
                />
                </div>
                <button 
                className={styles.submit__button}
                onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
        <Toaster/>
    </div>
  )
}

export default UserForm