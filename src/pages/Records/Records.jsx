import RecordsPage2 from './RecordsPage2';
import { useNavigate,Route,Routes } from 'react-router-dom';
import React, { useState } from "react";
import Breadcrumb from '../../components/Breadcrumb';
// import './Records.css'

 
const Records = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
 
    navigate('/Records/Recodrsupload=');
  }
  return (
    <div>
   <div>
   <Breadcrumb></Breadcrumb>
   <div className="relative rounded-[22px] bg-white box-border w-[300px] h-[143px] overflow-hidden text-left text-sm text-blue-900 font-inter border-[1px] border-solid border-blue-500">
      <div className="absolute top-[6px] left-[15px] text-[18px] leading-[150%] font-medium">
        Head ache report
      </div>
      <div className="absolute top-[33px] left-[15px] leading-[150%] font-medium">
        16/10/23
      </div>
      <div className="absolute top-[6px] left-[185px] rounded-[11px] bg-blue-500 box-border w-[84px] overflow-hidden flex flex-row items-center justify-center py-0.5 px-[3px] border-[1px] border-solid border-blue-500">
        <div className="relative leading-[150%]">Dr. Ashish</div>
      </div>
    </div>
   
 
    <div className="relative rounded-[22px] top-[30px]  box-border w-[300px] h-[143px] overflow-hidden text-left text-sm text-blue-500 font-inter border-[1px] border-solid border-teal-300">
      <div className="absolute top-[6px] left-[15px] text-[18px] leading-[150%] font-medium">
        Head ache report
      </div>
      <div className="absolute top-[33px] left-[15px] leading-[150%] font-medium">
        16/10/23
      </div>
      <div className="absolute top-[6px] left-[185px] rounded-[11px] bg-blue-500 box-border w-[84px] overflow-hidden flex flex-row items-center justify-center py-0.5 px-[3px] border-[1px] border-solid border-teal-400">
        <div className="relative leading-[150%]">Dr. Ashish</div>
      </div>
    </div>

    <div className="relative rounded-[22px] top-[60px] bg-white box-border w-[300px] h-[143px] overflow-hidden text-left text-sm text-blue-900 font-inter border-[1px] border-solid border-teal-300">
      <div className="absolute top-[6px] left-[15px] text-[18px] leading-[150%] font-medium">
        Head ache report
      </div>
      <div className="absolute top-[33px] left-[15px] leading-[150%] font-medium">
        16/10/23
      </div>
      <div className="absolute top-[6px] left-[185px] rounded-[11px] bg-blue-500 box-border w-[84px] overflow-hidden flex flex-row items-center justify-center py-0.5 px-[3px] border-[1px] border-solid border-teal-400">
        <div className="relative leading-[150%]">Dr. Ashish</div>
      </div>
    </div>

   </div>
      
             
             {/* <button type="button" class="rounded-none  hover:rounded-lg bg-blue-400 hover:bg-blue-600 Class text-3xl "  onClick={navigateToContacts}> Upload</button> */}
            
             <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[70px] left-[0px] w-[123px] h-[39px]"
                autoFocus={true}
                id="hcard"
              >
                <div className="absolute top-[0px] left-[1100px] rounded-[36px] bg-blue-500 box-border w-[123px] h-[39px] overflow-hidden border-[1px] border-solid border-teal-500" onClick={navigateToContacts} />
                <div className="absolute top-[8px] left-[1130px] transparent-text  text-base leading-[150%] font-medium font-text-sm-font-semibold text-black text-left inline-block w-[101px]">
                Upload
                </div>
              </button>


              
          
    </div>
  )
}

  
export default Records;