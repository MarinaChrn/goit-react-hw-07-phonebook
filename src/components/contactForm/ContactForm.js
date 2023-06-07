import { Formik } from "formik"
import { Form, StyledLabel, Field, StyledButton } from "./ContactForm.styled"
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from "react-redux";
import { change } from "redux/contacts/contactsSlice";

export const ContactForm = () => {
    const contacts = useSelector(state => state.contacts.array)
    const dispatch = useDispatch();

    const addContact = (contact) => {
        let arraysOfName=[];
        contacts.map(element=> (
            arraysOfName.push(element.name) 
        ));
        if (!arraysOfName.includes(contact.name)) {
        dispatch(change([...contacts, contact]));
        } else {
        alert(`${contact.name} is alredy in contacts`)
        }
    }

    return (
       <Formik 
        initialValues={{
            name:'',
            number:'',
        }}
        onSubmit={(contact, actions)=> {
            contact.id = nanoid();
            addContact(contact);
            actions.resetForm();
        }}
       >
        <Form>
            <StyledLabel>
                Name
                <Field name="name"
                pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                placeholder="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required/>
            </StyledLabel>
            <StyledLabel>
                Number
                <Field type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                placeholder="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required/>
            </StyledLabel>
            <StyledButton type="submit">Submit</StyledButton>
        </Form>

       </Formik>
    )
}