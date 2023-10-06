import PropTypes from 'prop-types';

import { useVisibleContacts } from 'components/hooks/useVisibleContacts';
import { ContactItem } from './Contact';




const Contacts = () => {
  
   
  
    const filteredContacts = useVisibleContacts()
    
 

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