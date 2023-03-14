import { useEffect, useState } from "react";
import NavBar from './NavBar';
import MovieList from './MovieList';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import axios from 'axios';

function Home() {
    const [moviesArr, setmoviesArr] = useState([]);
    const serverUrl = `http://localhost:3000/trending`;
    const sendReq = async () => {
        const response = await fetch(serverUrl);
        const data = await response.json();
        console.log(data);
        setmoviesArr(data);
    }
    return (
        <>
            <p>HEllo from Home</p>
            <button onClick={sendReq}>send req</button>
            {moviesArr.map((item) => {
                return <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.poster_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>{item.overview}</p>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                
            })}
           
        </>

    )
}
export default Home;