import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditIPD = () => {
  const { pk } = useParams(); // Extract the patient ID from the URL params
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // const [beds, setBeds] = useState([]);
  // const [wardno, setWardNo] = useState('');
  const [beds, setBeds] = useState([]);
  const [selectedWardId, setSelectedWardId] = useState("");
  const [wardsData, setWardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const [newname, setnewname] = useState("");

  //   const [formData, setFormData] = useState({
  //     patient: '',
  //     ward_type: '',
  //     bed_number: '',
  //     ward: '',
  //     admission_date: '',
  //   });
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/ipd/ipd-registrations/${pk}/`
        );
        console.log("res", response.data);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    console.log("Selected bed value:", event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/ipd/ipd-registrations/${pk}/`,
        formData
      );
      navigate("/Patient/ipd/");
    } catch (error) {
      console.error("Error updating patient data:", error);
      console.log("Error response data:", error.response?.data);
    }
  };
  useEffect(() => {
    const fetchBeds = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/ipd/beds/?ward_id=${selectedWardId}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("bed data:", data);
        setBeds(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (selectedWardId) {
      fetchBeds();
    } else {
      setBeds([]);
    }
  }, [selectedWardId]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        console.log("Fetching", formData.patient);
        if (formData.patient) {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/patient/api/patients/?search=${formData.patient}`
          );
          console.log(response.data[0]);
          setPatients(response.data[0]);
          setnewname(response.data[0].fullname);
        }
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };
    fetchPatients();
  }, [formData]);
  useEffect(() => {
    const fetchWards = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/ipd/wards/`
        );
        console.log("ward data:", response.data);
        setWardsData(response.data);
      } catch (error) {
        console.error("Error fetching wards:", error);
      }
    };

    fetchWards();
  }, []);
  //  formData.patient = searchQuery;
  formData.ward = selectedWardId;
  const handleWardSelect = (event) => {
    setSelectedWardId(event.target.value);
    console.log(event.target.value);
  };

  const handlePatientSelect = async (patient) => {
    setFormData({
      ...formData,
      patient: patient.fullname,
    });
    setSearchQuery("");
    setPatients([]);
  };
  //   const patientss= searchQuery;
  return (
    <div>
      {console.log("in", patients)}
      <fieldset>
        <form
          className="items-stretch w-[1100px] bg-slate-50 flex flex-col pt-5 pb-12 px-8 max-md:px-5"
          onSubmit={handleSubmit}
        >
          <div className="items-stretch bg-white flex flex-col justify-center py-1.5 max-md:max-w-full">
            <div className="flex flex-col justify-center pl-7 pr-16 py-2 items-start max-md:max-w-full max-md:px-5">
              <div className="backdrop-blur-[5px]  flex   max-w-full items-stretch justify-between gap-5 pl-4 pr-1 py-1.5 rounded-xl">
                <input
                  className=" text-gray-500 border-transparent text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 w-[500px] rounded-md items-start max-md:max-w-full max-md:pr-5"
                  type="text"
                  placeholder="Search by name or ID"
                  value={newname}
                  //   onChange={handleSearchChange}
                  onChange={(e) => setnewname(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="items-stretch bg-white flex flex-col mt-8 pb-7 px-7 max-md:max-w-full max-md:px-5">
            <div className="max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col pt-7 max-md:max-w-full max-md:mt-10">
                    <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
                      Full name
                    </div>
                    <input
                      className="justify-between text-gray-500 border-transparent w-[480px] items-stretch bg-slate-100 flex gap-5 mt-2 px-3.5 py-4 rounded-md max-md:max-w-full max-md:flex-wrap"
                      type="text"
                      name="ward_type"
                      onChange={handleChange}
                      placeholder="Select ward"
                      value={patients.fullname}
                    />
                    <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
                      Ward type
                    </div>
                    <input
                      className="justify-between text-gray-500 border-transparent w-[480px] items-stretch bg-slate-100 flex gap-5 mt-2 px-3.5 py-4 rounded-md max-md:max-w-full max-md:flex-wrap"
                      type="text"
                      name="ward_type"
                      onChange={handleChange}
                      placeholder="Select ward"
                      value={formData.ward_type}
                    />
                    <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
                      Bed number
                    </div>
                    {beds.length === 0 ? (
                      <p>No beds available for the selected ward.</p>
                    ) : (
                      <select
                        className="text-gray-500 border-transparent text-base font-medium leading-4 bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"
                        name="bed"
                        onChange={handleChange}
                        value={formData.bed}
                      >
                        {beds.map(
                          (bed) =>
                            bed.is_available && (
                              <option key={bed.id} value={bed.id}>
                                {bed.id}
                              </option>
                            )
                        )}
                      </select>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex flex-col pt-7 max-md:max-w-full max-md:mt-10">
                    <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
                      Phone number
                    </div>
                    <input
                      className="text-gray-500 border-transparent text-base font-medium leading-4 bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"
                      type="text"
                      name="bed_number"
                      onChange={handleChange}
                      placeholder="Enter bed number"
                      value={patients.phone}
                    />
                    <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                      Ward number
                    </div>
                    <select
                      className="justify-between text-gray-500 border-transparent w-[480px] items-stretch bg-slate-100 flex gap-5 mt-2 px-3.5 py-4 rounded-md max-md:max-w-full max-md:flex-wrap"
                      onChange={handleWardSelect} // Pass the function reference directly
                    >
                      <option value="">Select a Ward</option>
                      {/* Assume wardsData is an array of ward objects */}
                      {wardsData.map((ward) => (
                        <option key={ward.id} value={ward.id}>
                          {ward.name}
                        </option>
                      ))}
                    </select>
                    <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                      Date of arrival
                    </div>
                    <input
                      className="text-gray-500 border-transparent text-base font-medium leading-4 bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"
                      type="date"
                      name="admission_date"
                      onChange={handleChange}
                      placeholder="Enter date"
                      value={formData.admission_date}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-stretch justify-between gap-5 mt-8 self-end">
              <div className="text-blue-700 text-base font-semibold leading-4 items-stretch border grow justify-center px-8 py-4 rounded-lg border-solid border-blue-700 max-md:px-5">
                Cancel
              </div>
              <button
                className="text-white text-base font-semibold leading-4 items-stretch border border-[color:var(--Theme-Primary-Default,#4C6FFF)] bg-blue-700 grow justify-center px-7 py-4 rounded-lg border-solid max-md:px-5"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default EditIPD;
