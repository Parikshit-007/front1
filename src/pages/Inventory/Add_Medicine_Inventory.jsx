import React from 'react'
import { useNavigate } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb';

const Add_Medicine_Inventory = () => {
    const navigate = useNavigate();
    const handle =()=>{
        navigate("/Inventory")
    }
  return (
    <div>
    <Breadcrumb></Breadcrumb>
    <div className="flex flex-col w-[1120px] px-6 pb-12 font-medium bg-slate-50 max-md:px-5">
    <div className="flex flex-col pt-6 pb-12 bg-white max-md:max-w-full">
      <div className="self-start ml-7 text-xl leading-6 whitespace-nowrap text-slate-800 max-md:ml-2.5">
        Medicine Inventory
      </div>
      <div className="shrink-0 mt-5 h-px bg-slate-100 max-md:max-w-full" />
      <div className="flex flex-col px-7 mt-6 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col flex-1 self-start">
            <div className="text-sm text-slate-600">Medicine Category *</div>
            <div className="flex gap-5 justify-between p-4 mt-2 text-base leading-4 text-gray-500 rounded-md bg-slate-100">
              <div className="flex-auto">Select medicine </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6151a67a8fcdd14bb969d6de2989196888568b2c7b1f944a6b8a67d7d92cb9f4?apiKey=8d6992485656477797592f8415f51272&"
                className="my-auto aspect-square w-[11px]"
              />
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a6bcc6eecd8994ed91772157401eeebb68ef63f140a1a9fec65a261de9d5fea?apiKey=8d6992485656477797592f8415f51272&"
            className="self-end mt-6 max-w-full rounded-lg border border-solid aspect-[2.38] border-[color:var(--Theme-Primary-Default,#4C6FFF)] w-[110px]"
          />
          <div className="flex flex-col flex-1 py-0.5 max-md:max-w-full">
            <div className="text-sm text-slate-600 max-md:max-w-full">
              Medicine Name*
            </div>
            <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
              Enter medicine name
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-9 max-w-full text-sm text-slate-600 w-[582px] max-md:flex-wrap">
          <div>Batch No*</div>
          <div>Tax*</div>
        </div>
        <div className="flex gap-5 justify-between mt-3 w-full text-base leading-4 max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between px-3.5 py-4 text-gray-500 rounded-md bg-slate-100 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto">Enter batch number</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c87f4928431db1df0ecec55ba5ee11fcafdf5a577e79c720e87381a22d3325ae?apiKey=8d6992485656477797592f8415f51272&"
              className="my-auto aspect-square w-[11px]"
            />
          </div>
          <div className="grow justify-center items-start py-4 pr-16 pl-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
            Enter tax amount
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col flex-1 self-start max-md:max-w-full">
            <div className="text-sm text-slate-600 max-md:max-w-full">
              Expiry Date
            </div>
            <div className="flex gap-5 justify-between px-3.5 py-4 mt-2 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:flex-wrap max-md:max-w-full">
              <div>DD/MM/YY</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/88bf0f071043fc6a98b5b54782823e7c97291f3f8e52097cb4132bac07fd3e0a?apiKey=8d6992485656477797592f8415f51272&"
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
        <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col flex-1 py-0.5 max-md:max-w-full">
            <div className="text-sm text-slate-600 max-md:max-w-full">
              Sale Price*
            </div>
            <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
              Enter Sale Price
            </div>
          </div>
          <div className="flex flex-col flex-1 py-0.5 max-md:max-w-full">
            <div className="text-sm text-slate-600 max-md:max-w-full">
              {" "}
              Quantity*
            </div>
            <div className="justify-center items-start py-4 pr-16 pl-4 mt-2 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
              Enter packing quantity
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-end mt-14 mr-8 mb-9 text-base font-semibold leading-4 whitespace-nowrap max-md:mt-10 max-md:mr-2.5">
        <div className="grow justify-center px-8 py-4 text-blue-700 rounded-lg border border-blue-700 border-solid max-md:px-5">
          Cancel
        </div>
        <button className="grow justify-center px-10 py-4 text-white bg-blue-700 rounded-lg border border-solid border-[color:var(--Theme-Primary-Default,#4C6FFF)] max-md:px-5"  onClick={handle}>
          Add
        </button>
      </div>
    </div>
  </div></div>
  )
}

export default Add_Medicine_Inventory