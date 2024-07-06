import { useRouteError,Link, useNavigate } from "react-router-dom";

//assets
import home from '../assets/home.svg'
import back from '../assets/back.svg'

function Error(){
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="error">
            <h1>Uh oh! We've got a problem.</h1>
            <p>{error.message || error.statusText}</p>
            <div className="flex-md">
                <button   className="btn btn--dark" onClick={()=>{navigate(-1)}}>
                    <img src={back} alt="" height={25}/>
                    <span>Go Back</span>
                </button>
                <Link
                    to="/"
                    className="btn btn--dark"
                >
                    <img src={home} alt="" height={25} />
                    <span>Go Home</span>

                </Link>
            </div>
            
        </div>
    )
}

export default Error;