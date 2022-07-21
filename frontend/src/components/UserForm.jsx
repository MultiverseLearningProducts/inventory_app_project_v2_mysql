import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function UserForm() {

    const navigate = useNavigate();

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [avatar, setAvatar] = useState('https://robohash.org/impeditofficiaporro.png?size=50x50&set=set1');
    const [job_title, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [profile_pic, setProfilePic] = useState('http://dummyimage.com/100x100.png/cc0000/ffffff');
    const [email, setEmail] = useState('');

    const createUser = async (newUser) => {
        
        if(window.confirm('User Created!')){
            try {
                const response = await fetch('http://localhost:8000/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser)
                });
        
                const data = await response.json();
        
                console.log('User Created!', data);
            } catch(error) {
                console.log(error.message);
            }

            navigate('/')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            first_name,
            last_name,
            avatar,
            job_title,
            location,
            profile_pic,
            email
        }
        createUser(newUser);

        setFirstName('');
        setLastName('');
        setAvatar('https://robohash.org/impeditofficiaporro.png?size=50x50&set=set1');
        setJobTitle('');
        setLocation('');
        setProfilePic('http://dummyimage.com/100x100.png/cc0000/ffffff')
        setEmail('');
    }

  return (
    <div className='user-form'>
        <div className="container">
            <h2>User Form: </h2>

            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter First Name' value={first_name} onChange={(event) => setFirstName(event.target.value)} />
                <input type='text' placeholder='Enter Last Name' value={last_name} onChange={(event) => setLastName(event.target.value)} />
                <input type='text' placeholder='Enter Email' value={email} onChange={(event) => setEmail(event.target.value)} />
                <input type='text' placeholder='Enter Avatar URL' value={avatar} onChange={(event) => setAvatar(event.target.value)} />
                <input type='text' placeholder='Enter Job Title' value={job_title} onChange={(event) => setJobTitle(event.target.value)} />
                <input type='text' placeholder='Enter Location' value={location} onChange={(event) => setLocation(event.target.value)} />
                <button type='btn'>Create User</button>
            </form>
        </div>
    </div>
  )
}

export default UserForm