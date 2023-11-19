import { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { ETypes, MessageCard } from './Atoms/MessageCard'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import HubleLogo from '../assets/2.webp'

export default function ForgotPassword() {
  const emailRef = useRef<HTMLInputElement>(null)
  const { resetPassword } = useAuth()
  const [messageType, setMessageType] = useState<ETypes>(ETypes.DANGER)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()

    try {
      setMessage('')
      setLoading(true)
      await resetPassword(emailRef.current?.value)
      setMessageType(ETypes.SUCCESS)
      setMessage('Check your inbox for further instructions')
    } catch {
      setMessageType(ETypes.DANGER)
      setMessage('Failed to reset password')
    }

    setLoading(false)
  }
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={HubleLogo}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              <span className="text-[#fc4f5a]"> Password </span> Reset
            </h2>
          </div>
          <MessageCard
            title={messageType == ETypes.SUCCESS ? 'Success' : 'Error'}
            message={message}
            type={messageType}
            visible={!!message}
          />
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <h2 className=" pl-2  text-left  text-lg pb-1 font-bold tracking-tight text-gray-900">
                  Email
                </h2>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  ref={emailRef}
                  required
                  className="relative block w-full appearance-none rounded-full border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative transition-colors flex w-full justify-center rounded-md border border-transparent bg-[#fc4f5a] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-white group-hover:text-white"
                    aria-hidden="true"
                  />
                </span>
                Rest Password
              </button>
            </div>
            <div className="text-sm text-center">
              <Link
                className="font-medium text-gray-500 hover:text-[#fc4f5a]"
                to="/login"
              >
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
