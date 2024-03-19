import React from "react";
import chart from "../../Data/chart.png";
import pie from "../../Data/pie.png";
import PatientGraph from "../PatientGraph";
const Home = () => {
  return (
    <div>
      <div className="w-[1100px] relative bg-whitesmoke h-[870px] flex flex-col items-start justify-start p-[30px] box-border gap-[30px] text-left text-sm text-black font-text-small">
        <div className="flex w-[1090px] gap-5 justify-between whitespace-nowrap max-md:flex-wrap">
          <div className="flex flex-col flex-1 justify-center p-6 bg-white rounded-2xl shadow-md max-md:px-5">
            <div className="flex gap-4 justify-between">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99202057085f6f91af2056bc6d19d1a40ad9473cdb467d174061ab4e51150410?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                className="aspect-square w-[46px]"
              />
              <div className="flex flex-col flex-1 self-start">
                <div className="text-sm font-medium text-slate-500">
                  Patients on-board
                </div>
                <div className="text-xl font-semibold leading-7 text-gray-900">
                  2.300
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center p-6 bg-white rounded-2xl shadow-md max-md:px-5">
            <div className="flex gap-4 justify-between">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b0d4a25ded797bf0cd0de5ce2cc280a1b3050c300deb67e46af3f5e3179fa1c?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                className="aspect-square w-[46px]"
              />
              <div className="flex flex-col flex-1 self-start">
                <div className="text-sm font-medium text-slate-500">
                  Doctors on-board
                </div>
                <div className="text-xl font-semibold leading-7 text-gray-900">
                  200
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center p-6 bg-white rounded-2xl shadow-md max-md:px-5">
            <div className="flex gap-4 justify-between">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7aadeb46d60ef7147ca9e984f588045ad1cb3b24949c7200303f1adf7875caa?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                className="aspect-square w-[46px]"
              />
              <div className="flex flex-col flex-1 self-start">
                <div className="text-sm font-medium text-slate-500">
                  Hospitals on-board
                </div>
                <div className="text-xl font-semibold leading-7 text-gray-900">
                  23
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center p-6 bg-white rounded-2xl shadow-md max-md:px-5">
            <div className="flex gap-4 justify-between">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecbfb9469c216331a1f2af47ee338c1c0da4d53c207edb23ea2e32cd0cca7df4?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                className="aspect-square w-[46px]"
              />
              <div className="flex flex-col flex-1 self-start">
                <div className="text-sm font-medium text-slate-500">
                  Medicine Stocks
                </div>
                <div className="text-xl font-semibold leading-7 text-gray-900">
                  557+
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative h-[402px] text-table-body-strong">
          <div className="absolute top-[255.73px] left-[858.54px] w-[251.46px] h-[146.27px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] hidden">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_0px_1px_rgba(12,26,_75,_0.24),_0px_3px_8px-1px_rgba(50,_50,_71,_0.05)]">
                <div className="absolute h-[calc(100%-_0.27px)] w-[calc(100%-_0.46px)] top-[0px] right-[0.46px] bottom-[0.27px] left-[0px] rounded-2xl bg-theme-white-default" />
              </div>
            </div>
            <div className="absolute bottom-[19.27px] left-[19.28px] leading-[23px] hidden">
              Follow your statistics.
            </div>
            <div className="absolute w-[calc(100%_-_35.46px)] top-[20px] right-[16.46px] left-[19px] h-[46px] hidden text-smi text-input-muted-placeholder">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray-200 [backdrop-filter:blur(10px)]" />
              </div>
              <div className="absolute top-[calc(50%_-_6px)] left-[16px] leading-[13px] font-medium inline-block w-[81px] h-[11px]">
                E-mail
              </div>
              <div className="absolute h-[calc(100%_-_10px)] top-[5px] right-[4px] bottom-[5px] flex flex-col items-start justify-start text-xs text-theme-white-default">
                <div className="flex flex-col items-start justify-start">
                  <div className="rounded-md bg-theme-primary-default flex flex-col items-center justify-start py-3 px-5">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <img
                        className="w-3 relative h-3 hidden"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="relative leading-[12px] font-semibold">
                        Subscribe
                      </div>
                      <img
                        className="w-2.5 relative h-2.5 hidden"
                        alt=""
                        src="/chevronright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-[100px] ">
            <PatientGraph />
          </div>

          <div className="absolute top-[0px] left-[831.51px] w-[253.04px] h-[402px] flex flex-col items-start justify-start gap-[30px] text-smi text-input-muted-placeholder">
            <div className="self-stretch rounded-2xl bg-theme-white-default shadow-[0px_0px_1px_rgba(12,26,_75,_0.24),_0px_3px_8px-1px_rgba(50,_50,_71,_0.05)] flex flex-col items-start justify-start p-6 gap-[24px]">
              <div className="w-[162px] relative h-12">
                <div className="absolute h-[95.83%] w-[101.85%] top-[2.08%] right-[-2.17%] bottom-[2.08%] left-[0.31%] rounded-2xl hidden">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray-200 [backdrop-filter:blur(10px)]" />
                </div>
                <div className="absolute top-[calc(50%_-_6px)] left-[16.51px] leading-[13px] font-medium hidden w-[81px] h-[11px]">
                  E-mail
                </div>
                <div className="absolute h-full top-[0px] right-[0.51px] bottom-[0px] w-[161px] flex flex-col items-start justify-start text-sm text-theme-white-default">
                  <div className="w-[218px] flex flex-col items-start justify-start">
                    <div className="w-[207px] rounded-md bg-theme-primary-dark flex flex-col items-center justify-start py-4 px-6 box-border">
                      <div className="flex flex-row items-center justify-start gap-[10px]">
                        <div className="relative leading-[14px] font-semibold">
                          Notifications
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[217px] relative text-sm leading-[23px] text-table-body-strong inline-block">
                Check updates, notifications etc
              </div>
            </div>
            <div className="self-stretch rounded-2xl bg-theme-white-default shadow-[0px_0px_1px_rgba(12,26,_75,_0.24),_0px_3px_8px-1px_rgba(50,_50,_71,_0.05)] flex flex-col items-start justify-start p-6 gap-[24px] text-base text-theme-dark-default">
              <div className="relative leading-[25px] font-semibold whitespace-pre-wrap">
                OPD Insights
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-xs text-text-heading-dark">
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                      <div className="w-2 relative rounded-[50%] bg-theme-primary-default h-2" />
                      <div className="relative leading-[16px] font-semibold">
                        8
                      </div>
                    </div>
                    <div className="self-stretch relative text-3xs text-text-body-muted">
                      Beds available
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                      <div className="w-2 relative rounded-[50%] bg-theme-tertiary-default h-2" />
                      <div className="relative leading-[16px] font-semibold">
                        5
                      </div>
                    </div>
                    <div className="self-stretch relative text-3xs text-text-body-muted">
                      Wards available
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                      <div className="w-2 relative rounded-[50%] bg-theme-secondary-dark h-2" />
                      <div className="relative leading-[16px] font-semibold">
                        2
                      </div>
                    </div>
                    <div className="self-stretch relative text-3xs text-text-body-muted">
                      Beds not in use
                    </div>
                  </div>
                </div>
                <div className="w-[117px] relative h-[115px] text-center text-xl">
                  <img
                    className="absolute top-[calc(50%_-_57.5px)] right-[0px] w-[117px] h-[115px]"
                    alt=""
                    src={pie}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative h-[22px] text-right text-theme-primary-default">
          <div className="absolute top-[0px] left-[0px] w-[1110px] h-[22px]">
            <div className="absolute w-[6.31%] top-[120px] left-[92.05%] font-medium inline-block">
              Show all
            </div>
            <div className="absolute w-[9.91%] top-[90px] left-[5%] text-lg font-semibold text-text-heading-dark text-left inline-block">
              Visits
            </div>
          </div>
        </div>
        <div className="w-[1090px]  flex flex-row items-start justify-start gap-[30px] text-xs text-text-body-muted">
          <div className="w-[255px] top-[100px] relative rounded-2xl shadow-[0px_3px_8px_rgba(50,_50,_71,_0.05),_0px_0px_1px_rgba(12,_26,_75,_0.24)] h-[202px] overflow-hidden shrink-0">
            <div className="flex flex-col px-4 pt-3 pb-12 bg-white rounded-2xl shadow-md max-w-[255px]">
              <div className="flex gap-5 justify-between w-full">
                <div className="flex gap-3.5 justify-between text-xs font-semibold leading-3 text-slate-500">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32c24cbad50e6b407141c764523ec128b351e8f67f43c7adedaf5546c0485d32?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c24cbad50e6b407141c764523ec128b351e8f67f43c7adedaf5546c0485d32?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c24cbad50e6b407141c764523ec128b351e8f67f43c7adedaf5546c0485d32?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c24cbad50e6b407141c764523ec128b351e8f67f43c7adedaf5546c0485d32?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c24cbad50e6b407141c764523ec128b351e8f67f43c7adedaf5546c0485d32?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c24cbad50e6b407141c764523ec128b351e8f67f43c7adedaf5546c0485d32?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c24cbad50e6b407141c764523ec128b351e8f67f43c7adedaf5546c0485d32?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c24cbad50e6b407141c764523ec128b351e8f67f43c7adedaf5546c0485d32?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-10 bg-indigo-500 rounded-full aspect-square"
                  />
                  <div className="my-auto">24 April ‘24</div>
                </div>
                <div className="flex gap-1 my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ca3817529e6c340a83dcd243ccf7fa540897be818e7e2039496eaad4edf99f9?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-1 aspect-square fill-slate-600"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ca3817529e6c340a83dcd243ccf7fa540897be818e7e2039496eaad4edf99f9?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-1 aspect-square fill-slate-600"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ca3817529e6c340a83dcd243ccf7fa540897be818e7e2039496eaad4edf99f9?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-1 aspect-square fill-slate-600"
                  />
                </div>
              </div>
              <div className="mt-10 text-sm font-medium leading-5 text-black whitespace-nowrap">
                Complete Blood Count (CBC)
              </div>
              <div className="mt-6 text-xs font-semibold text-blue-500">
                Dr. Shimron Hetmyer
              </div>
            </div>
          </div>
          <div className="w-[255px] top-[100px] relative rounded-2xl shadow-[0px_3px_8px_rgba(50,_50,_71,_0.05),_0px_0px_1px_rgba(12,_26,_75,_0.24)] h-[202px] overflow-hidden shrink-0">
            <div className="flex flex-col px-4 pt-2.5 pb-12 bg-white rounded-2xl shadow-md max-w-[255px]">
              <div className="flex gap-5 justify-between w-full">
                <div className="flex gap-4 justify-between text-xs font-semibold leading-3 text-slate-500">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61d679a8764d9b13940afe4dd30347aa1efe1632bccef35d735cb407392e189d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d679a8764d9b13940afe4dd30347aa1efe1632bccef35d735cb407392e189d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d679a8764d9b13940afe4dd30347aa1efe1632bccef35d735cb407392e189d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d679a8764d9b13940afe4dd30347aa1efe1632bccef35d735cb407392e189d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d679a8764d9b13940afe4dd30347aa1efe1632bccef35d735cb407392e189d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d679a8764d9b13940afe4dd30347aa1efe1632bccef35d735cb407392e189d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d679a8764d9b13940afe4dd30347aa1efe1632bccef35d735cb407392e189d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d679a8764d9b13940afe4dd30347aa1efe1632bccef35d735cb407392e189d?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-10 bg-orange-600 rounded-full aspect-square"
                  />
                  <div className="my-auto">31 April ‘24</div>
                </div>
                <div className="flex gap-1 my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ca3817529e6c340a83dcd243ccf7fa540897be818e7e2039496eaad4edf99f9?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-1 aspect-square fill-slate-600"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ca3817529e6c340a83dcd243ccf7fa540897be818e7e2039496eaad4edf99f9?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-1 aspect-square fill-slate-600"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ca3817529e6c340a83dcd243ccf7fa540897be818e7e2039496eaad4edf99f9?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-1 aspect-square fill-slate-600"
                  />
                </div>
              </div>
              <div className="mt-10 text-sm font-medium leading-5 text-black whitespace-nowrap">
                Clinic Visit Appointment
              </div>
              <div className="mt-6 text-xs font-semibold text-blue-500">
                Dr. Shilpa Rao
              </div>
            </div>
          </div>
          <div className="w-[255px] top-[100px] relative rounded-2xl shadow-[0px_3px_8px_rgba(50,_50,_71,_0.05),_0px_0px_1px_rgba(12,_26,_75,_0.24)] h-[202px] overflow-hidden shrink-0">
            <div className="flex flex-col px-4 pt-2 pb-12 bg-white rounded-2xl shadow-md max-w-[255px]">
              <div className="flex gap-5 justify-between w-full">
                <div className="flex gap-4 justify-between text-xs font-semibold leading-3 text-slate-500">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/656a7bf2bc85a38bb35a6f4dee5ae3ccb79b756d1616bc407e02f972ac529ce6?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/656a7bf2bc85a38bb35a6f4dee5ae3ccb79b756d1616bc407e02f972ac529ce6?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/656a7bf2bc85a38bb35a6f4dee5ae3ccb79b756d1616bc407e02f972ac529ce6?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/656a7bf2bc85a38bb35a6f4dee5ae3ccb79b756d1616bc407e02f972ac529ce6?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/656a7bf2bc85a38bb35a6f4dee5ae3ccb79b756d1616bc407e02f972ac529ce6?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/656a7bf2bc85a38bb35a6f4dee5ae3ccb79b756d1616bc407e02f972ac529ce6?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/656a7bf2bc85a38bb35a6f4dee5ae3ccb79b756d1616bc407e02f972ac529ce6?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/656a7bf2bc85a38bb35a6f4dee5ae3ccb79b756d1616bc407e02f972ac529ce6?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-10 bg-indigo-500 rounded-full aspect-square"
                  />
                  <div className="my-auto">2 June ‘24</div>
                </div>
                <div className="flex gap-1 my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ca3817529e6c340a83dcd243ccf7fa540897be818e7e2039496eaad4edf99f9?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-1 aspect-square fill-slate-600"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ca3817529e6c340a83dcd243ccf7fa540897be818e7e2039496eaad4edf99f9?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-1 aspect-square fill-slate-600"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ca3817529e6c340a83dcd243ccf7fa540897be818e7e2039496eaad4edf99f9?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-1 aspect-square fill-slate-600"
                  />
                </div>
              </div>
              <div className="mt-11 text-sm font-medium leading-5 text-black whitespace-nowrap">
                Video Consultation Chat
              </div>
              <div className="mt-6 text-xs font-semibold text-blue-500">
                Dr. Kartik Shukla
              </div>
            </div>
          </div>
          <div className="w-[255px] top-[100px] relative rounded-2xl shadow-[0px_3px_8px_rgba(50,_50,_71,_0.05),_0px_0px_1px_rgba(12,_26,_75,_0.24)] h-[202px] overflow-hidden shrink-0">
            <div className="flex flex-col px-4 pt-2 pb-12 bg-white rounded-2xl shadow-md max-w-[255px]">
              <div className="flex gap-5 justify-between w-full">
                <div className="flex gap-4 justify-between text-xs font-semibold leading-3 text-slate-500">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a618c1a2b93838c6a6f367c3283ed2474487322d2a0e0c0e45ba584b6622e134?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a618c1a2b93838c6a6f367c3283ed2474487322d2a0e0c0e45ba584b6622e134?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a618c1a2b93838c6a6f367c3283ed2474487322d2a0e0c0e45ba584b6622e134?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a618c1a2b93838c6a6f367c3283ed2474487322d2a0e0c0e45ba584b6622e134?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a618c1a2b93838c6a6f367c3283ed2474487322d2a0e0c0e45ba584b6622e134?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a618c1a2b93838c6a6f367c3283ed2474487322d2a0e0c0e45ba584b6622e134?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a618c1a2b93838c6a6f367c3283ed2474487322d2a0e0c0e45ba584b6622e134?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a618c1a2b93838c6a6f367c3283ed2474487322d2a0e0c0e45ba584b6622e134?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-10 bg-orange-600 rounded-full aspect-square"
                  />
                  <div className="my-auto">24 April ‘24</div>
                </div>
                <div className="flex gap-1 my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ca3817529e6c340a83dcd243ccf7fa540897be818e7e2039496eaad4edf99f9?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-1 aspect-square fill-slate-600"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ca3817529e6c340a83dcd243ccf7fa540897be818e7e2039496eaad4edf99f9?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-1 aspect-square fill-slate-600"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ca3817529e6c340a83dcd243ccf7fa540897be818e7e2039496eaad4edf99f9?apiKey=8cd55a55d3fd4759ad0a38ee8bf55a48&"
                    className="w-1 aspect-square fill-slate-600"
                  />
                </div>
              </div>
              <div className="mt-11 text-sm font-medium leading-5 text-black whitespace-nowrap">
                Magnetic Resonance Imaging{" "}
              </div>
              <div className="mt-6 text-xs font-semibold text-blue-500">
                Dr. Shirya Dutta
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
