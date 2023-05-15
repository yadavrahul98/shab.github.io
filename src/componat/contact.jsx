import React, { useState } from 'react'
import './contact.css'

export const Contact = () => {

   const [name, setName] = useState('');
   const [ocupType, setOcupType] = useState('');
   const [orgName, setOrgName] = useState('');
   const [email, setEmail] = useState('');
   const [msg, setMsg] = useState('');

   const onContact = () => {
    console.log(name, ocupType, orgName, email, msg)
   }

  return (
    <div className='contact-main-container'>``
      <div className="contact-container">
     <div className="contact-from">
      <div className="heading-details">
      <h1>Contact Form</h1>
      </div>
   
       <label htmlFor="">Name</label>
       <input id='name' className='name' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

       <label htmlFor="">Occupation Type</label>
       <input id='ocup_type' className='ocup_type' type="text" value={ocupType} onChange={(e)=>setOcupType(e.target.value)}/>

       <label htmlFor="">Organization / Instiute Name</label>
       <input id='org_name' className='org_name' type="text" value={orgName} onChange={(e)=>setOrgName(e.target.value)}/>

       <label htmlFor="">Email</label>
       <input id='email' className='email' type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>

       <label htmlFor="">Message</label>
       <textarea name="msg" id="msg" cols="30" rows="10" value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
   
    <div className="savebtn">
      <button type='submit' onClick={onContact}>Send</button>
    </div>
    </div>
    </div>
    </div>
  )
}
