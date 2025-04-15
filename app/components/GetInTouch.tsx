"use client";

import React, { useState } from "react";

const GetInTouch = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    botfield: "",
  });
  // Replace submitted state with submitStatus
  const [submitStatus, setSubmitStatus] = useState("idle"); // "idle", "sending", "success", "error"
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = form;

    // Honeypot triggered (bot filled hidden field)
    if (form.botfield) return false;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (message.length < 10) {
      setError("Your message should be at least 10 characters.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Set sending state
    setSubmitStatus("sending");

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      const res = await fetch("https://formspree.io/f/xovebqvn", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        setForm({ name: "", email: "", message: "", botfield: "" });
        setSubmitStatus("success");
        setError("");

        // Reset status after 3 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      } else {
        setError("Something went wrong. Please try again later.");
        setSubmitStatus("error");

        // Reset status after 3 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      setSubmitStatus("error");
      console.log(err);

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }
  };

  return (
    <section className="max-w-[510px] py-[70px]">
      <h2 className="font-semibold text-black text-2xl leading-[110%]">
        Get in touch
      </h2>
      <p className="text-primary font-normal text-base leading-[1.4em] mt-3 mb-6">
        I’m always interested in exploring new opportunities, collaborating, or
        exchanging ideas with like-minded individuals. Feel free to book a call
        or email me if you&apos;d like to see my portfolio deck or to discuss a
        potential project.
      </p>

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field (hidden from humans) */}
        <input
          type="text"
          name="botfield"
          className="hidden"
          value={form.botfield}
          onChange={handleChange}
          autoComplete="off"
          aria-label="Do not fill this field" // Added for accessibility checkers, though field is hidden
        />

        <div className="flex gap-5 flex-col sm:flex-row">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="flex-1 p-2.5 rounded-[14px] border border-black/10 placeholder:text-[#999999] text-secondary font-medium text-sm leading-[1.2em] h-[47px] bg-[#bbbbbb]/15 focus:outline-none focus:border-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="flex-1 p-2.5 rounded-[14px] border border-black/10 placeholder:text-[#999999] text-secondary font-medium text-sm leading-[1.2em] h-[47px] bg-[#bbbbbb]/15 focus:outline-none focus:border-blue-400"
          />
        </div>
        <textarea
          name="message"
          placeholder="Write your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full flex-1 p-2.5 rounded-[14px] border border-black/10 placeholder:text-[#999999] text-secondary font-medium text-sm leading-[1.2em] min-h-[148px] bg-[#bbbbbb]/15 focus:outline-none focus:border-blue-400"
        />
        <button
          type="submit"
          disabled={submitStatus === "sending"}
          className={`w-full h-[47px] rounded-[14px] transition ease-in-out duration-200 flex items-center justify-center text-base font-medium tracking-[-0.02em] leading-[1.2em] text-white
            ${
              submitStatus === "sending"
                ? "bg-secondary opacity-50 cursor-not-allowed"
                : ""
            }
            ${submitStatus === "success" ? "bg-[#178d00]" : ""}
            ${submitStatus === "error" ? "bg-[#cf001f]" : ""}
            ${
              submitStatus === "idle"
                ? "bg-secondary hover:bg-[#333333] cursor-pointer"
                : ""
            }
          `}
        >
          {submitStatus === "sending" ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : submitStatus === "success" ? (
            "Thank you!"
          ) : submitStatus === "error" ? (
            "Something went wrong"
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </section>
  );
};

export default GetInTouch;
