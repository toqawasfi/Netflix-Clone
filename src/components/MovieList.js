import Movie from "./Movie";
import { useEffect, useState } from "react";
function MovieList() {
    const [moviesArr, setmoviesArr] = useState([]);
    const sendreq = async () => {
        const serverURL = `http://localhost:3000/trending`;
        const resData = await fetch(serverURL);
        const data = await resData.json();
        console.log(data);
        setmoviesArr(data);

        return (
            <>


                <h1>hello from MovieList</h1>
                {moviesArr.map((item) => {
                    return <div>
                        <p> {item.title}</p>
                        <img src={item.poster_path}></img>
                        <p>{item.overview}</p>
                    </div>


                })}
                <Movie myData={data} />
            </>
        )
    }
}
export default MovieList;