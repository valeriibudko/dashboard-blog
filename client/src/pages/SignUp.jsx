import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react'

export default function SignUp() {
  return (
    <div className='min-h-sreen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left side*/}
      <div className='flex-1'>
        <Link to='/' className='font-semibold dark:text-white text-4xl'>
              <span className='px-2 py-1 bg-gradient-to-r from-red-500 via-rose-500 to-rose-950  rounded-lg text-white'>Dashboard</span> blog
        </Link>
        <p className='text-sm mt-5'>
          Info about project
        </p>
      </div>

      {/* right side */}
      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
        <div>
            <Label value='Your name'></Label>
            <TextInput type='text' placeholder='Your name' id='username' />
          </div>
          <div>
            <Label value='Your email'></Label>
            <TextInput type='text' placeholder='maf@mail.com' id='useremail' />
          </div>
          <div>
            <Label value='Your password'></Label>
            <TextInput type='password' placeholder='Your password' id='password' />
          </div>
          <Button gradientDuoTone='greenToBlue' type='submit'>
            Sign Up
          </Button>


        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500'>
            Sign In
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}
