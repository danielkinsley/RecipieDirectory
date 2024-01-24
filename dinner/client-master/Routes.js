import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Login";
import Home from "./home";
import RegistrationForm from "./Register";

export default function Routed() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<LoginForm />} />
                <Route path="/Register" element={<RegistrationForm />} />

            </Routes>
        </Router>
    )
}
