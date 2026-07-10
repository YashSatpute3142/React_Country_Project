export const Contact = () => {
    return (
        <section className="section-contact">
            <h2 className="container-title">
                COntact Us
            </h2>
            <form action="">
                <input 
                type="text"
                required 
                className="form-control"
                autoComplete="false"
                placeholder="Enter Your Name"
                name="usename" />

                <input 
                type="email"
                className="form-control"
                name="email"
                required
                autoComplete="false"
                placeholder="Enter Your Email"
                />

                <textarea 
                name="message" 
                className="form-control"
                required
                autoComplete="false"
                rows="10"
                placeholder="Enter Your Message"
                ></textarea>
            </form>
        </section>
    )
}