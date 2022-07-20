import React, {useState} from 'react'

function UserForm() {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [avatar, setAvatar] = useState('https://picsum.photos/200/300');
    const [jobtitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');

    const createUser = async (newUser) => {
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
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            firstname,
            lastname,
            avatar,
            jobtitle,
            location
        }
        createUser(newUser);

        setFirstName('');
        setLastName('');
        setAvatar('https://picsum.photos/200/300');
        setJobTitle('');
        setLocation('');
    }

  return (
    <div className='user-form'>
        <div className="container">
            <h2>User Form: </h2>

            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter First Name' value={firstname} onChange={(event) => setFirstName(event.target.value)} />
                <input type='text' placeholder='Enter Last Name' value={lastname} onChange={(event) => setLastName(event.target.value)} />
                <input type='text' placeholder='Enter Avatar URL' value={avatar} onChange={(event) => setAvatar(event.target.value)} />
                <input type='text' placeholder='Enter Job Title' value={jobtitle} onChange={(event) => setJobTitle(event.target.value)} />
                <input type='text' placeholder='Enter Location' value={location} onChange={(event) => setLocation(event.target.value)} />
                <button>Create User</button>
            </form>
        </div>
    </div>
  )
}

export default UserForm