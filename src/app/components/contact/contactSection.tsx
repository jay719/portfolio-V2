"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    // make this a submit form
    e.preventDefault();
    // You can add your form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };
  return (
    <div>
      <h2>Contact</h2>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
