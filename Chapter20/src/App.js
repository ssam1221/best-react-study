import React, { Suspense } from "react";

import { Route, Switch } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
// import NewQuote from './pages/NewQuotes';
// import QuoteDetail from './pages/QuoteDetail';
// import Layout from './pages/Layout';
// import NotFound from './pages/NotFound';

const NewQuote = React.lazy(() => { import(`./pages/NewQuotes`); });
const QuoteDetail = React.lazy(() => { import(`./pages/QuoteDetail`); });
const Layout = React.lazy(() => { import(`./pages/Layout`); });
const NotFound = React.lazy(() => { import(`./pages/NotFound`); });


function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="centered">Loading...</div>}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
