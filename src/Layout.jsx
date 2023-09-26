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
  const handleSearch = cat => {
    fetch('/data.json')
    .then(res => res.json())
    .then(data => {
      const filteredData = data.filter(item => item.category.trim().toLowerCase() === cat.trim().toLowerCase());
      setData(filteredData);
    })
  }

  return (
    <>
      <Header handleSearch={handleSearch}></Header>
      <AllData.Provider value={data}>
        <Outlet></Outlet>
      </AllData.Provider>
    </>
  );
};

export default Layout;
