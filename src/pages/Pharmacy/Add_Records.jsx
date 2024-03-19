import React from 'react'
import { useNavigate } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb'

const Add_Records = () => {
    const  navigate = useNavigate()
    const handle =()=>{
      navigate('/Pharmacy');
    }
  return (
    <div>
    <Breadcrumb></Breadcrumb>
    <div className="flex flex-col pb-11 w-[1120px] bg-slate-50">
    <div className="flex flex-col justify-center pt-6 font-medium bg-white max-md:mr-1.5 max-md:max-w-full">
      <div className="self-start ml-6 text-xl leading-6 whitespace-nowrap text-slate-800 max-md:ml-2.5">
        Add Pharmacy Bills
      </div>
      <div className="shrink-0 mt-5 h-px bg-slate-100 max-md:max-w-full" />
      <div className="flex gap-5 justify-between mx-6 mt-6 text-lg text-slate-500 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 justify-between self-start">
          <div className="flex-auto">Bill No :A14521</div>
          <div>Case Id :45</div>
        </div>
        <div className="flex-auto">Date :14/01/2024</div>
      </div>
      <div className="shrink-0 mt-5 h-px bg-slate-100 max-md:max-w-full" />
    </div>
    <div className="flex flex-col px-7 pt-6 pb-12 mt-7 bg-white max-md:px-5 max-md:mr-1.5 max-md:max-w-full">
      <div className="flex gap-5 justify-between font-medium max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1 self-start">
          <div className="text-sm text-slate-600">Medicine Category *</div>
          <div className="flex gap-5 justify-between px-4 py-4 mt-2 text-base leading-4 text-gray-500 rounded-md bg-slate-100">
            <div className="flex-auto">Select medicine </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/11c150f0a125e29a2462c77315277aae57da84fa79709b301c95250333697dc1?apiKey=8d6992485656477797592f8415f51272&"
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
            Sale Price
          </div>
          <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
            Enter sale price
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-8 font-medium max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1 py-0.5 max-md:max-w-full">
          <div className="text-sm text-slate-600 max-md:max-w-full">
            Medicine Name*
          </div>
          <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
            Enter the medicine name
          </div>
        </div>
        <div className="flex flex-col flex-1 py-0.5 max-md:max-w-full">
          <div className="text-sm text-slate-600 max-md:max-w-full">
            Tax Amount
          </div>
          <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
            Enter tax Amount
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-8 font-medium max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1 self-start py-0.5 max-md:max-w-full">
          <div className="text-sm text-slate-600 max-md:max-w-full">
            Batch No*
          </div>
          <div className="flex gap-5 justify-between px-4 py-4 mt-3 text-base leading-4 text-gray-500 rounded-md bg-slate-100 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto">Enter batch number</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/99196b33932d76b7069e53be598e6a3536fb3ff205f7a29d14f874eba149c9ba?apiKey=8d6992485656477797592f8415f51272&"
              className="my-auto aspect-square w-[11px]"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 pt-1 pb-5 max-md:max-w-full">
          <div className="text-sm text-slate-600 max-md:max-w-full">
            Hospital Doctor
          </div>
          <div className="justify-center items-start py-4 pr-16 pl-4 mt-2 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
            Enter hospital name
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-2.5 font-medium max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1 self-start max-md:max-w-full">
          <div className="text-sm text-slate-600 max-md:max-w-full">
            Expiry Date
          </div>
          <div className="justify-center items-start py-4 pr-16 pl-4 mt-2 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
            DD/MM/YY
          </div>
        </div>
        <div className="flex flex-col flex-1 py-0.5 max-md:max-w-full">
          <div className="text-sm text-slate-600 max-md:max-w-full">
            Doctor Name
          </div>
          <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
            Enter Doctor name
          </div>
        </div>
      </div>
      <div className="mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col font-medium max-md:mt-10 max-md:max-w-full">
              <div className="text-sm text-slate-600 max-md:max-w-full">
                Quantity Avilable
              </div>
              <div className="justify-center items-start py-4 pr-16 pl-4 mt-2 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
                Enter the quantity available
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow self-stretch py-0.5 font-medium whitespace-nowrap max-md:mt-10 max-md:max-w-full">
              <div className="text-sm text-slate-600 max-md:max-w-full">
                Note
              </div>
              <div className="items-start pt-2.5 pr-16 pb-28 pl-4 mt-3 text-base leading-4 text-gray-500 rounded-md bg-slate-100 max-md:pr-5 max-md:pb-10 max-md:max-w-full">
                Write a note.....
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-end mt-12 text-base font-semibold leading-4 whitespace-nowrap max-md:mt-10">
        <div className="grow justify-center px-8 py-4 text-blue-700 rounded-lg border border-blue-700 border-solid max-md:px-5">
          Cancel
        </div>
        <button className="grow justify-center px-10 py-4 text-white bg-blue-700 rounded-lg border border-solid border-[color:var(--Theme-Primary-Default,#4C6FFF)] max-md:px-5" onClick={handle}>
          Save
        </button>
      </div>
    </div>
    <div className="flex gap-5 justify-between px-10 pt-7 pb-3.5 mt-6 font-medium bg-white max-md:flex-wrap max-md:px-5 max-md:mr-1.5 max-md:max-w-full">
      <div className="flex flex-col justify-center px-6 text-base text-slate-600 max-md:px-5">
        <div className="whitespace-nowrap">Total Amount (Rs):</div>
        <div className="mt-8">Discount (Rs) :</div>
        <div className="mt-8">Tax (Rs) :</div>
        <div className="mt-8">Net Amount :</div>
      </div>
      <div className="flex flex-col my-auto max-md:max-w-full">
        <div className="flex gap-3.5 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="grow my-auto text-base whitespace-nowrap text-slate-600">
            Payment Mode :
          </div>
          <div className="flex gap-5 justify-between px-6 py-4 text-base leading-4 text-gray-500 rounded-md bg-slate-100 max-md:pr-5">
            <div className="flex-auto">Selelct a payment mode</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc484dba1bccbc887162400951c8bd7430f21bcc08be56479ded71cea1951cab?apiKey=8d6992485656477797592f8415f51272&"
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
  </div></div>
  )
}

export default Add_Records