import { useEffect, useState } from "react";
import NavBar from './NavBar';
import MovieList from './MovieList'
// import axios from 'axios';

function Home()
{
   
    return(
        <>
    
        
        <NavBar />
        <MovieList />
        </>
    )
}
export default Home;