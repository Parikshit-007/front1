import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Breadcrumb from '../../components/Breadcrumb';
import { useNavigate } from 'react-router-dom';
 
const steps = ['Step 1', 'Step 2', 'Step 3'];
const EditPatient = () => {
  const { pk } = useParams(); // Extract the patient ID from the URL params
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    // Initialize form data state with empty values
    FirstName: '',
    phone: '',
    email: '',
    RelationShip: '',
    fullname: '',
    Gender: '',
    blood: '',
    city: '',
    phone_no: '',
    DOB: '',
    referred: '',
    allergy: '',
    PinCode: '',
    initial_balance: '',
    facility_code: '',
    membernum: '',
    Insurance_name: '',
    cardnum: '',
    Insurance_Provider: '',
  });

  useEffect(() => {
    // Fetch the patient data from the API using the provided patient ID
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/patient/api/patients/${pk}/`);
        setFormData(response.data); // Update the form data state with the fetched data
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, [pk]); // Depend on pk so that useEffect runs when pk changes

  const handleChange = (e) => {
    // Update the form data state when input values change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSubmit = async () => {
    try {
      // Send a PUT request to update the patient data
      await axios.put(`http://127.0.0.1:8000/api/patient/api/patients/${pk}/`, formData);
      // Redirect the user to the patient details page after successful update
      window.location.href = `/Patient/Patient_Details/${pk}`;
    } catch (error) {
      console.error('Error updating patient data:', error);
         console.log("Error response data:", error.response?.data);
    }
  };

  return (
    <div>
    <Breadcrumb></Breadcrumb>
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form>
        {activeStep === 0 && (
          <div><div className=" bg-white flex h-[600px] flex-col pb-6 px-6 max-md:px-5">
          <div className="w-[1000px] h-full">
            <div className="gap-5 flex max-md:flex-col h-full max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col pt-7 max-md:max-w-full max-md:mt-10">
                  <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
                    Full name
                  </div>
                  <div >
                <input className="text-gray-500 border-transparent text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 w-[500px] rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' placeholder='Enter your name' name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                fullWidth></input>
                  </div>
                  <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                    E-mail ID
                  </div>
                  <div >
                  <input className="text-gray-500 border-transparent text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 w-[500px] rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' placeholder=' Enter e-mail id' name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth></input>
                   
                  </div>
                  <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
                    Gender
                  </div>
                  <div >
                    <div className="text-gray-500 text-base font-medium leading-4">
                    <input className="justify-between border-transparent w-[500px] items-stretch bg-slate-100 flex gap-5 mt-3 pl-4 pr-2.5 py-4 rounded-md max-md:max-w-full max-md:flex-wrap" type='text' name="Gender"
                    value={formData.Gender}
                    onChange={handleChange}
                    fullWidth>
          
        </input>
                    </div>
                   
                  </div>
                  <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
                    Blood Group
                  </div>
                  <div >
                    <div className="text-gray-500 text-base font-medium leading-4">
                    <input className="justify-between border-transparent w-[500px] items-stretch bg-slate-100 flex gap-5 mt-3 pl-4 pr-2.5 py-4 rounded-md max-md:max-w-full max-md:flex-wrap" type='text' name="blood"
                    value={formData.blood}
                    onChange={handleChange}
                    fullWidth>
            
        </input>
                    </div>
                 
                  </div>
                  <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                    City
                  </div>
                  <div>
                  <input className="text-gray-500 border-transparent text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 w-[500px] rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' placeholder='   Enter city'  name="city"
                value={formData.city}
                onChange={handleChange}
                fullWidth ></input>
        
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col pt-7 max-md:max-w-full max-md:mt-10">
                  <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
                    Phone number
                  </div>
                  <div >
                  <input className="text-gray-500  w-[480px] border-transparent text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4  rounded-md items-start max-md:max-w-full max-md:pr-5" type='number' placeholder='     Enter phone number'  name="phone_no"
                value={formData.phone_no}
                onChange={handleChange}
                fullWidth></input>
               
                  </div>
                  <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                    Date of birth
                  </div>
                  <div >
                    <div className="text-gray-500 text-base font-medium leading-4 grow shrink basis-auto">
                    <input className="items-stretch w-[480px] border-transparent bg-slate-100 flex justify-between gap-5 mt-3 pl-4 pr-7 py-3 rounded-md max-md:max-w-full max-md:flex-wrap max-md:pr-5" type='date' name="DOB"
                value={formData.DOB}
                onChange={handleChange}
                fullWidth ></input>
                     
                    </div>
                   
                  </div>
                  <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                    Referred by
                  </div>
                  <div>
                  <input className="text-gray-500 w-[480px] border-transparent text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-2 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' placeholder=' Enter doctor name'  name="referred"
                value={formData.referred}
                onChange={handleChange}
                fullWidth></input>
        
                   
                  </div>
                  <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                    Allergy (if any)
                  </div>
                  <div >
                  <input className="text-gray-500 w-[480px] border-transparent text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-2 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='text'  placeholder='Allergy (if any)'  name="allergy"
                value={formData.allergy}
                onChange={handleChange}
                fullWidth></input>
                  </div>
                  <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                    Pin code
                  </div>
                  <div >
                    <input className="text-gray-500 text-base w-[480px] border-transparent font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='number' placeholder='Enter pin code'  name="PinCode"
                value={formData.PinCode}
                onChange={handleChange}
                fullWidth></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-stretch justify-between gap-5 mr-5 mt-8 self-end max-md:mr-2.5">
           
          </div>
        </div></div>
        )}
        {activeStep === 1 && (
          <div><div className="items-stretch w-[1100px] bg-white flex flex-col pb-12 px-6 max-md:px-5">
          <div className="max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col pt-7 max-md:max-w-full max-md:mt-10">
                  <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
                    Full name
                  </div>
                  <div>
                   <input  className="text-gray-500 border-transparent text-base font-medium w-[500px] leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' placeholder='Enter full name of relative' name="FirstName"
                   value={formData.FirstName}
                   onChange={handleChange}
                   fullWidth></input>
                
                  </div>
                  <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
                    Phone number
                  </div>
                  <div >
                   <input className="text-gray-500 w-[500px] border-transparent  text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" placeholder='Enter phone number' type='number' name="phone"
                   value={formData.phone}
                   onChange={handleChange}
                   fullWidth></input>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col mt-6 py-0.5 max-md:max-w-full max-md:mt-10">
                  <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
                    E-mail ID
                  </div>
                  <div >
                   <input className="text-gray-500 text-base w-[500px] border-transparent  font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" placeholder='Enter e-mail id' type='text' name="email"
                   value={formData.email}
                   onChange={handleChange}
                   fullWidth></input>
                  </div>
                  <div className="text-slate-600  text-sm font-medium mt-[44px] max-md:max-w-full">
                    Relationship
                  </div>
                  <div >
                   <input className="text-gray-500 text-base w-[500px] border-transparent font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-2 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"  type='text' placeholder='Enter relationship with patient' name="RelationShip"
                   value={formData.RelationShip}
                   onChange={handleChange}
                   fullWidth></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        </div></div>
        )}
        {activeStep === 2 && (
          <div><div className="items-stretch w-[1100px] bg-white flex flex-col pb-12 px-6 max-md:px-5">
    <div className="max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="items-stretch flex grow flex-col pt-7 max-md:max-w-full max-md:mt-10">
            <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
              Insurance provider
            </div>
            <input className="text-gray-500 text-base  border-transparent font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-2 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' placeholder='Enter insurance provider'name="Insurance_Provider"
                   value={formData.Insurance_Provider}
                   onChange={handleChange}
                   fullWidth>
            
            </input>
            <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full" >
              Card number (ID no.)
            </div>
            <input className="text-gray-500 text-base border-transparent font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-2.5 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='number' placeholder='Enter card number'name="cardnum"
                   value={formData.cardnum}
                   onChange={handleChange}
                   fullWidth>
       
            </input>
            <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
              Insurance name
            </div>
            <input className="text-gray-500 border-transparent  text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' placeholder='Enter insurance name'name="Insurance_name"
                   value={formData.Insurance_name}
                   onChange={handleChange}
                   fullWidth >
             
            </input>
            <div className="items-stretch border bg-white flex w-[166px] max-w-full flex-col justify-center mt-8 px-5 py-2.5 rounded-[100px] border-solid border-blue-700">
              <div className="items-stretch flex justify-between gap-2">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8bb2b7e1275c47c1e7c55188e2f4bc2b26c582e99433118612c30017c515b679?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bb2b7e1275c47c1e7c55188e2f4bc2b26c582e99433118612c30017c515b679?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bb2b7e1275c47c1e7c55188e2f4bc2b26c582e99433118612c30017c515b679?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bb2b7e1275c47c1e7c55188e2f4bc2b26c582e99433118612c30017c515b679?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bb2b7e1275c47c1e7c55188e2f4bc2b26c582e99433118612c30017c515b679?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bb2b7e1275c47c1e7c55188e2f4bc2b26c582e99433118612c30017c515b679?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bb2b7e1275c47c1e7c55188e2f4bc2b26c582e99433118612c30017c515b679?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bb2b7e1275c47c1e7c55188e2f4bc2b26c582e99433118612c30017c515b679?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                  className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-blue-700 text-sm font-semibold grow whitespace-nowrap">
                  Add Insurance
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="items-stretch flex flex-col mt-6 py-0.5 max-md:max-w-full max-md:mt-10">
            <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
              Insurance number (Member no.)
            </div>
            <input  className="text-gray-500 border-transparent text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-2.5 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' placeholder='Enter insurance number'name="membernum"
                   value={formData.membernum}
                   onChange={handleChange}
                   fullWidth >
             
            </input>
            <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
              Facility code
            </div>
            <input className="text-gray-500 text-base border-transparent  font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-2 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"  type='text' placeholder=' Enter facility code' name="facility_code"
                   value={formData.facility_code}
                   onChange={handleChange}
                   fullWidth>
            
            </input>
            <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
              Initial balance
            </div>
            <input className="text-gray-500 border-transparent  text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' placeholder='Enter initial balance'name="initial_balance"
                   value={formData.initial_balance}
                   onChange={handleChange}
                   fullWidth>
          
            </input>
          </div>
        </div>
      </div>
    </div>
  
  </div></div>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Button variant="contained" onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}>
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </form>
    </Box>
    </div>
  );
}


export default EditPatient;
