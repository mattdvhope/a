import React, { useEffect } from "react";

import axios from 'axios';

import Cookies from 'js-cookie' // REMOVE THIS PACKAGE SOON!!!!!!!

import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Contact = () => {

  useEffect(() => {
    const instance = axios.create({
      baseURL: 'https://e2doix.herokuapp.com/feed/',
      timeout: 1000,
      headers: {'X-CSRFToken': csrftoken} // 'X-CSRFToken': csrftoken
    });

    // const csrftoken = getCookie('csrftoken');
    const csrftoken = Cookies.get('csrftoken');

    console.log(csrftoken);
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
            // invoke functions here
          }}
        >Click here to go to Django</button>
      </h1>
      <br/>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Contact