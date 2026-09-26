import { emailValidation } from '@/services/auth.service';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const useEmailValidation = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [actionError, setActionError] = useState(null);
    const actionStatus = {isSubmitting, actionError}

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onValidateEmail = async () => {
        if (email != ""){
        setIsSubmitting(true)
        setActionError(null)
        const emailDetails = {email}
        // console.log("on Valiate Email function execute...")
         try {
            const {isEmailValid} = await emailValidation(emailDetails)
            if (isEmailValid){
                sessionStorage.setItem("email", email) // email store inside local storage
                navigate('/password-recovery') // redirect to password-recovery route
            }
            else{
                setActionError("Email is Invalid") // if email is not valid then email is invalid
            }
         } catch (error) {
            setActionError(error.message)
            console.log(error.message)
         }
         finally{
            setIsSubmitting(false)
         }
        }
        else{
            setActionError("Required Email...")
        }
        
    }

    return {
        actionStatus,
        email,
        onChangeEmail,
        onValidateEmail,
    }
}

export default useEmailValidation