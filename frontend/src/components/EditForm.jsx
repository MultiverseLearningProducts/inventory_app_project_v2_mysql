import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function EditForm({userId}) {

    const navigate = useNavigate();

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [avatar, setAvatar] = useState('https://robohash.org/impeditofficiaporro.png?size=50x50&set=set1');
    const [job_title, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [profile_pic, setProfilePic] = useState('http://dummyimage.com/100x100.png/cc0000/ffffff');
    const [email, setEmail] = useState('');

    const getUser = async (userId) => {
        const response = await fetch(`http://localhost:8000/api/users/${userId}`);

        const data = await response.json();
        const {user} = data;

        setFirstName(user.first_name);
        setLastName(user.last_name);
        setAvatar(user.avatar);
        setJobTitle(user.job_title);
        setLocation(user.location);
        setProfilePic(user.profile_pic);
        setEmail(user.email);
    }

    const updateUser = async (userId, updatedUser) => {
        if(window.confirm('User Updated!')){
            try {
                const response = await fetch(`http://localhost:8000/api/users/${userId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'SameSite': 'None'
                    },
                    body: JSON.stringify(updatedUser)
                });
        
                const data = await response.json();
        
                console.log('User Updated!', data);
            } catch(error) {
                console.log(error.message);
            }

            navigate(`/users/${userId}`);

        }


    }


    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedUser = {
            first_name,
            last_name,
            avatar,
            job_title,
            location,
            profile_pic,
            email
        }

        updateUser(userId, updatedUser);

        // setFirstName('');
        // setLastName('');
        // setAvatar('https://robohash.org/impeditofficiaporro.png?size=50x50&set=set1');
        // setJobTitle('');
        // setLocation('');
        // setProfilePic('http://dummyimage.com/100x100.png/cc0000/ffffff')
        // setEmail('');
    }

    useEffect(() => {
        getUser(userId);
    },[userId]);

  return (
    <div className='edit-form'>
        <div className="container">

            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter First Name' value={first_name} onChange={(event) => setFirstName(event.target.value)} />
                <input type='text' placeholder='Enter Last Name' value={last_name} onChange={(event) => setLastName(event.target.value)} />
                <input type='text' placeholder='Enter Email' value={email} onChange={(event) => setEmail(event.target.value)} />
                <input type='text' placeholder='Enter Avatar URL' value={avatar} onChange={(event) => setAvatar(event.target.value)} />
                <input type='text' placeholder='Enter Job Title' value={job_title} onChange={(event) => setJobTitle(event.target.value)} />
                <input type='text' placeholder='Enter Location' value={location} onChange={(event) => setLocation(event.target.value)} />
                <button type='update'>Update User</button>
            </form>
        </div>
    </div>
  )
}

export default EditForm