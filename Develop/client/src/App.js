import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import SavedBooks from './pages/SavedBooks';
import SearchBooks from './pages/SearchBooks';



const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<SavedBooks />}
            />
            <Route 
              path="/search" 
              element={<SearchBooks />}
            />
            
            
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
