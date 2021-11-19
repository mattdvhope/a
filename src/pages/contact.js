import React, { useEffect } from "react";
import PageTemplate from "../components/PageTemplate"


const Contact = () => {

  useEffect(() => { // This for Luke's backend!!!!!

    let _data = {
      userid: "user-Eh96rTPjUVvCYhNXXGseFStQ7"
    }

    const request = new Request(
      'https://e2doix.herokuapp.com/feed' //,
      // {headers: {'X-CSRFToken': csrftoken}}
    );
    fetch(`https://e2doix.herokuapp.com/feed`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
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