import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, showUser } from '../app/userDetailSlice';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import CustomModel from './CustomModel';
import { Link } from 'react-router-dom';


export default function ReadData() {
    const [id, setId] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const [radioData, setRadioData] = useState();
    console.log('radioData', radioData)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showUser())
    }, []);

    const { users, loading, searchData } = useSelector((state) => state.data);
    // console.log('alldataaaaa', alldata)

    if (loading) {
        return <h2>Loading</h2>;
    }
    return (

        <>
            {showPopup && <CustomModel id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}
            <h2>All data</h2>
            <input
              class="form-check-input"
              name="gender"
              checked={radioData === ""}
              type="radio"
              onChange={(e) => setRadioData("")}
            />
            <label class="form-check-label">All</label>
            <input
              class="form-check-input"
              name="gender"
              checked={radioData === "Male"}
              value="Male"
              type="radio"
              onChange={(e) => setRadioData(e.target.value)}
            />
            <label class="form-check-label">Male</label>
            <input
              class="form-check-input"
              name="gender"
              value="Female"
              checked={radioData === "Female"}
              type="radio"
              onChange={(e) => setRadioData(e.target.value)}
            />
            <label class="form-check-label">Female</label>
            {
                users && users
                    .filter((item) => {
                        if (searchData.length === 0) {
                            return item;
                        } else {
                            return item.name
                                .toLowerCase()
                                .includes(searchData.toLowerCase());
                        }
                    })
                    
                    .filter((item) => {
                        if (radioData === "Male") {
                          return item.gender === radioData;
                        } else if (radioData === "Female") {
                          return item.gender === radioData;
                        } else return item;
                      })



                    .map((item) => {
                        return (
                            <Grid container item spacing={3} style={{ marginLeft: "600px", marginTop: "20px" }}>

                                <Card sx={{ minWidth: 500 }}>
                                    <CardContent>
                                        {item.id}
                                        <Typography variant="h5" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

                                            {item.gender}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {item.email}
                                        </Typography>
                                        <Typography variant="body2">
                                            {item.age}
                                            <br />
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => dispatch(deleteUser(item.id))}>Delete</Button>
                                        <Link to={`/update/${item.id}`} className="card-link">
                                            Edit
                                        </Link>
                                        <Button size="small" onClick={() => [setId(item.id), setShowPopup(true)]}
                                        >View</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
            }
        </>
    )
}