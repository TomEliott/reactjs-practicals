import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../../tailwind.css';

import { NotesContextProvider } from "../../contexts/NotesContext";

const NoRouteMatchPage = lazy(() => import('./NoRouteMatchPage')); // No Route Match Page
const HomePage = lazy(() => import('../home/HomePage')); // Home Page
const NotesPage = lazy(() => import('../notes/NotesPage')); // Note Page

const history = createBrowserHistory();

const App = () => {
  return (
      <Router history={history}>
          <NotesContextProvider>
            <Suspense fallback={<div>loading...</div>}>
              <Switch>
                {/* Home  */}
                <Route exact path="/">
                  <HomePage />
                </Route>

                <Route path="/notes">
                  <NotesPage />
                </Route>

                {/* 404  */}
                <Route>
                  <NoRouteMatchPage />
                </Route>
              </Switch>
            </Suspense>
          </NotesContextProvider>
      </Router>
  );
};

export default App;