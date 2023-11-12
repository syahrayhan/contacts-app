/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ContactItem from "./ContactItem";

/* eslint-disable no-unused-vars */
function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          {...contact}
          id={contact.id}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ContactList;
