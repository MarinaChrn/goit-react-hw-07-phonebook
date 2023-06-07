import { fetchContacts } from "api";
import { useSelector } from "react-redux";
import { ContactForm } from "./contactForm/ContactForm";
import { ContactList } from "./contactList/ContactList";
import { FilterContacts } from "./filter/FilterContacts";
import { Layout } from "./GlobalStyles.styled";

export const App = () => {
  const filter = useSelector(state => state.filter.searchValue)
  const contacts = useSelector(state => state.contacts.array)

  const getVisibleContacts=()=>{
      fetchContacts()
      return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter))
  };

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