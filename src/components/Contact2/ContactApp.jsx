import React from "react"
import Contact from "./ContactComponents/Contact"

function ContactApp({ pageType }) {
  return (
    <Contact
      title={pageType === "contact" ? "ติดต่อเรา" : "เกี่ยวกับเรา"}
      text1={
        pageType === "contact"
          ? "มาแชทกับเรา! เราต้องการได้ยินจากคุณ!"
          : "เราได้สร้างพื้นที่เว็บสำหรับผู้ที่ต้องการเรียนรู้เพิ่มเติมเกี่ยวกับพระเยซูคริสต์"
      }
      messengerLogo="https://anima-uploads.s3.amazonaws.com/projects/616543403583a3b2690a0d78/releases/6165436940305093f6f7c5e9/img/messenger@2x.png"
      chat="แชท"
    />
  )
}

export default ContactApp
