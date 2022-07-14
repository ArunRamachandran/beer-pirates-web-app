import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { BrowserRouter } from 'react-router-dom'; 

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
        <BrowserRouter>
            <ContextProvider>
              <App />
            </ContextProvider>
        </BrowserRouter>
      </ApolloProvider>
  </React.StrictMode>
);
