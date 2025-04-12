import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Heading from '../Reuseable/Heading';
import { Container, Grid2 } from '@mui/material';
import Buttoncomp from '../Reuseable/Buttoncomp';

const Project = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))
    }, [])
    return (
        <>
            <Heading heading="Latest Projects" />
            <Container className='project'>
                <Grid2 container columnSpacing={7} rowSpacing={5} sx={{mt:5}}>
                    {data.map((val, index) => {
                        return (
                            <>
                                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 4  }} item key={index}>
                                    <Card className="card" sx={{ width: "100%" }}>
                                        <CardMedia
                                            sx={{ height: 140 }}

                                        >Image Placed</CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {val.title}
                                            </Typography>
                                            <Typography variant="body2">
                                                {val.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Buttoncomp buttonValue="View More"/>
                                        </CardActions>
                                    </Card>
                                </Grid2>
                            </>
                        )
                    })}
                </Grid2>
            </Container>
        </>
    )
}

export default Project
