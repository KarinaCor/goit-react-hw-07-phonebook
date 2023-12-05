import { useDispatch, useSelector } from 'react-redux';
import * as SC from './App.styled';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { selectContactsList } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactOperation/contactsOperation';


export const App = () => {
  const contacts = useSelector(selectContactsList);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
  
  return (
    <SC.Wrapper>
      <SC.MainTitle>Phonebook</SC.MainTitle>
      <ContactForm />

      <SC.Title>Contacts</SC.Title>

      {contacts?.length !== 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <SC.Descr>Phonebook is empty</SC.Descr>
      )}
    </SC.Wrapper>
  );
};
