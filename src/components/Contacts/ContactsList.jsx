import PropTypes from 'prop-types';
// import { useVisibleContacts } from 'components/hooks/useVisibleContacts';
import { ContactItem } from './Contact';
import { selectVisibleContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';




const Contacts = () => {
  
   
  
    const filteredContacts = useSelector(selectVisibleContacts)
    
 

    return (<ul>
        {filteredContacts.map(contact => {
            return (
                <ContactItem  key={contact.id} contact={contact}/>)
        })}
    </ul>)
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object.isRequired)
}

export default Contacts