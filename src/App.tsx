import React from "react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Header, Main, Nav } from "./components";

import "./App.css";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <main className="app section__padding">
        <Header />
        <Nav />
        <Main />
      </main>
    </QueryClientProvider>
  );
}

export default App;
