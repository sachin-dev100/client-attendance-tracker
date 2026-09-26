import { setNewPassword } from '@/services/auth.service';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const usePasswordRecovery = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [actionError, setActionError] = useState(null);
    const actionStatus = {isSubmitting, actionError}

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    const onSubmitNewPassword = async () => {
        console.log(password)
        console.log(confirmPassword)
        const sessionEmail = sessionStorage.getItem("email")
        console.log(sessionEmail)
        if (!sessionEmail){
            setActionError("Session Expired")
            setTimeout(() => {
                navigate('/email-validator')
            }, 1000)
            return 
        }
        if (password !== confirmPassword || password === ""){
            setActionError("Password and Confirm Password must be same and Non-empty")
            return 
        }
        setIsSubmitting(true)
        setActionError(null)
        const updatedDetails = {email: sessionEmail, password, confirmPassword}
        try {
            await setNewPassword(updatedDetails)
            sessionStorage.removeItem("email") // email remove from session storage
            navigate('/login') // redirect to login page
        } catch (error) {
            console.log(error.message)
            setActionError(error.message)
        }
        finally{
            setIsSubmitting(false)
        }
    }     

    return {
        actionStatus,
        password,
        confirmPassword,
        onChangePassword,
        onChangeConfirmPassword,
        onSubmitNewPassword
    }
}

export default usePasswordRecovery