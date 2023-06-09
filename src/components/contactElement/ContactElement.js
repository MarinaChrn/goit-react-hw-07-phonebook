import { StyledButton, StyledElement } from "./ContactElement.styled";
import PropTypes from 'prop-types';
import { useDispatch} from "react-redux";
import { deleteContact } from "operations";

export const ContactElement = ({contact})=> {
    
    const dispatch = useDispatch();

    const handleDeleteContact =(id)=>{
        dispatch(deleteContact(id));
    }

        return (
            <StyledElement id={contact.id}>
                <p>{contact.name}</p>
                <p>{contact.number}</p>
                <StyledButton type="button" onClick={(event)=>{handleDeleteContact(contact.id)}}>Delete</StyledButton>
            </StyledElement>
        )
}


ContactElement.propTypes = {
    contact: PropTypes.object.isRequired,
}