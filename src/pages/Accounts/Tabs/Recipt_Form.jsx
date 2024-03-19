import React from 'react'

const Recipt_Form = () => {
  return (
    <div> <div className="flex flex-col justify-center px-7 py-12 bg-slate-50 max-md:px-5">
    <div className="flex flex-col pt-3 pb-12 mt-11 bg-white max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-between mx-6 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <div className="flex-auto my-auto text-xl font-medium leading-6 text-slate-800">
          Payment Voucher{" "}
        </div>
        <div className="flex flex-col justify-center px-5 py-2.5 text-xs font-semibold text-white whitespace-nowrap bg-blue-700 rounded-md">
          <div className="flex gap-2 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1884ab8edc8a9cbd65d4cef2fee217665b5bfdfc21fd3c8d77ab1e8f0e2b4e6?apiKey=8d6992485656477797592f8415f51272&"
              className="w-5 aspect-square"
            />
            <div className="grow">Add new Voucher</div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-2 h-px bg-slate-100 max-md:max-w-full" />
      <div className="flex flex-col px-7 mt-6 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between font-medium max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col flex-1 self-start mt-1 max-md:max-w-full">
            <div className="text-sm text-slate-600 max-md:max-w-full">
              Payee Name*
            </div>
            <div className="flex gap-5 justify-between py-4 pr-20 pl-4 mt-2 text-base leading-4 text-gray-500 rounded-md bg-slate-100 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
              <div className="flex-auto">Select medicine </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37ceb08d96e88ae458ac56af4f39843cb00e5ece7a517cbaa45a0908c6720f89?apiKey=8d6992485656477797592f8415f51272&"
                className="my-auto aspect-square w-[11px]"
              />
            </div>
          </div>
          <div className="flex flex-col py-0.5 basis-0">
            <div className="text-sm text-slate-600">Amount*</div>
            <div className="justify-center items-start py-4 pr-16 pl-4 mt-3 text-base leading-4 text-gray-500 rounded-md bg-slate-100 max-md:pr-5">
              Enter the Amount
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-8 max-w-full text-sm font-medium text-slate-600 w-[695px] max-md:flex-wrap">
          <div>Date*</div>
          <div className="flex-auto">Description / Purpose </div>
        </div>
        <div className="mt-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex gap-5 justify-between px-3.5 py-4 w-full text-base font-medium leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div>DD/MM/YY</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/24d822345059fa0ae680fb2a4fd62e227cc67743963c01f599fcd2e62f520a96?apiKey=8d6992485656477797592f8415f51272&"
                  className="my-auto aspect-square w-[11px]"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="grow items-start pt-3 pr-16 pb-12 pl-4 w-full text-base font-medium leading-4 text-gray-500 whitespace-nowrap rounded-md bg-slate-100 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                Enter the description
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-end mt-36 mr-8 text-base font-semibold leading-4 whitespace-nowrap max-md:mt-10 max-md:mr-2.5">
        <div className="grow justify-center px-8 py-4 text-blue-700 rounded-lg border border-blue-700 border-solid max-md:px-5">
          Cancel
        </div>
        <div className="grow justify-center px-10 py-4 text-white bg-blue-700 rounded-lg border border-solid border-[color:var(--Theme-Primary-Default,#4C6FFF)] max-md:px-5">
          Add
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Recipt_Form