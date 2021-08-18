import "./contact.scss"
import { useState } from "react";

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className = "contact" id = "contact">
            <h2>Contact.</h2>
            <form onSubmit = { handleSubmit }>
                <input type = "text" placeholder = "Email"/>
                <textarea placeholder = "Message" ></textarea>
                <button type = "submit">Submit</button>
                {message && <span> Your message has been sent! </span>}
            </form>
        </div>
    )
}
