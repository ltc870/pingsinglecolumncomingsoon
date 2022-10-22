import React from "react";
import Form from "./Form";

export default function Main(props) {
    return (
        <main className="container">
            <section className="main-container">
                <img className="main-logo" src={props.logo} alt="logo" />
                <h1 className="main-title">
                    We are launching{" "}
                    <span className="main-title-accent">soon!</span>
                </h1>
                <p className="main-text">Subscribe and get notified</p>

                <Form />
            </section>

            <figure className="image-section">
                <img
                    className="image"
                    src={props.mainImage}
                    alt="dashboard image"
                />
            </figure>

            <article className="info-section">
                <figure className="social-media-section">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </figure>

                <section className="copyright-section">
                    <h2 className="copyright">
                        &copy; Copyright Ping. All rights reserved.
                    </h2>
                </section>
            </article>
        </main>
    );
}
