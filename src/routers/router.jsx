import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Authlayout from "../Layout/Authlayout";
import Register from "../Pages/authPage/Register/Register";
import Login from "../Pages/authPage/Login/Login";
import Coverage from "../Pages/Coverage/Coverage";
import PrivateRouter from "./PrivateRouter";
import Rider from "../Pages/Rider/Rider";
import AddPersel from "../Pages/AddPersel/AddPersel";
import DashbordLayout from "../Layout/Dashbord/DashbordLayout";
import Mypercels from "../Pages/dashbord/Mypercels";
import Payment from "../Pages/dashbord/payment/Payment";
import PaymentSuccess from "../Pages/dashbord/payment/PaymentSuccess";
import PaymentCancled from "../Pages/dashbord/payment/PaymentCancled";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/rider",
        element: (
          <PrivateRouter>
            <Rider></Rider>
          </PrivateRouter>
        ),
      },
      {
        path: "/add-percel",
        element: (
          <PrivateRouter>
            <AddPersel></AddPersel>
          </PrivateRouter>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "coverage",
        element: <Coverage></Coverage>,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: Authlayout,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <DashbordLayout></DashbordLayout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "my-percels",
        Component: Mypercels,
      },
      {
        path: "payment/:percelId",
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancled",
        Component: PaymentCancled,
      },
    ],
  },
]);

export default router;
