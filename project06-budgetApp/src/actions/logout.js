//rrd library
import { redirect } from "react-router-dom";

//helper
import { deleteData } from "../Helper";

//react-toastify
import { toast } from "react-toastify";

export function logoutAction(){
    //delete user data
    deleteData({
        key : "userName"
    })
    deleteData({
        key : "budget"
    })
    deleteData({
        key : "expense"
    })
    toast.success("You've deleted your account!");

    //redirect 
    return redirect('/');
}