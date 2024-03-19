import react  from 'react';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Breadcrumb from '../../components/Breadcrumb';
import axios from 'axios';
const steps = ['Step 1', 'Step 2', 'Step 3'];

export default function Add_Doctor() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    Email: '',
    phone_number: '',
    dob: '',
    specialty: '',
    Gender: '',
    Address: '',
    PinCode: '',
    experince: '',
    education_qualification: '',
    working_details: '',
    identity_proof: '' ,
    medical_liscence: '',
  });

 
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

    //Use Axios to send a POST request with the form data
    axios.post('http://127.0.0.1:8000/doctor/api/doctors/', formData , { headers: {
        'Content-Type': 'multipart/form-data',
      }},)
      .then((response) => {
        console.log('API Response:', response.data);
        // Add logic to handle the API response, if needed
      })
      .catch((error) => {
        console.error('API Error:', error);
        console.log("Error response data:", error.response?.data);
        // Add logic to handle the API error, if needed
      });
  };

  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (fieldName, event) => {
    const file = event.target.files[0];
    console.log('file:', file)
    if (file) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [fieldName]: file,
      }));
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
      <form enctype="multipart/form-data">
        {activeStep === 0 && (
          <div> <div className="bg-white w-[1120px]  px-6 max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col pt-7 max-md:max-w-full max-md:mt-10">
                <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
                  Full name
                </div>
                <input className="text-gray-500 border-transparent text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' name="name" value={formData.name}
                    onChange={handleChange}
                    fullWidth placeholder='Enter full name'>
                
                </input>
                <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                  E-mail ID
                </div>
                <input className="text-gray-500 text-base border-transparent font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='text'name='Email' value={formData.Email}
                    onChange={handleChange}
                    fullWidth placeholder='Enter e-mail id' >
                
                </input>
                <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
                  Gender
                </div>
                <input className="text-gray-500  text-base border-transparent font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' name='Gender' value={formData.Gender}
                    onChange={handleChange}
                    fullWidth placeholder='Gender' >
                 
                </input>

                {/* <div>
                <select className="justify-between border-transparent w-[500px] items-stretch bg-slate-100 flex gap-5 mt-3 pl-4 pr-2.5 py-4 rounded-md max-md:max-w-full max-md:flex-wrap" type='select' name='Gender' value={formData.Gender}
                    onChange={handleChange}
                    fullWidth placeholder='Gender'>
            <option className='text-gray-500 text-base font-medium leading-4' value="male">Male</option>
            <option className='text-gray-500 text-base font-medium leading-4' value="female">Female</option>
            <option className='text-gray-500 text-base font-medium leading-4' value="other">Other</option>
        </select>
        
                </div> */}
                <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                  Address
                </div>
                <input className="text-gray-500 text-base border-transparent font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-2 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' name='Address' value={formData.Address}
                    onChange={handleChange}
                    fullWidth placeholder='Enter Address'>
                  
                </input>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col py-7 max-md:max-w-full max-md:mt-10">
                <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
                  Phone number
                </div>
                <input className="text-gray-500  text-base border-transparent font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' name='phone_number' value={formData.phone_number}
                    onChange={handleChange}
                    fullWidth placeholder='Enter phone number' >
                 
                </input>

                
                <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
               BirthDate
                </div>
            
                 <input className="text-gray-500 border-transparent text-base font-medium leading-4 bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5"  type='date' name="dob" onChange={handleChange} placeholder='dob' value={formData.dob}>
                    
                </input>
                
              
                {/* <div className="text-slate-600 text-sm font-medium mt-9 max-md:max-w-full">
                  Blood Group
                </div>
                <div className="">
                <select className="justify-between w-[520px] border-transparent h-[50px] items-stretch bg-slate-100 flex gap-5 mt-2 px-3.5 py-4 rounded-md max-md:max-w-full max-md:flex-wrap" type='select' name='blood' value={formData.}
                    onChange={handleChange}
                    fullWidth placeholder='Enter blood group '>
            <option className='text-gray-500 text-base font-medium leading-4' value="A+">A+</option>
            <option className='text-gray-500 text-base font-medium leading-4' value="B+">B+</option>
            <option className='text-gray-500 text-base font-medium leading-4' value="A-">A-</option>
        </select>
                </div> */}
                <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                  Pin code
                </div>
                <input className="text-gray-500 text-base border-transparent font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' value={formData.PinCode}
                    onChange={handleChange}
                    fullWidth name='PinCode' placeholder='Enter pin code'>
                 
                </input>
                
              </div>
            </div>
          </div>
        </div>
        </div>
        )}
        {activeStep === 1 && (
          <div>  <div className="items-stretch w-[1100px] bg-white flex flex-col pb-12 px-7 max-md:px-5">
          <div className="max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col pt-7 max-md:max-w-full max-md:mt-10">
                  <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
                    Educational qualification
                  </div>
                  <input className="text-gray-500  text-base border-transparent font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-3 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' name='education_qualification' value={formData.education_qualification}
                    onChange={handleChange}
                    fullWidth placeholder='Educational Details' >
                 
                </input>
                  {/* <div>
                  <select className="justify-between border-transparent  w-[500px] items-stretch bg-slate-100 flex gap-5 mt-2 px-3.5 py-4 rounded-md max-md:max-w-full max-md:flex-wrap" type='select' name='EducationQualification'  value={formData.EducationQualification}
                onChange={handleChange}
                fullWidth  placeholder='Educational Details'>
            <option className='text-gray-500 text-base font-medium leading-4' value="MBBS">MBBS</option>
            <option className='text-gray-500 text-base font-medium leading-4' value="Ph.d">Ph.d</option>
            <option className='text-gray-500 text-base font-medium leading-4' value="Teacher">Teacher</option>
        </select>
        
                     
                  </div> */}
                  <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                    Working details
                  </div>
                  <div >
                    <input className="justify-between  border-transparent  w-[500px] items-stretch bg-slate-100 flex gap-5 mt-2 px-3.5 py-4 rounded-md max-md:max-w-full max-md:flex-wrap" type='text' name='working_details'  value={formData.working_details}
                onChange={handleChange}
                fullWidth   placeholder='Enter other working places'>
                   
                    </input>
                    
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col mt-6 py-0.5 max-md:max-w-full max-md:mt-10">
                  <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
                    Specialization
                  </div>
                  <input className="text-gray-500  border-transparent text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-2 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5 " type='text' name='specialty'  value={formData.specialty}
                onChange={handleChange}
                fullWidth  placeholder='Enter Specialization'>
                   
                  </input>
                  <div className="text-slate-600 text-sm font-medium mt-8 max-md:max-w-full">
                    Experience
                  </div>
                  <input className="text-gray-500  border-transparent text-base font-medium leading-4 whitespace-nowrap bg-slate-100 justify-center mt-2 pl-4 pr-16 py-4 rounded-md items-start max-md:max-w-full max-md:pr-5" type='text' name='experince'  value={formData.experince}
                onChange={handleChange}
                fullWidth  placeholder=' Enter experience'>
                   
                  </input>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        </div>
        )}
        {activeStep === 2 && (
          <div> <div className="bg-white w-[1000px] flex flex-col pl-7 pr-20 pt-7 pb-12 items-start max-md:px-5">
          <div className="text-slate-600 text-sm font-medium max-md:max-w-full">
            Identity Proof
          </div>
          <div >
            <div className="text-gray-500 text-base font-medium leading-4 grow shrink basis-auto">
            
              <select className="justify-between border-transparent items-stretch bg-slate-100 flex w-[613px] max-w-full gap-5 mt-2 pl-5 pr-20 py-4 rounded-md max-md:flex-wrap max-md:pr-5" type='select' name='identity_proof'  value={formData.identity_proof}
                onChange={handleChange}
                fullWidth placeholder='Select required proof'>
            <option className='text-gray-500 text-base font-medium leading-4' value="Aadhar card">Aadhar card</option>
            <option className='text-gray-500 text-base font-medium leading-4' value="Voter.ID">Voter.ID</option>
            <option className='text-gray-500 text-base font-medium leading-4' value="Driving License">Driving License</option>
        </select>
        
            </div>
           
          </div>
          <div >
            <div className="text-gray-500 text-base font-medium leading-4 grow shrink basis-auto my-auto">
            <div className="justify-between items-stretch bg-slate-100 flex w-[613px] max-w-full gap-5 mt-2 pl-5 pr-20 py-3.5 rounded-md max-md:flex-wrap max-md:pr-5">
              
            <input type="file" accept=".pdf, .doc, .docx, .jpg, .jpeg, .png" onChange={(e) => handleFileChange('identity_proof', e)}/>

              {formData.identity_proof && (
                <div>
                  <p> File Uploaded</p>
                
                </div>
              )}
            </div>
            </div> 
           
          </div>
          <div className="text-slate-400 text-xs mt-2 max-md:max-w-full">
            Note : Accepted Format PNG,JPG,PDF)
          </div>
          <div className="text-slate-600 text-sm font-medium mt-12 max-md:max-w-full max-md:mt-10">
            Medical Registration Proof
          </div>
          <div >
            
            <select className="justify-between border-transparent items-stretch bg-slate-100 flex w-[613px] max-w-full gap-5 mt-2 pl-5 pr-20 py-4 rounded-md max-md:flex-wrap max-md:pr-5" type='select' name='medical_liscence'  value={formData.medical_liscence}
                onChange={handleChange}
                fullWidth placeholder='Select medical proof'>
            <option className='text-gray-500 text-base font-medium leading-4' value="License">License</option>
            <option className='text-gray-500 text-base font-medium leading-4' value="Qualification">Qualification</option>
            <option className='text-gray-500 text-base font-medium leading-4' value="Driving License">Driving License</option>
        </select>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/39f87d017bc4c70b01df65e73736595cd25785211056a10996739bef7475524b?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
              className="aspect-square object-contain object-center w-[11px] overflow-hidden shrink-0 max-w-full my-auto"
            />
          </div>
          <div >
            <div className="text-gray-500 text-base font-medium leading-4 grow shrink basis-auto my-auto">
            <div className="justify-between items-stretch bg-slate-100 flex w-[613px] max-w-full gap-5 mt-2 pl-5 pr-20 py-3.5 rounded-md max-md:flex-wrap max-md:pr-5">
              
            <input  type="file" accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
  onChange={(e) => handleFileChange('medical_liscence', e)}/>
              {formData.medical_liscence && (
                <div>
                  <p>  Uploaded</p>
                
                </div>
              )}
            </div>
            </div>
           
          </div>
          <div className="text-slate-400 text-xs mt-2 max-md:max-w-full">
            Note : Accepted Format PNG,JPG,PDF
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