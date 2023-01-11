import moment from 'moment';
import './App.css';
import { Calendar } from './components/Calendar/Calendar';
import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';

function App() {
  moment.updateLocale('en', {week: {dow: 1}});
  
  return (
    <Container>
      <Header />
      <Calendar />
    </Container>
  );
}

export default App;
