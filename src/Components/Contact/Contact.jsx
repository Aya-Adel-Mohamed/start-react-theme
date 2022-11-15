import React,{useState} from 'react';
import '../Contact/Contact.css';
import StarBorder from '../StarBorder/StarBorder';


export default function Contact() {
 const [name,setname] = useState(false);
 const [email,setemail] = useState(false);
 const [phone,setphone] = useState(false);
 const [message,setmessage] = useState(false);
//  Message Error
 const [nameError,setNameError]=useState();
 const [emailError,setEmailError]=useState();
 const [phoneError,setPhoneError]=useState();
 const [MessageError,setMessageError]=useState();
//  Disable Btn
 const [disable,setDisable] = useState(true);
//  Lable
 const [lableName,setlableName]=useState('');
 const [lableEmail,setlableEmail]=useState('');
 const [lablePhone,setlablePhone]=useState('');
 const [lableMessage,setlableMessage]=useState('');
 
 const inputsValidation=()=>{
    if(name){
        setlableName('Name');
        if(nameValidation()){
            setNameError(null);
        }else{
            setNameError('Please enter your name');
        }
    }
    if(email){
        setlableEmail('Email Address')
        if(emailValidation()){
            setEmailError(null);
        }else{
            setEmailError('Please enter your email Address');
        }
    }
    if(phone){
        setlablePhone('Phone Number')
        if(phoneValidation()){
            setPhoneError(null)
        }else{
            setPhoneError('Please enter your phone number.')
        }
    }
    if(message){
        setlableMessage('Message')
        if(MessageValidation()){
            setMessageError(null)
        }else{
            setMessageError('Please enter a message.')
        }
    }
    if(nameValidation() && emailValidation() && phoneValidation() && MessageValidation()){
        setDisable(false);
    }else{
        setDisable(true);
    }
 }
const nameValidation=()=>{
    return (/^[a-zA-Z]+$/.test(document.getElementById('name').value))
}
const emailValidation=()=>{
    return(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById('email').value))
}
const phoneValidation=()=>{
    return(/^(002)?01[0125]\d{8}$/.test(document.getElementById('phone').value))
}
const MessageValidation=()=>{
    return(/^[a-zA-Z0-9]+$/g.test(document.getElementById('message').value))
}
  return (
    <>
    <section id="contact" className="p-xl-5 p-0">
            <div className="container pt-5 px-xl-5 px-0 my-5">
              <h2 className="text-center mb-0 ContactTitle pb-3 mt-5">CONTACT ME</h2>
              <StarBorder/>
                <div className="row p-lg-5 p-2 mx-2">
                    <div className="col-lg-8 mx-auto">
                        <form>
                            <div className="contact-form">
                                <div className="form-group mb-0 pb-2">
                                {lableName?<label htmlFor="name" className='fw-semibold text-green'>{lableName}</label>:''}
                                    <input className="form-control" id="name" type="text" name = "name" placeholder="Name"onInput={()=>inputsValidation()} onFocus={()=>setname(true)} />
                                    <div className="d-flex align-items-center">
                                    {nameError?<i className='fa-solid fa-circle me-1 text-danger'></i> : null}
                                  {nameError?<p className='text-danger fs-6 fw-semibold pt-2'>{nameError}</p> : null}
                                  </div>
                                </div>
                            </div>
                            <div className="contact-form">
                                <div className="form-group mb-0 pb-2">
                                    {lableEmail?<label htmlFor="email" className='fw-semibold text-green'>{lableEmail}</label>:''}
                                    <input className="form-control" id="email" name ="email" type="email" placeholder="Email Address"onKeyUp={()=>inputsValidation()} onFocus={()=>setemail(true)}/>
                                    <div className="d-flex align-items-center">
                                    {emailError?<i className='fa-solid fa-circle me-1 text-danger'></i> : null}
                                    {emailError? <p className='text-danger fs-6 fw-semibold pt-2'>{emailError}</p> : null}
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form">
                                <div className="form-group mb-0 pb-2">
                                {lablePhone?<label htmlFor="phone" className='fw-semibold text-green'>{lablePhone}</label>:''}
                                    <input className="form-control" id="phone" type="tel" placeholder="Phone Number" onKeyUp={()=>inputsValidation()} onFocus={()=>setphone(true)}/>
                                   <div className="d-flex align-items-center">
                                   {phoneError?<i className='fa-solid fa-circle me-1 text-danger'></i> : null}
                                    {phoneError? <p className='text-danger fs-6 fw-semibold pt-2'>{phoneError}</p> : null}
                                   </div>
                                </div>
                            </div>
                            <div className="contact-form">
                                <div className="form-group mb-0 pb-2">
                                {lableMessage?<label htmlFor="message" className='fw-semibold text-green'>{lableMessage}</label>:''}
                                    <textarea className="form-control" id="message" rows="5" placeholder="Message"onKeyUp={()=>inputsValidation()} onFocus={()=>setmessage(true)}></textarea>
                                    <div className="d-flex align-items-center">
                                    {MessageError?<i className='fa-solid fa-circle me-1 text-danger'></i> : null}
                                    {MessageError? <p className='text-danger fs-6 fw-semibold pt-2'>{MessageError}</p> : null}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button className="fs-5 btn btnColor text-white px-4 py-3" disabled={disable} type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

