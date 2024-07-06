//rrd library
import { Outlet, useLoaderData } from "react-router-dom";

//helper function
import { fetchData } from "../Helper";

//assests
import wave from '../assets/wave.svg'

//components
import Navbar from "../component/Navbar";

export const mainLoader=()=>{
    const userName = fetchData('userName');
    return {userName};
}

function Main(){
    const {userName} = useLoaderData();

    return (
        <div className = "layout">

            <Navbar userName={userName}/>
            <main>
             <Outlet/>
            </main>
            <img src={wave} alt="" />

        </div>
    )
}

export default Main;