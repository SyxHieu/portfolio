import '../styles/Contact.css';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section 
      className="contact"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Message" rows="5" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;
