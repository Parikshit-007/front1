import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Breadcrumb from '../../components/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
const steps = ['Step 1', 'Step 2', 'Step 3'];

export default function Add_Medicines() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    FirstName: '',
    phone:'',
    email: '',
    RelationShip:'',
    fullname:"",
    Gender:"",
    blood:"",
    city:"",
    phone_no:"",
    DOB:"",
    referred:"",
    allergy:"",
    PinCode:"",
    initial_balance:"",
    facility_code:"",
    membernum:"",
    Insurance_name:"",
    cardnum:"",
    Insurance_Provider:"",


  });
  const navigate = useNavigate();

  const handleChange = (e) => {
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
  const handleSubmit = () => {
    console.log('Form Data Submitted:', formData);

   // Use Axios to send a POST request with the form data
    axios.post('http://127.0.0.1:8000/api/patient/api/patients/', formData)
      .then((response) => {
        console.log('API Response:', response.data);
        // Add logic to handle the API response, if needed
        navigate('/Pharmacy/Medicines');
      })
      .catch((error) => {
        console.error('API Error:', error);
        // Add logic to handle the API error, if needed
      });
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
            <div className="flex flex-col px-7 pt-6 w-[1120px] pb-12 bg-white max-md:px-5">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-sm font-medium text-slate-600 max-md:mt-10 max-md:max-w-full">
                    <div className="max-md:max-w-full">Medicine Category *</div>
                    <div className="flex gap-5 justify-between px-0.5 mt-2 text-base leading-4 text-gray-500 max-md:flex-wrap max-md:max-w-full">
                      <div className="flex gap-5 justify-between px-6 py-4 rounded-md bg-slate-100 max-md:pr-5">
                        <div className="flex-auto">Select medicine </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/97e77115b0027a4da288391337aedb693e2d283f0501bfff6fe475648d94b49b?apiKey=8d6992485656477797592f8415f51272&"
                          className="my-auto aspect-square w-[11px]"
                        />
                      </div>
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&"
                        className="max-w-full rounded-lg border border-solid aspect-[2.38] border-[color:var(--Theme-Primary-Default,#4C6FFF)] w-[110px]"
                      />
                    </div>
                    <div className="mt-8 max-md:max-w-full">Medicine Name*</div>
                    <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
                      Enter the medicine name
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pt-1 pb-5 text-sm font-medium text-slate-600 max-md:mt-10 max-md:max-w-full">
                    <div className="max-md:max-w-full">Purchase Price*</div>
                    <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
                      Enter purchase price
                    </div>
                    <div className="mt-9 max-md:max-w-full">Tax*</div>
                    <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
                      Enter tax amount
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-2.5 font-medium max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col flex-1 py-0.5 max-md:max-w-full">
                <div className="text-sm text-slate-600 max-md:max-w-full">
                  Batch No*
                </div>
                <div className="flex gap-5 justify-between px-3.5 py-4 mt-3 text-base leading-4 text-gray-500 rounded-md bg-slate-100 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex-auto">Enter batch number</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/73818e7f82f21f7b24d0ca593596157ffb8689348340ac498fe17ffe4cbb9dd6?apiKey=8d6992485656477797592f8415f51272&"
                    className="my-auto aspect-square w-[11px]"
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 py-0.5 whitespace-nowrap max-md:max-w-full">
                <div className="text-sm text-slate-600 max-md:max-w-full">
                  Amount*
                </div>
                <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 text-base leading-4 text-gray-500 rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
                  Enter amount
                </div>
              </div>
            </div>
            <div className="mt-8 text-sm font-medium text-slate-600 max-md:max-w-full">
              Expiry Date
            </div>
            <div className="justify-center items-start py-4 pr-16 pl-4 mt-2 max-w-full text-base font-medium leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 w-[511px] max-md:pr-5">
              DD/MM/YY
            </div>
            <div className="mt-9 text-sm font-medium text-slate-600 max-md:max-w-full">
              MRP*
            </div>
            <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 max-w-full text-base font-medium leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 w-[511px] max-md:pr-5">
              Enter the mrp
            </div>
            <div className="self-start mt-8 text-sm font-medium text-slate-600 max-md:max-w-full">
              Sale Price*
            </div>
            <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 max-w-full text-base font-medium leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 w-[510px] max-md:pr-5">
              Enter Sale Price
            </div>
            <div className="flex gap-5 justify-between items-start mt-8 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col self-start py-0.5 font-medium max-md:max-w-full">
                <div className="text-sm text-slate-600 max-md:max-w-full">
                  Packing Quantity*
                </div>
                <div className="justify-center items-start py-4 pr-16 pl-4 mt-2 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
                  Enter packing quantity
                </div>
              </div>
            
            </div>
          </div>
        )}
        {activeStep === 1 && (
            <div className="flex flex-col items-start p-7  w-[1120px] text-sm font-medium bg-white max-md:px-5">
            <div className="text-slate-600 max-md:max-w-full">Hospital Name*</div>
            <div className="flex gap-5 justify-between px-3.5 py-4 mt-2 max-w-full text-base leading-4 text-gray-500 rounded-md bg-slate-100 w-[510px] max-md:flex-wrap">
              <div className="flex-auto">Selelct the hospital name</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5821763e76c3ae9863210267aec31e305e2226b7d1e6d3c5bef2bf2d72bb30c8?apiKey=8d6992485656477797592f8415f51272&"
                className="my-auto aspect-square w-[11px]"
              />
            </div>
            <div className="mt-9 text-slate-600 max-md:max-w-full">Doctor Name*</div>
            <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 max-w-full text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 w-[510px] max-md:pr-5">
              Enter the doctor name{" "}
            </div>
            <div className="mt-9 text-slate-600 max-md:max-w-full">Note</div>
            <div className="items-start pt-4 pr-16 pb-36 pl-4 mt-3 max-w-full text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 w-[510px] max-md:pr-5 max-md:pb-10">
              Write a note ....
            </div>
          
          </div>
        )}
        {activeStep === 2 && (
            <div className="flex flex-col px-10 pt-7  w-[1120px] pb-12 bg-white max-md:px-5">
      <div className="flex gap-5 justify-between pr-2.5 font-medium max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col justify-center px-6 text-base text-slate-600 max-md:px-5">
          <div className="whitespace-nowrap">Total Amount (Rs):</div>
          <div className="mt-8">Discount (Rs) :</div>
          <div className="mt-8">Tax (Rs) :</div>
          <div className="mt-8">Net Amount :</div>
        </div>
        <div className="flex flex-col my-auto max-md:max-w-full">
          <div className="flex gap-3.5 justify-between pr-6 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="grow my-auto text-base whitespace-nowrap text-slate-600">
              Payment Mode :
            </div>
            <div className="flex gap-5 justify-between px-3.5 py-4 text-base leading-4 text-gray-500 rounded-md bg-slate-100">
              <div className="flex-auto">Selelct a payment mode</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a2834449f4ddb67aad0340d0ddfed4cf24b8eb168bd2a01d638ef4085325cef?apiKey=8d6992485656477797592f8415f51272&"
                className="my-auto aspect-square w-[11px]"
              />
            </div>
          </div>
          <div className="flex gap-5 justify-between pr-6 mt-9 text-base whitespace-nowrap text-slate-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="grow my-auto">Amount (Rs) :</div>
            <div className="max-w-full rounded-md bg-slate-100 h-[46px] w-[360px]" />
          </div>
        </div>
      </div>
     
    </div>
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
