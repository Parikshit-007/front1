import React, { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OPD_New = () => {
  const [patient_id, setPatientId] = useState("");
  const [doctor_id, setDoctorId] = useState("");
  // const [department, setDepartment] = useState('');
  const [patientData, setPatientData] = useState({});
  const [doctorData, setDoctorData] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    department: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, department: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", { patient_id, doctor_id, formData });

    try {
      // Use Axios to send a POST request with the form data
      const response = await axios.post(
        "http://127.0.0.1:8000/opd/api/opd-register/",
        { patient_id, doctor_id, department: formData.department }
      );
      console.log("API Response:", response.data);
      // Add logic to handle the API response, if needed
      navigate("/Patient/OPD");
    } catch (error) {
      console.error("API Error:", error);
      console.log("Error response data:", error.response?.data);
      // Add logic to handle the API error, if needed
    }
  };

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        if (patient_id) {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/patient/api/patients/${patient_id}/`
          );
          setPatientData(response.data);
        }
      } catch (error) {
        console.error("Error fetching patient data:", error);
        console.log("Error response data:", error.response?.data);
      }
    };

    const fetchDoctorData = async () => {
      try {
        if (doctor_id) {
          const response = await axios.get(
            `http://127.0.0.1:8000/doctor/api/doctors/${doctor_id}/`
          );
          setDoctorData(response.data);
        }
      } catch (error) {
        console.error("Error fetching doctor data:", error);
        console.log("Error response data:", error.response?.data);
      }
    };

    fetchPatientData();
    fetchDoctorData();
  }, [patient_id, doctor_id]);

  return (
    <div className="">
      <Breadcrumb />
      <fieldset>
        <form
          onSubmit={handleSubmit}
          className="m-0 w-[1110px] bg-theme-white-default overflow-hidden flex flex-col  py-6 pr-[22px] pl-[26px] box-border gap-[30px] mt-5 "
        >
          <div className="backdrop-blur-[5px]  flex   max-w-full items-stretch justify-between gap-5  pr-1 py-1.5   rounded-xl">
            <input
              className=" text-gray-500 border-transparent text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 w-[500px] rounded-md items-start max-md:max-w-full max-md:pr-5"
              type="text"
              placeholder="Enter patient ID"
              value={patient_id}
              onChange={(e) => setPatientId(e.target.value)}
            />
          </div>

          <div className="backdrop-blur-[5px]  flex   max-w-full items-stretch justify-between gap-5  pr-1 py-1.5  rounded-xl">
            <input
              className=" text-gray-500 border-transparent text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 w-[500px] rounded-md items-start max-md:max-w-full max-md:pr-5"
              type="text"
              placeholder="Enter doctor ID"
              value={doctor_id}
              onChange={(e) => setDoctorId(e.target.value)}
            />
          </div>

          <div className="backdrop-blur-[5px]  flex   max-w-full items-stretch justify-between gap-5  pr-1 py-1.5  rounded-xl">
            <input
              className=" text-gray-500 border-transparent text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 w-[500px] rounded-md items-start max-md:max-w-full max-md:pr-5"
              type="text"
              placeholder="Enter department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-sky-500 h-10 w-28 rounded-xl  pt-1 mt-5"
          >
            Submit
          </button>
        </form>
      </fieldset>

      {/* Display fetched patient and doctor data */}
      <div>
        <h2>Patient Data:</h2>
        <pre>{JSON.stringify(patientData, null, 2)}</pre>
      </div>

      <div>
        <h2>Doctor Data:</h2>
        <pre>{JSON.stringify(doctorData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default OPD_New;
