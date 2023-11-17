import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { ETypes, MessageCard } from './Atoms/MessageCard'
import { AiFillExclamationCircle } from 'react-icons/ai'
import { useToast, EToastTypes } from '../contexts/ToastContext'
import Download from '../assets/2.webp'

export default function UpdateProfile() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const { showTypedToast } = useToast()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError('Passwords do not match')
    }

    const promises = []
    setLoading(true)
    setError('')

    if (emailRef.current?.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current?.value))
    }
    if (passwordRef.current?.value) {
      promises.push(updatePassword(passwordRef.current?.value))
    }

    Promise.all(promises)
      .then(() => {
        navigate('/')
        showTypedToast(EToastTypes.SUCCESS, 'Profile updated Successfully')
      })
      .catch(() => {
        setError('Failed to update account')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={Download}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              <span className="text-[#fc4f5a]">Update</span> Profile
            </h2>
          </div>
          <MessageCard message={error} type={ETypes.DANGER} visible={!!error} />
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  ref={emailRef}
                  defaultValue={currentUser.email}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="-space-y-px rounded-md shadow-sm">
              <h1 className="py-1 text-sm text-gray-500 flex items-center ">
                <AiFillExclamationCircle className="mr-1" /> Leave blank to keep
                the same
              </h1>
              <div>
                <h2 className=" pl-2  text-left  text-lg py-2 font-bold tracking-tight text-gray-900">
                  Password
                </h2>
                <label className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  className="relative block w-full appearance-none  rounded-full  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <h2 className=" pl-2  text-left  text-lg  py-2 font-bold tracking-tight text-gray-900">
                  Confirm Password
                </h2>
                <label className="sr-only">Confirm Password</label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  ref={passwordConfirmRef}
                  className="relative block w-full appearance-none rounded-full border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Confirm Password"
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
                Update
              </button>
            </div>
            <div className="text-sm text-center">
              <Link
                className="font-medium  text-gray-600 hover:text-indigo-500"
                to="/"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
