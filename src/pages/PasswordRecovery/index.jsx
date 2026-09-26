import { Input } from '@/components/ui/shadcn/input'
import { Button } from '@/components/ui/shadcn/button'
import usePasswordRecovery from '@/hooks/usePasswordRecovery'

const PasswordRecovery = () => {
  const {
    actionStatus,
    password,
    confirmPassword,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmitNewPassword
  }
    = usePasswordRecovery()

  const { isSubmitting, actionError } = actionStatus


  return (
    <div className="mt-8 flex flex-col">
      <h1 className="text-xl font-semibold mb-4 font-heading"> Password Recovery </h1>
      <main className="flex flex-col gap-3">
        <Input type="password" className="w-full" value={password} onChange={onChangePassword} placeholder="Enter New Password ..." />
        <Input type="password" className="w-full" value={confirmPassword} onChange={onChangeConfirmPassword} placeholder="Enter Confirm Password ..." />
      </main>
      {actionError && (<p className="text-right text-red-400 font-light text-[12px]"> {actionError} </p>)}
      <Button className="w-full py-5 mt-4 text-base font-semibold" disabled={isSubmitting ? true : false} onClick={onSubmitNewPassword}> {isSubmitting ? "Submitting..." : "Submit"} </Button>
    </div>
  )
}

export default PasswordRecovery
