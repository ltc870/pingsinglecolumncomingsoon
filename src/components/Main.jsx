export default function Main() {
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
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
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
