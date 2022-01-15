import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        e.preventDefault()
        const user = { email }
        fetch('https://serene-fortress-92200.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount)
                    console.log(data)
                setSuccess(true)
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount)
                    console.log(data)
                setSuccess(true)
            })
    }
    return (
        <div className='text-center'>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: '10%' }}> Make Admin</Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                    sx={{ width: '35%', mt: 3, mb: 2 }}
                />
                <br />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert>Made Admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;