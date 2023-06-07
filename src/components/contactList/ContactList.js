import { ContactElement } from "components/contactElement/ContactElement";
import { StyledList } from "./ContactList.styled";
import PropTypes from 'prop-types';

export const ContactList =({contacts})=> {
    return (
        <StyledList>
            {contacts.map((contact) => (
                <ContactElement contact={contact} key={contact.id}/>
            ))}
        </StyledList>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
}