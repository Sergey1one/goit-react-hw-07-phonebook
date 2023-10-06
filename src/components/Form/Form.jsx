import React, { useState } from "react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { FormContacts, Input } from './Form.styled'
import { Formik } from 'formik';
import { useSelector,useDispatch } from "react-redux";
import { selectContacts } from "redux/selectors";
import { addContact } from "redux/operations";

 


export function FormContact() {
  
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts=useSelector(selectContacts)

    const nameInputId = nanoid();




    const onHandleChange = e => {
        const { name, value } = e.currentTarget
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                break;
        }
    }

    const onFormSubmit = e => {
        e.preventDefault();
       formSubmitHandler(name, number);
        resetInput();
    }
     const formSubmitHandler = (  name, number ) => {
    
    if (contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase())) {
      toast(`Contact with name ${name} -already in contact list`)
    }
    else if(contacts.find(
      contact => contact.number.toLowerCase() === number.toLowerCase())) {
      toast(`Contact with this ${number} number  -already in contact list`)
    }
    else if (name.trim() === '' || number.trim() === '') {
      toast(`Enter name or number phone correct !!`)
    }
    else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
        toast.error('💩 Enter the correct number phone!');
    }
    // else if (!/^[a-zA-Zа-яёА-ЯЁ\s\-]+$/.test(name)) {
    //    toast.error('💩 Enter the correct name!');
    //   }
    else {
    //   const contact = { id:nanoid(), name, number };
      
      dispatch(addContact({ name, number }))
    }
  }

const resetInput = () => {
    setName('');
    setNumber('');
  };

    return  (
            <Formik>
             <FormContacts onSubmit={onFormSubmit} >
            <label htmlFor={nameInputId}>
              Name </label>
            <Input
                        type="text"
                        id={nameInputId}
                name="name"
                value={name}
                onChange={onHandleChange}
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
                />
                 <label htmlFor={nameInputId}>
             Number </label>
                <Input
  type="tel"
                    name="number"
                    value={number}
                    onChange={onHandleChange}
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
        <button type="submit" >Add contact</button>
                </FormContacts>
                </Formik>
        )
}


