import { useState } from "react";

export function ContactForm({contact, onChange}) {
    return (
        <>
            <h1>Details</h1>
            <hr />
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" 
                value={contact.name}
                onChange={(e) => onChange({...contact, name: e.target.value})}
            />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" 
                value={contact.mail}
                onChange={(e) => onChange({...contact, name: e.target.value})}
            />
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" 
                value={contact.phone}
                onChange={(e) => onChange({...contact, name: e.target.value})}
            />
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" 
                value={contact.address}
                onChange={(e) => onChange({...contact, name: e.target.value})}
            />
        </>
    )

}