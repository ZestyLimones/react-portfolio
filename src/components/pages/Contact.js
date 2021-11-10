import React, {useState} from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  return (
    <div>
      <h2>Contact Me</h2>
      <div className="card">
        <div className="card-content">
            <p>A background in Benefits Administration and Human Resources gives me a <span>customer-focused</span> mentality and the ability to keep a project aligned with the needs of the end-user. I now apply this process to my work as a developer by <span>researching challenging issues </span>researching challenging issues that affect usability and accessibility and effectively collaborating with my team.</p>
            <p>Feel free to contact me via email: <span><a id='email' href="mailto:micheal@zestylimones.com">micheal@zestylimones.com</a></span></p>
        </div>
        <form className="contact-form">
          <label>
            Name:
            <input type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
          </label>
          <label>
            email:
            <input type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </label>
          <label>
            message:
            <textarea name="message" id="" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} required/>
          </label>
          <input type="submit" name="submit" id="" value='Submit' />
        </form>
      </div>
      
    </div>
  );
}

export default Contact;