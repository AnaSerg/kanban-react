import React from 'react';
import Header from '../Header';
import HeaderArea from '../HeaderArea';
import Navigation from '../Navigation';
import Dashboard from '../Dashboard';
import Kanban from '../Kanban';
import Calendar from '../Calendar';
import Footer from '../Footer';
import { Route, Switch} from 'react-router-dom';

const MainPage = () => {

  return (
    <div className="page__container">
      <Header />
      <HeaderArea />
      <Navigation />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/kanban">
          <Kanban />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default MainPage;