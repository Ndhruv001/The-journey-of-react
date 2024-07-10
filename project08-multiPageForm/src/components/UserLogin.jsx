function UserLogin({formData , setFormData}){
    return (
        <div className="sign-up-container">
            <input type="email" required placeholder="Email..." value={formData.email} onChange={(e)=>setFormData(({...formData , email: e.target.value}))} />
            <input type="text" required placeholder="Password..." value={formData.password} onChange={(e)=>setFormData(({...formData , password: e.target.value}))}/>
            <input type="password" required placeholder="Confirm password.." value={formData.confirm} onChange={(e)=>setFormData(({...formData , confirm: e.target.value}))}/>
        </div>
    )
}

export default UserLogin;