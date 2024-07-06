//assests 
import logomark from '../assets/logomark.svg'
import deleteIcon from '../assets/deleteIcon.svg'

//rrd library
import { Form, NavLink } from 'react-router-dom';

//prop-types library
import PropTypes from "prop-types"; 


function Navbar({userName}){
    return (
       <nav>
            <NavLink 
            to = "/"
            >
                <img src={logomark} alt="" height="30"/>
                <span>Home Budget</span>
            </NavLink>
            
            {
                userName && (
                    <Form
                        method="post"
                        action = "/Logout"
                        onSubmit={(event)=>{
                            if(!confirm("Delete user and all their data")){
                                event.preventDefault();
                            }
                        }}
                    >
                        <button type='submit' className='btn btn--warning'>
                            <span>Delete User</span>
                            <img src={deleteIcon} alt="" height="25" />
                        </button>

                    </Form>
                )
            }
       </nav>

    )
}

Navbar.propTypes={
    userName : PropTypes.string.isRequired,
};

export default Navbar;