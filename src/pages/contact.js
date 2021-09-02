import React, { useState, useEffect } from "react";

import Cookies from 'js-cookie' // REMOVE THIS PACKAGE SOON!!!!!!!

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
    <PageTemplate
      header="Contact us"
      title="ติดต่อเรา"
      content="You can contact us by clicking on the Messenger Icon on the bottom of this page.  We will write back to you soon!"
    />
  )
}

export default Contact