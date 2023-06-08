import { StyledButton, StyledElement } from "./ContactElement.styled";
import PropTypes from 'prop-types';
import { useDispatch} from "react-redux";

export const ContactElement = ({contact})=> {
    
    const dispatch = useDispatch();

    const deleteContact =(id)=>{
        dispatch(deleteContact(id));
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