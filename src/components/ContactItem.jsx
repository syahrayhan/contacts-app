/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import DeletedButton from "./DeletedButton";

function ContactItem({ imageUrl, name, tag,id, onDelete }) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeletedButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default ContactItem;
