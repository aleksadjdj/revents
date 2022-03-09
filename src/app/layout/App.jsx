import { useLocation } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventForm from '../../features/eventForm/EventForm';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import Sandbox from '../../features/sandbox/Sandbox';
import ModalManager from '../common/modals/ModalManager';

export default function App() {
  const {key} = useLocation();

  return (
    <>
    <ModalManager />
    <Route exact path='/' component={HomePage} />
    <Route path={'/(.+)'} render={()=> (
        <>
          <NavBar />
          <Container className='main'>
            <Route exact path='/events' component={EventDashboard} />
            <Route exact path='/sandbox' component={Sandbox} />
            <Route path='/events/:id' component={EventDetailedPage} />
            <Route path={['/create-event', '/manage/:id']} component={EventForm} key={key} />
          </Container>
        </>
      )} 
    />
    </>
  );
}
