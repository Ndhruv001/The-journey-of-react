function PersonalDetails({formData , setFormData}){
    return (
       <div className="personal-info-container">
        <input type="text" required placeholder="First name.." value={formData.firstName} onChange={(e)=>setFormData(({...formData , firstName: e.target.value}))}/>
        <input type="text" required placeholder="Last name.." value={formData.lastName} onChange={(e)=>setFormData(({...formData , lastName: e.target.value}))}/>
        <input type="text" required placeholder="User name.." value={formData.userName} onChange={(e)=>setFormData(({...formData , userName: e.target.value}))}/>
       </div>
    )
}

export default PersonalDetails;