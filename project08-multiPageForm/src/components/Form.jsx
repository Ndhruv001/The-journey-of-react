import { useState } from "react"
//components
import UserLogin from "./UserLogin";
import PersonalDetails from "./PersonalDetails";
import OtherDetails from "./OtherDetails";

function Form(){
    const [page , setPage] = useState(0);
    const [formData , setFormData] = useState({
        email : '',
        password : '',
        firstName : '',
        lastName : '',
        userName : '',
        nationality : '',
        language : '',
        confirm : ''
    })


  // form titles
  const formTitles = ['Sign Up' , 'Personal Details' , 'Other Details'];

  //body function
  function pageDisplay(){
    if(page===0){
      return <UserLogin formData={formData} setFormData={setFormData}/>
    }
    else if(page===1){
      return <PersonalDetails formData={formData} setFormData={setFormData}/>
    }
    else {
      return <OtherDetails formData={formData} setFormData={setFormData}/>
    }
  }


  return (
    <>
      <div className="form">
        <div className="progressBar">
            <div
                style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
            ></div>
        </div>
        <div className="form-container">
          <div className="header">
              {formTitles[page]}
          </div>
          <div className="body">
              {pageDisplay()}
          </div>
          <div className="footer">
            <button disabled={page===0} onClick={()=>setPage((curr)=>curr-1)}>Prev</button>
            <button disabled={page===formTitles.length-1} onClick={()=>setPage((curr)=>curr+1)}>Next</button>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Form;