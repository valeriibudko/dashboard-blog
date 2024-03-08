
import { TextInput, Button } from 'flowbite-react';
import { useSelector } from 'react-redux';

export default function DashProfile() { 
    const { currentUser } = useSelector(state => state.user)

    return (
        <div className='max-w-lg mx-auto p-3 w-full'>
            <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
            <form className='flex flex-col gap-4'>
                <div className='w-32 h-32 self-center cursor-pointer overflow-hidden rounded-full shadow-xl'>
                   <img src={currentUser.profilePicture} alt="user"  
                   className='rounded-full w-full h-full bottom-8 object-cover border-[#41ac65]'/>
                </div>

                <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username}/>
                <TextInput type='text' id='email' placeholder='email' defaultValue={currentUser.email}/>
                <TextInput type='text' id='password' placeholder='password' />
                <Button type='submit' gradientDuoTone={'greenToBlue'} outline>Update</Button>
            </form>
            <div className='text-red-500 flex justify-between mt-5'>
                <span className='cursor-pointer'>Delete acount</span>
                <span className='cursor-pointer'>Sign out</span>
            </div>
        </div>
    )
}