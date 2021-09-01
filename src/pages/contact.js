import React, { useState, useEffect } from "react";
import loadable from '@loadable/component'

import Cookies from 'js-cookie' // REMOVE THIS PACKAGE SOON!!!!!!!

import { Link } from "gatsby"
import Layout from "../components/layout"

const SEO = loadable(() => import('../components/seo'));

const Contact = () => {

  useEffect(() => {
    const csrftoken = Cookies.get('csrftoken');

    let _data = {
      userid: "user-7j2kgE5H8LGYpRdT8KmGbtUSC"
    }

    const request = new Request(
      'https://e2doix.herokuapp.com/feed',
      {headers: {'X-CSRFToken': csrftoken}}
    );
    fetch(request, {
      method: 'POST',
      body: JSON.stringify(_data)
    }).then(function(response) {
      console.log(response);
      console.log(csrftoken);
    }).catch(function(error) {
      console.log(error);
    });

  }, []);

  return (
    <Layout header="Contact Us">
      <SEO title="Contact us" />
      <br/>
      <br/>
      <br/>
      <h1>Contact Us!</h1>
      <br/>
      <br/>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Contact