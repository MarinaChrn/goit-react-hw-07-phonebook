import { StyledButton, StyledElement } from "./ContactElement.styled";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { change } from "redux/contacts/contactsSlice";

export const ContactElement = ({contact})=> {
    const contacts = useSelector(state => state.contacts.array);
    const dispatch = useDispatch();


    const deleteContact =()=>{
        dispatch(change(contacts.filter(element=> element.id!==contact.id)));
    }

    return (
        <StyledElement id={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <StyledButton type="button" onClick={(event)=>{deleteContact(contact.id)}}>Delete</StyledButton>
        </StyledElement>
    )
}

ContactElement.propTypes = {
    contact: PropTypes.object.isRequired,
}