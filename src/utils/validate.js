export const checkName = (name)=>{
    
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/ && /^.{1,50}$/;
    if(name.length >50){
        return false;
    }
    else if(!nameRegex.test(name)){
        return false;
    }else{
        return true;
    } 
}

export const checkEmail =(email)=>{
    const isEmailValid = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
    return isEmailValid;
}

export const checkDob =(dob)=>{
    const birthDate = new Date(dob);
    
    const today = new Date();
    
    const ageDifference = today.getFullYear() - birthDate.getFullYear();
    
    const isBirthdayPassed = today.getMonth() > birthDate.getMonth() || 
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    
    if (ageDifference < 18 || (ageDifference === 18 && !isBirthdayPassed)) {
        return false; 
    } else {
        return true; 
    }

}