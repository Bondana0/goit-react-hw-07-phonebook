import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations.js';
import { selectIsLoading } from '../redux/selectors';
import { StyledContainer, H1, H2 } from './Container/Container';

const theme = {};

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <GlobalStyle />
        <H1>Phonebook</H1>
        <ContactForm btn="Add contact" />
        <H2>Contacts</H2>
        <Filter />
        {isLoading && <p>Loading...</p>}
        <ContactList />
      </StyledContainer>
    </ThemeProvider>
  );
};
