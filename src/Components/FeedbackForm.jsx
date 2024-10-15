import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

/* State initialization (formData): name, email and feedback = '' (empty stream)*/
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
});

/*event handler (handleChange) initialization. Updates are intialized (setFormData) */
const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]:value});
};

/*Submission button, confirmation message*/
const handleSubmit = (event) => {
  event.preventDefault();
  const confirmationMessage = `Name: ${formData.name} 
                              Email: ${formData.email} 
                              Feedback: ${formData.feedback}`;
  const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
    if (isConfirmed) {
      console.log('Submitting feedback:', formData); 
      setFormData({name: '', email: '', feedback: ''});
      alert('Thank you for your valuable feedback!'); }
};


/* Input components (attributes): 1) input box for username, 2) input box for user email ID, 3) input box for user feedback (<textarea>).
 handleChange caller (onChage) ist set
 handleSubmit caller ist set
 */
  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input 
          type="text"
          name="name" 
          placeholder="Your Name">
          value={formDate.name}
          onChage={handleChange}
        </input>

        <input 
          type="email" 
          name="email" 
          placeholder="Your Email">
          value={formDate.email}
          onChage={handleChange}
        </input>

        <textarea 
          name="feedback" 
          placeholder="Your Feedback">
          value={formDate.feedback}
          onChage={handleChange}
        </textarea>

        <button type="submit">Submit Feedback</button>
   
      </form>
    </>
  );
};

export default FeedbackForm;
