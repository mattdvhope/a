import React, { useState, useEffect } from "react";

import Cookies from 'js-cookie' // REMOVE THIS PACKAGE SOON!!!!!!!

import styled from "styled-components";
import Layout from "../components/layout"
import PageTemplate from "../components/PageTemplate"


const Contact = () => {

  useEffect(() => { // This for Luke's backend!!!!!
    const csrftoken = Cookies.get('csrftoken');

    let _data = {
      userid: "user-7j2kgE5H8LGYpRdT8KmGbtUSC"
    }

    const request = new Request(
      'https://e2doix.herokuapp.com/feed' //,
      // {headers: {'X-CSRFToken': csrftoken}}
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
    <Layout>
      <PageTemplate
        header="ติดต่อเรา"
        title="ติดต่อเรา"
        pageType="contact"
      />
    </Layout>
  )

}

export default Contact