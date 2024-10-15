import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling


const FeedbackForm = () => {
/* Input components: 1) input box for username, 2) input box for user email ID, 3) input box for user feedback */
  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input 
          type="text"
          name="name" 
          placeholder="Your Name">
        </input>

        <input 
          type="email" 
          name="email" 
          placeholder="Your Email">
        </input>

        <textarea 
          name="feedback" 
          placeholder="Your Feedback">
        </textarea>

        <button type="submit">Submit Feedback</button>
   
      </form>
    </>
  );
};

export default FeedbackForm;
