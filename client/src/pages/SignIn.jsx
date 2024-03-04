import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'

import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailer } from '../redux/user/userSlice';


export default function SignIn() {
  const [formData, setFormData] = useState({});  
  // const [errorMessage, setErrorMessage] = useState(null);  
  // const [loading, setLoading] = useState(false);  
  const { loading, error: errorMessage } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password) {
      // return setErrorMessage('Please fill out all fields');
      return dispatch(signInFailer('Please fill out all fields'));
    }

    try{
      // setLoading(true);
      // setErrorMessage(null);
      dispatch(signInStart());

      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailer(data.message));
        // return setErrorMessage(data.message)
      }
      // setLoading(false);
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }
    }catch(error){
      console.error('Catch: ' + JSON.stringify(error));
      // setErrorMessage('Fail auth.')
      // setLoading(false);
      dispatch(signInFailer(error.message));
    }
  };
  

  return (
    <div className='min-h-sreen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left side*/}
      <div className='flex-1'>
        <Link to='/' className='font-semibold dark:text-white text-4xl'>
          <span className='px-2 py-1 bg-gradient-to-r from-red-500 via-rose-500 to-rose-950  rounded-lg text-white'>Dashboard</span> blog
        </Link>
        <p className='text-sm mt-5'>
          Sign in to the project.
        </p>
      </div>

      {/* right side */}
      <div className='flex-1'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <Label value='Your email'></Label>
            <TextInput type='email' placeholder='maf@mail.com' id='email' onChange={handleChange}/>
          </div>
          <div>
            <Label value='Your password'></Label>
            <TextInput type='password' placeholder='**********' id='password' onChange={handleChange}/>
          </div>
          <Button gradientDuoTone='greenToBlue' type='submit' disabled={loading}>
           {
             loading ? (
              <>
              <Spinner size='sm' />
              <span>Loading...</span>
              </>
             ) : 'Sign In'
           }
          </Button>

        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Dont have an account?</span>
          <Link to='/sign-up' className='text-blue-500'>
            Sign Up
          </Link>
        </div>
        {
          errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )
        }
      </div>
      </div>
    </div>
  )
}
