import { createContext, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

export const AllData = createContext([]);

const Layout = () => {
  const [data, setData] = useState([]);
  useEffect( () => {
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setData(data));
  }, []);

  return (
    <>
      <Header></Header>
      <AllData.Provider value={data}>
        <Outlet></Outlet>
      </AllData.Provider>
    </>
  );
};

export default Layout;
