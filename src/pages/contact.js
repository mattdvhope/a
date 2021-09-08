import React, { useState, useEffect } from "react";

import Cookies from 'js-cookie' // REMOVE THIS PACKAGE SOON!!!!!!!

import PageTemplate from "../components/PageTemplate"
import Menu from "../components/Menu/MenuApp";
import ContactApp from "../components/Contact/ContactApp";


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
    <ContactApp/>
  )

  // return (
  //   <PageTemplate
  //     header="Contact us"
  //     title="ติดต่อเรา"
  //     content="คุณสามารถติดต่อเราได้โดยคลิกที่ไอคอน Messenger ของเฟซบุ๊กที่ด้านล่างของเพจนี้ เราจะติดต่อกลับหาคุณในไม่ช้าค่ะ!"
  //   />
  // )
}

export default Contact