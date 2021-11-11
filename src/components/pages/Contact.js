import React, {useState} from 'react';
import "./Contact.css"

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="card">
        <div className="card-content">
            <p>A background in Benefits Administration and Human Resources gives me a <span>customer-focused</span> mentality and the ability to keep a project aligned with the needs of the end-user. I now apply this process to my work as a developer by <span>researching challenging issues </span>researching challenging issues that affect usability and accessibility and effectively collaborating with my team.</p>
            {/* <p>Feel free to contact me via email: <span><a id='email' href="mailto:micheal@zestylimones.com">micheal@zestylimones.com</a></span></p> */}
        </div>
        <form className="contact-form">
          <label >
            Name:
            <input type='text' className="text-box" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
          </label>
          <label >
            Email:
            <input type='email' className="text-box" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </label>
          <label>
            Message:
            <textarea name="message" cols="100" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} required/>
          </label>
          <input type="submit" name="submit"value='Submit' className="submit" />
        </form>
      </div>
      
    </div>
  );
}

export default Contact;