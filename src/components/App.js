import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} /> {/* Pass data as props */}
      <About bio={user.bio} links={user.links} /> {/* Pass bio and links as props */}
    </div>
  );
}

export default App;






