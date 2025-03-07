import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Nav from "./Pages/Nav";
import Profile from "./Pages/Profile";
import { useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
export const ProfileContext = createContext();

function App() {
  const [username, setUserName] = useState("saeed");
  const client = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false }, mutations: {} },
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <ProfileContext.Provider value={{ username, setUserName }}>
          <Router>
            <div>
              <h1>This is a header</h1>
              <Nav />
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile/:name?/:id?" element={<Profile />} />
              <Route path="*" element={<div>Not Found</div>} />
            </Routes>
            <div>
              <h2>This is footer</h2>
            </div>
          </Router>
        </ProfileContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
