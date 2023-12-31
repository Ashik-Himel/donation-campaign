import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Donation from "./pages/Donation";
import Statistics from "./pages/Statistics";
import DonationDetails from "./pages/DonationDetails";
import Error from "./pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    loader: () => fetch('/data.json'),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json'),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/details/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/data.json')
      },
    ],
  },
]);
