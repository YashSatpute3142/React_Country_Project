export const Contact = () => {


    const handleFormSubmit = (formData) => {
        console.log(formData.entries());
        const formInputData = Object.fromEntries(formData.entries())
        console.log(formInputData);
        
        
    }

    return (
        <section className="section-contact">
            <h2 className="container-title">
                Contact Us
            </h2>
            <div className="contact-wrapper container">
            <form action={handleFormSubmit}>
                <input 
                type="text"
                required 
                className="form-control"
                autoComplete="off"
                placeholder="Enter Your Name"
                name="usename" />

                <input 
                type="email"
                className="form-control"
                name="email"
                required
                autoComplete="off"
                placeholder="Enter Your Email"
                />

                <textarea 
                name="message" 
                className="form-control"
                required
                autoComplete="off"
                rows="10"
                placeholder="Enter Your Message"
                ></textarea>

                <button type="submit" value="send">Send</button>
            </form>

            </div>
        </section>
    )
}