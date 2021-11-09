import React, {useState} from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

  return (
    <div>
      <h2>Contact Me</h2>
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
  );
}

export default Contact;