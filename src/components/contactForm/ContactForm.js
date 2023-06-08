import { Formik } from "formik"
import { Form, StyledLabel, Field, StyledButton } from "./ContactForm.styled"
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from "react-redux";

export const ContactForm = () => {
    const contacts = useSelector(state => state.contacts.items)
    const dispatch = useDispatch();

    const addContact = (contact, actions, i) => {
        let arraysOfName=[];
        contacts.map(element=> (
            arraysOfName.push(element.name) 
        ));
        if (!arraysOfName.includes(contact.name)) {
            dispatch(addContact(contact));
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
            addContact(contact, actions);
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