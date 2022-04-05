import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Clock from "./components/class/Clock/Clock";
import Content from "./components/Content";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Services from "./components/Services";
import Team from "./components/Team";
import Teams from "./components/Teams";

export const CountContext = createContext(0);

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={[count, setCount]} className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/teams/*" element={<Teams />}>
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/*" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="services" element={<Services />} />
          <Route path="content" element={<Content />} />
        </Route>
      </Routes>
    </CountContext.Provider>
  );
}

export default App;
