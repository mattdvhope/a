import React, { useState, useEffect } from "react";
import PageTemplate from "../components/PageTemplate"


const Contact = () => {

  useEffect(() => { // This for Luke's backend!!!!!

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
    }).catch(function(error) {
      console.log(error);
    });

  }, []);


  return (
    <PageTemplate
      header="ติดต่อเรา"
      title="ติดต่อเรา"
      pageType="contact"
    />
  )

}


export default Contact