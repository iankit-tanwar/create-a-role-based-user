'use client'
import { redirect } from "next/navigation";
import { Router } from "next/router";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [title, setTitle] = useState('Login System');
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    role: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update the payload when the role is changed
    setPayload({
      ...payload,
      [name]: value
    });
  }

  useEffect(() => {
    // Set email and password values based on the selected role
    if (payload.role === "Admin") {
      setPayload({
        ...payload,
        email: "admin@gmail.com",
        password: "adminPassword"
      });
    } else if (payload.role === "Reseller") {
      setPayload({
        ...payload,
        email: "reseller@gmail.com",
        password: "resellerPassword"
      });
    } else if (payload.role === "AccountManager") {
      setPayload({
        ...payload,
        email: "accountmanager@gmail.com",
        password: "accountmanagerPassword"
      });
    } else if (payload.role === "EndUser") {
      setPayload({
        ...payload,
        email: "enduser@gmail.com",
        password: "enduserPassword"
      });
    }
  }, [payload.role]);

  const submitData = () => {
    console.log(payload); // Log the payload, including the selected role, email, and password

    if (payload.role === "Admin") {
    window.location.href ="/systemadmin/dashboard";
    } else if (payload.role === "Reseller") {
      window.location.href ="/reseller/dashboard";
    } else if (payload.role === "AccountManager") {
      window.location.href ="/accountmanager/dashboard";
    } else if (payload.role === "EndUser") {
      window.location.href ="/enduser/dashboard";
    }
  }

  return (
    <div className='container d-flex justify-content-center'>
      <div className="card mt-5 col-6">
        <div className="card-header text-center">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role</label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="role"
                value={payload.role}
                onChange={handleChange}
              >
                <option value="" disabled>Select Your role</option>
                <option value="Admin">Admin</option>
                <option value="Reseller">Reseller</option>
                <option value="AccountManager">AccountManager</option>
                <option value="EndUser">EndUser</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={payload.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={payload.password}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="card-footer text-body-secondary text-center">
          <button type="submit" className="btn btn-primary" onClick={submitData}>Submit</button>
        </div>
      </div>
    </div>
  );
}
