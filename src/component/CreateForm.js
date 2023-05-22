import React from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createUser } from '../app/userDetailSlice';
import { useNavigate } from 'react-router-dom';


const CreateForm = () => {
    const [users, setUsers] = React.useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate()
    console.log('users', users)

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(users))
        navigate("/read")
        console.log("users...", users);
    };
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Form
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    fullWidth
                                    id="Name"
                                    label="Name"
                                    autoComplete="family-name"
                                    name="name"
                                    onChange={getUserData}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    autoComplete="email"
                                    name="email"
                                    onChange={getUserData}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Age"
                                    type="age"
                                    id="age"
                                    autoComplete="new-age"
                                    name="age"
                                    onChange={getUserData}
                                />
                            </Grid>
                            <div className="form-check" style={{ marginTop: "20px" }}>
                                <input className="form-check-input"
                                    name="gender"
                                    value="Male"
                                    type="radio"
                                    onChange={getUserData}></input>


                                <label className="form-check-label" for="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check" style={{ marginTop: "20px" }}>
                                <input className="form-check-input"
                                    name="gender"
                                    value="Female"
                                    type="radio"
                                    onChange={getUserData} />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>

                    </Box>
                </Box>
            </Container>

        </div>



    )
}

export default CreateForm
