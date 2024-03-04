import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'

export default function SignUp() {
  const [formData, setFormData] = useState({});  
  const [errorMessage, setErrorMessage] = useState(null);  
  const [loading, setLoading] = useState(false);  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields');
    }

    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success === false){
        return setErrorMessage(data.message)
      }
      setLoading(false);
      if(res.ok){
        navigate('/sign-in');
      }
    }catch(error){
      console.error('Catch: ' + JSON.stringify(error));
      setErrorMessage('Fail auth.')
      setLoading(false);
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
          Info about project
        </p>
      </div>

      {/* right side */}
      <div className='flex-1'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div>
            <Label value='Your name'></Label>
            <TextInput type='text' placeholder='Your name' id='username' onChange={handleChange}/>
          </div>
          <div>
            <Label value='Your email'></Label>
            <TextInput type='email' placeholder='maf@mail.com' id='email' onChange={handleChange}/>
          </div>
          <div>
            <Label value='Your password'></Label>
            <TextInput type='password' placeholder='Your password' id='password' onChange={handleChange}/>
          </div>
          <Button gradientDuoTone='greenToBlue' type='submit' disabled={loading}>
           {
             loading ? (
              <>
              <Spinner size='sm' />
              <span>Loading...</span>
              </>
             ) : 'Sign Up'
           }
          </Button>


        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500'>
            Sign In
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
