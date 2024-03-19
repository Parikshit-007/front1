import React from 'react'
import { useNavigate } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb';

const Add_Equipment = () => {
    const navigate = useNavigate();
    const handle =()=>{
        navigate("/Inventory/Equipment")
    }
  return (
    <div>
    <Breadcrumb></Breadcrumb><div className="flex flex-col px-6 pb-12 w-[1200px] bg-slate-50 max-md:px-5">
    <div className="flex flex-col py-7 bg-white max-md:max-w-full">
      <div className="self-start ml-7 text-xl font-medium leading-6 whitespace-nowrap text-slate-800 max-md:ml-2.5">
        Equipment Inventory
      </div>
      <div className="shrink-0 mt-5 h-px bg-slate-100 max-md:max-w-full" />
      <div className="flex gap-5 justify-between mx-7 mt-7 font-medium max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 justify-end p-4 my-auto text-base leading-4 text-gray-500 bg-white border border-black border-solid shadow-sm rounded-[50px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9216ed8dfbc29724ba1cae06c3c64a3b90c63cba19a66cad1a40e77f57a5c11?apiKey=8d6992485656477797592f8415f51272&"
            className="aspect-square fill-black fill-opacity-80 w-[15px]"
          />
          <div className="flex-auto">Search for equipment...</div>
        </div>
        <div className="flex flex-col max-md:max-w-full">
          <div className="text-sm text-slate-600 max-md:max-w-full">
            Equipment Category*
          </div>
          <div className="flex gap-5 justify-between p-4 mt-2 text-base leading-4 text-gray-500 rounded-md bg-slate-100 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto">Select medicine </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc790b9634f626eb24e102de0fe21840d3a32f26772a8f2b4d76706cab462a34?apiKey=8d6992485656477797592f8415f51272&"
              className="my-auto aspect-square w-[11px]"
            />
          </div>
        </div>
      </div>
      <div className="mx-7 mt-8 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow py-0.5 text-sm font-medium text-slate-600 max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">Quantity</div>
              <div className="flex gap-5 justify-between px-3.5 py-4 mt-2 text-base leading-4 text-gray-500 rounded-md bg-slate-100 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto">Enter batch number</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/52552bd7d119a2d613e3bb561f7d663378757c9714c6460615cefed86f8d97dd?apiKey=8d6992485656477797592f8415f51272&"
                  className="my-auto aspect-square w-[11px]"
                />
              </div>
              <div className="mt-8 max-md:max-w-full">Sale Price*</div>
              <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 text-base leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:max-w-full">
                Enter Sale Price
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-1 max-md:mt-10 max-md:max-w-full">
              <div className="text-sm font-medium text-slate-600 max-md:max-w-full">
                Status*
              </div>
              <div className="flex flex-col justify-center items-end py-5 pr-2.5 pl-16 mt-3 rounded-md bg-slate-100 max-md:pl-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cd44eaa9de254920f60fa1fab1c74b4db9164cc40b6912bbdce1eaad37a3af0?apiKey=8d6992485656477797592f8415f51272&"
                  className="aspect-square w-[11px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-end mt-44 mr-8 text-base font-semibold leading-4 whitespace-nowrap max-md:mt-10 max-md:mr-2.5">
        <div className="grow justify-center px-8 py-4 text-blue-700 rounded-lg border border-blue-700 border-solid max-md:px-5">
          Cancel
        </div>
        <button className="grow justify-center px-10 py-4 text-white bg-blue-700 rounded-lg border border-solid border-[color:var(--Theme-Primary-Default,#4C6FFF)] max-md:px-5" onClick={handle}>
          Add
        </button>
      </div>
    </div>
  </div></div>
  )
}

export default Add_Equipment