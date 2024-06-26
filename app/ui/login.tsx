import React from 'react'

type Props = {}

export default function Login({}: Props) {
  return (
    <div className='w-screen flex flex-col items-center gap-10'>
      <h1 className='text-3xl text-emerald-400 font-bold'>Login</h1>
      <form className='flex flex-col gap-5 w-1/2 items-center'>
        <input type='text' placeholder='Username' className='p-3 rounded-lg w-1/2' />
        <input type='text' placeholder='Password' className='p-3 rounded-lg w-1/2' />
        <button type='submit' className='bg-emerald-400 rounded-full px-10 py-3 font-bold'>
         <a href='/users'> Login</a>
        </button>
      </form>
    </div>
  )
}
