function OtherDetails({formData , setFormData}){
    return (
        <div className="other-info-container">
            <input type="text" required placeholder="Nationality" value={formData.nationality} onChange={(e)=>setFormData(({...formData , nationality: e.target.value}))}/>
            <input type="text" required placeholder="Language" value={formData.language} onChange={(e)=>setFormData(({...formData , language: e.target.value}))}/>
        </div>
    )
}

export default OtherDetails;