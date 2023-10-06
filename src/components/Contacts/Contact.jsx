import { Contact, DelBtn } from './Contacts.styled';
import { deleteContact } from 'redux/operations';
import {useDispatch } from 'react-redux';


export const ContactItem = ({ contact }) => {

  const dispatch = useDispatch();
    const { id, name, number } = contact;
     const deleteItem =()=> {

      dispatch(deleteContact(id))
    }

    return(<Contact  ><p>{name}: {number}</p>
               <DelBtn
                onClick={deleteItem}
               >Delete</DelBtn>
           </Contact>)
}

