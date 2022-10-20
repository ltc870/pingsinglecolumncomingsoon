import React from "react";
import Form from "./Form";

export default function Main(props) {
    return (
        <div className="container">
            <main className="main-container">
                <img className="main-logo" src={props.logo} alt="logo" />
                <h1 className="main-title">
                    We are launching{" "}
                    <span className="main-title-accent">soon!</span>
                </h1>
                <p className="main-text">Subscribe and get notified</p>

                <Form />
            </main>

            <section className="image-section">
                <img
                    className="image"
                    src={props.mainImage}
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
