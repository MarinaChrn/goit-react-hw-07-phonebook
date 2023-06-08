import { ContactElement } from "components/contactElement/ContactElement";
import { StyledList } from "./ContactList.styled";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

export const ContactList =({contacts})=> {
    const isLoading = useSelector(state=> state.contacts.isLoading)
    const isError = useSelector(state=> state.contacts.error)

    if (isLoading===true) {
        return (
            <p>Loading...</p>
        )
    }

    if (isLoading!==true&&isError===null&&contacts) {
    return (
        <StyledList>
            {contacts.map((contact) => (
                <ContactElement contact={contact} key={contact.id}/>
            ))}
        </StyledList>
    )}
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
}