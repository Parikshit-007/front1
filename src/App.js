import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Patient/Home";
import Appointment from "./pages/Appointment";
import Doctor from "./pages/Doctor/Doctor";
import Inventory from "./pages/Inventory/Inventory";
import Pharmacy from "./pages/Pharmacy/Pharmacy";
import Report from "./pages/Report";
import OPD from "./pages/Patient/OPD";
import IPD from "./pages/Patient/IPD";
import IPD_Form from "./pages/Patient/IPD_Form";
import OPD_New from "./pages/Patient/OPD_New";
import Patient_Detail from "./pages/Patient/Patient_Detail";
import Add_Patient from "./pages/Patient/Add_Patient";
import Patient_Profile from "./pages/Patient/Patient_Profile";
import Details from "./pages/Doctor/Details";
import Add_Doctor from "./pages/Doctor/Add_Doctor";
import Records from "./pages/Records/Records";
import RecordsPage2 from "./pages/Records/RecordsPage2";
import EditIPD from "./pages/Patient/EditIpd";
import EditPatient from "./pages/Patient/EditPatient";
import Add_Records from "./pages/Pharmacy/Add_Records";
import Medicines from "./pages/Pharmacy/Medicines";
import Add_Medicines from "./pages/Pharmacy/Add_Medicines";
import Add_Medicine_Inventory from "./pages/Inventory/Add_Medicine_Inventory";
import Equipment from "./pages/Inventory/Equipment";
import Add_Equipment from "./pages/Inventory/Add_Equipment";
import Accounts from "./pages/Accounts/Accounts";
import Account_Profile from "./pages/Accounts/Account_Profile";
import PatientGraph from "./pages/PatientGraph";
import Signin from "./pages/Signin";
import Login from "./pages/Login";

const App = () => {
  const loggedIn = !!localStorage.getItem("token"); // Check if user is logged in

  return (
    <Router>
      {" "}
      {loggedIn && (
        <Sidebar>
          <Routes>
            {" "}
            {/* Protected routes */} <Route path="/" element={<Home />} />{" "}
            <Route path="/Appointment" element={<Appointment />} />{" "}
            <Route path="/Doctor" element={<Doctor />} />{" "}
            <Route path="/Inventory" element={<Inventory />} />{" "}
            <Route path="/Pharmacy" element={<Pharmacy />} />{" "}
            <Route path="/Report" element={<Report />} />{" "}
            <Route path="/Patient/OPD" element={<OPD />} />{" "}
            <Route path="/Patient/IPD" element={<IPD />} />{" "}
            <Route path="/Patient/IPD/Add_Patient" element={<IPD_Form />} />{" "}
            <Route path="/Patient/OPD/AddPatient" element={<OPD_New />} />{" "}
            <Route
              path="/Patient/Patient_Details"
              element={<Patient_Detail />}
            />{" "}
            <Route path="/PatientGraph" element={<PatientGraph />} />{" "}
            <Route
              path="/Patient/Patient_Details/Add_Patient"
              element={<Add_Patient />}
            />{" "}
            <Route path="/Patient/IPD/EditIPD/:pk" element={<EditIPD />} />{" "}
            <Route
              path="/Patient/Patient_Details/EditPatient/:pk"
              element={<EditPatient />}
            />{" "}
            <Route
              path="/Patient/Patient_Details/:PatientID"
              element={<Patient_Profile />}
            />{" "}
            <Route path="/Doctor/Details" element={<Details />} />{" "}
            <Route path="/Doctor/Details/Add_Doctor" element={<Add_Doctor />} />{" "}
            <Route path="/Records" element={<Records />} />{" "}
            <Route path="/Records/Recodrsupload" element={<RecordsPage2 />} />{" "}
            <Route path="/Pharmacy/Add_Records" element={<Add_Records />} />{" "}
            <Route path="/Pharmacy/Medicines" element={<Medicines />} />{" "}
            <Route
              path="/Pharmacy/Medicines/Add_Medicines"
              element={<Add_Medicines />}
            />{" "}
            <Route path="/Accounts" element={<Accounts />} />{" "}
            <Route
              path="/Accounts/Account_Profile"
              element={<Account_Profile />}
            />{" "}
          </Routes>{" "}
        </Sidebar>
      )}{" "}
      {/* Redirect to login page if not logged in */}{" "}
      {!loggedIn && (
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />} />{" "}
          <Route path="/Login" element={<Login />} />{" "}
          <Route path="/Signin" element={<Signin />} />{" "}
        </Routes>
      )}{" "}
    </Router>
  );
};

export default App;
