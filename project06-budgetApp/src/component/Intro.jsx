//rrd library
import { Form } from "react-router-dom";

//assets
import userPlus from '../assets/userPlus.svg'
import illustration from '../assets/illustration.jpg'


function Intro(){
    return (
        <div className="intro">
            <div>
                <h1>
                    Take Control of <span className="accent">Your Money</span>
                </h1>
                <p>Personal budgeting is the secret to financial freedom. Start your journey today.</p>
                <Form
                 method="post"
                >
                    <input 
                    type="text" 
                    name="userName" 
                    required
                    placeholder="What is your name?"
                    autoComplete="given-name"
                    />
                    <input type="hidden" name="_action" value="newUser" />
                    <button type="submit" className="btn btn--dark">
                        <span>Create Account</span>
                        <img src={userPlus} alt="" height={30}/>
                    </button>
                </Form>
            </div>
            <img src={illustration} alt="" height={265}/>
        </div>
    )
}

export default Intro;