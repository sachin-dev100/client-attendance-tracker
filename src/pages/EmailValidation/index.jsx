import {Input} from '@/components/ui/shadcn/input'
import {Button} from '@/components/ui/shadcn/button'
import useEmailValidation from '@/hooks/useEmailValidation'

const EmailValidation = () => {
  const {
    actionStatus,
    email,
    onChangeEmail,
    onValidateEmail,
        }
    = useEmailValidation()
    const {isSubmitting, actionError} = actionStatus

  return (
    <div className = "mt-8 flex flex-col">
      <h1 className = "text-xl font-semibold mb-4 font-heading"> Email Validation </h1>
      <Input className = "w-full" value = {email} onChange = {onChangeEmail} placeholder = "Enter Your Validation Email..."/>
      {actionError && (<p className = "text-right text-red-400 font-light text-sm"> {actionError} </p>)}
      <Button className = "w-full py-5 mt-4 text-base font-semibold" disabled = {isSubmitting ? true: false} onClick = {onValidateEmail}>{isSubmitting ? "Validating...." : "Validation"}</Button>
    </div>
  )
}

export default EmailValidation
