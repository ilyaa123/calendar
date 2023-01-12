import moment from 'moment';
import { useReducer } from 'react';
import './App.css';
import { Calendar } from './components/Calendar/Calendar';
import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';
import { initialState, ModalContext, reducer } from './context/modalContext';

function App() {
  moment.updateLocale('en', {week: {dow: 1}});
  
  const [ state, dispatchModal ] = useReducer(reducer, initialState)

  return (
    <Container>
      <Header />
      <ModalContext.Provider value={{state, dispatchModal}}>
        <Calendar />
      </ModalContext.Provider>
    </Container>
  );
}

export default App;
