import "./contact.scss"

export default function Contact() {
    const handleSubmit = (e)=> {
        e.preventDefault();
    }
    return (
        <div className = "contact" id = "contact">
            <h2>Contact.</h2>
            <form onSubmit = { handleSubmit }>
                <input type = "text" placeholder = "Email"/>
                <textarea placeholder = "Message" ></textarea>
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}
