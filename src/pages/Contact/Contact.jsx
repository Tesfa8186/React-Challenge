import React, {useState} from 'react';
import css from './Contact.module.css';


 function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleInputChange = (e) => {
    const { target } = e
    const inputType = target.name
    const inputValue = target.value

    if (inputType === "name") {
      setName(inputValue)
      setError('')
      setSuccess('')
    } else if (inputType === "email") {
      setEmail(inputValue)
      setError('')
      setSuccess('')
    } else {
      setMessage(inputValue)
      setError('')
      setSuccess('')
    }
  }

  const handleBlurChange = (e) => {
    const { target } = e
    const inputType = target.name
    const inputValue = target.value
    
    if (inputType === "name") { 
       if (!inputValue.length) {
        setSuccess('')
        setError("Please enter your name")
       }
    } else if (inputType === "message") {
      if (!inputValue.length) {
        setSuccess('')
        setError("Please include a message")
      }
    } else {
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,8}$/.test(inputValue)) {
        setSuccess('')
        setError("Please enter a valid email address")
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.length || !message.length || (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,8}$/.test(email))) {
      setError("Please enter valid details.")
    } else {
      setName('')
      setEmail('')
      setMessage('')
      setError('')
      setSuccess('Your message has been sent successfully. Thank you!')
    }
  }

    return (
      <main className={`container align-item center s12`}>
        <h1>Contact Me</h1>
        <a href="mailto:tesfa1978@gmail.com"><h4>tesfa1978@gmail.com - 0401 628 951</h4></a>
        <div className={css.formDiv}>
          <form className={`container ${css.contactForm}`} onSubmit={handleSubmit}>
            <div className="">
              <div className="">
                <label className={`align-text left black-text ${css.labelText}`} htmlFor="name">Name:</label>
                <input id="name" type="text" className='black-text' value={name} name='name' onChange={handleInputChange} onBlur={handleBlurChange}/>
              </div>
            </div>
            <div className="">
              <div className="">
                <label className={`align-text left black-text ${css.labelText}`} htmlFor="email">Email:</label>
                <input id="email" type="email" className='black-text' value={email} name='email' onChange={handleInputChange} onBlur={handleBlurChange}/>
              </div>
            </div>
            <div className="">
              <div className="">
                <label className={`align-text left black-text ${css.labelText}`} htmlFor="message">Your Message:</label>
                <textarea rows="14" id="message" className={`black-text ${css.textArea}`} value={message} name='message' onChange={handleInputChange} onBlur={handleBlurChange}></textarea>
              </div>
            </div>
            {error && (
            <div>
              <p className={`${css.errorText}`}>{error}</p>
            </div>
            )}
            <div>
              <button className="btn green white-text rounded" type="submit">Submit</button>
            </div>
          </form>
          {success && (
            <div>
              <p className={`${css.successText}`}>{success}</p>
            </div>
            )}
        </div>
      </main>
    );
}

export default Contact;