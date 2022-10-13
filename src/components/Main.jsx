import React from "react";

export default function Main() {
    const [formData, setFormData] = React.useState({
        email: "",
    });

    function handleChange(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            };
        });
    }
    console.log(formData);
    return (
        <div>
            <main className="main-container">
                <img
                    className="main-logo"
                    src="src/images/logo.svg"
                    alt="logo"
                />
                <h1 className="main-title">
                    We are launching{" "}
                    <span className="main-title-accent">soon!</span>
                </h1>
                <p className="main-text">Subscribe and get notified</p>

                <form className="main-form">
                    <input
                        className="main-input"
                        type="text"
                        placeholder="Your email address..."
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <p className="main-error-msg">
                        Please provide a valid email address
                    </p>
                    <button className="main-button">Notify Me</button>
                </form>
            </main>

            <section className="image-section">
                <img
                    className="image"
                    src="src/images/illustration-dashboard.png"
                    alt="dashboard image"
                />
            </section>

            <div className="info-section">
                <section className="social-media-section">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </section>

                <section className="copyright-section">
                    <p className="copyright">
                        &copy; Copyright Ping. All rights reserved.
                    </p>
                </section>
            </div>
        </div>
    );
}
