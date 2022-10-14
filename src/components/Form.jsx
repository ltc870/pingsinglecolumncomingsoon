import React from "react";

export default function Form() {
    const [email, setEmail] = React.useState("");

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleOnSubmit(event) {
        event.preventDefault();

        const mainErrorMsg = document.querySelector("#main-error-msg");
        const mainInput = document.querySelector("#main-input");
        const emailRegEx =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (mainInput.value.match(emailRegEx)) {
            alert("Thank You For Your Submission!! 😁");
            setEmail("");
        } else {
            mainErrorMsg.classList.add("active");
        }

        mainInput.addEventListener("input", () => {
            mainErrorMsg.classList.remove("active");
        });
    }

    return (
        <form className="main-form" onSubmit={handleOnSubmit}>
            <input
                id="main-input"
                className="main-input"
                type="text"
                placeholder="Your email address..."
                name="email"
                value={email}
                onChange={handleChange}
            />
            <p id="main-error-msg" className="main-error-msg">
                Please provide a valid email address
            </p>
            <button id="main-button" className="main-button">
                Notify Me
            </button>
        </form>
    );
}