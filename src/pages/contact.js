import React, { useState, useEffect } from "react";

import axios from 'axios';

import Cookies from 'js-cookie' // REMOVE THIS PACKAGE SOON!!!!!!!

import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Contact = () => {

  const [instance, setInstance] = useState(null);
  const [params, setParams] = useState(null);

  useEffect(() => {
    setInstance(
      axios.create({
        baseURL: 'https://e2doix.herokuapp.com',
        timeout: 1000,
        headers: {'X-CSRFToken': csrftoken} // 'X-CSRFToken': csrftoken
      })
    );

    const csrftoken = Cookies.get('csrftoken');

    console.log(csrftoken);

    const p = new URLSearchParams();
    p.append('userid', 'user-7j2kgE5H8LGYpRdT8KmGbtUSC');
    setParams(p)

  }, []);

  return (
    <Layout header="Contact Us">
      <Seo title="Contact us" />
      <br/>
      <br/>
      <br/>
      <h1>Contact Us!</h1>
      <br/>
      <br/>
      <h1>
        <button
          onClick={() => {
            console.log(instance);
            instance.post('/feed', params);
          }}
        >Click here to go to Django</button>
      </h1>
      <br/>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Contact