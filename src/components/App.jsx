import { fetchContacts } from "operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "./contactForm/ContactForm";
import { ContactList } from "./contactList/ContactList";
import { FilterContacts } from "./filter/FilterContacts";
import { Layout } from "./GlobalStyles.styled";

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.searchValue)
  const contacts = useSelector(state => state.contacts.items)

  const getVisibleContacts=()=>{
      return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter))
  };

  useEffect(()=> {
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <FilterContacts/>
      <ContactList contacts={getVisibleContacts()}/> 
    </Layout>
  );
}