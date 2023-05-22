import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../app/userDetailSlice';


const Update = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [updateData, setUpdateData] = useState();

    const { users, loading } = useSelector((state) => state.data);

    useEffect(() => {
        if (id) {
            const singleUser = users.filter((item) => item.id === id);
            setUpdateData(singleUser[0]);
        }
    }, []);
    if (loading) {
        return <h2>Loading</h2>;
    }

    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    };

    console.log("updated data", updateData);

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate("/read");
    };
    return (
        <div>
            <div>
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            
                        }}
                        onSubmit={handleUpdate}
                    >

                        <Typography component="h1" variant="h5">
                            Update Form
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }} >
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                        fullWidth
                                        id="Name"
                                        label="Name"
                                        autoComplete="family-name"
                                        value={updateData && updateData.name}
                                        name="name"
                                        onChange={newData}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        autoComplete="email"
                                        value={updateData && updateData.email}
                                        name="email"
                                        onChange={newData}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Age"
                                        type="age"
                                        id="age"
                                        autoComplete="new-age"
                                        value={updateData && updateData.age}
                                        name="age"
                                        onChange={newData}
                                    />
                                </Grid>
                                <div className="form-check" style={{ marginTop: "20px" }}>
                                    <input className="form-check-input"
                                        name="gender"
                                        value="Male"
                                        type="radio"
                                        checked={updateData && updateData.gender === "Male"}
                                        onChange={newData}
                                    ></input>


                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check" style={{ marginTop: "20px" }}>
                                    <input className="form-check-input"
                                        name="gender"
                                        value="Female"
                                        type="radio"
                                        checked={updateData && updateData.gender === "Female"}
                                        onChange={newData}
                                    />
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
        </div>
    )
}

export default Update
