import { createContext, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";

export const AllData = createContext([]);

const Layout = () => {
  const loaderData = useLoaderData();
  const [data, setData] = useState(loaderData);

  const handleSearch = cat => {
    const filteredData = loaderData.filter(item => item.category.trim().toLowerCase().includes(cat.trim().toLowerCase()));
    setData(filteredData);
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
