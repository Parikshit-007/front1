import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { useNavigate } from 'react-router-dom'

const Accounts = () => {
    const navigate = useNavigate();
    const handle =()=>{
        navigate("/Accounts/Account_Profile")
    }
  return (
    <div className=''><Breadcrumb></Breadcrumb>  <div className="flex  w-[1100px] flex-col px-9 py-0 bg-slate-50 max-md:px-5">
    <div className="px-0.5 mt-11 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center px-5 py-5 w-full bg-white rounded-2xl max-md:mt-6">
            <div className="flex flex-col w-full bg-white rounded-2xl">
              <div className="flex gap-5 justify-between">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a77c36a1d0df738faec2649026ccba4459aea20b96872db670d5d2262e0ddb9?apiKey=8d6992485656477797592f8415f51272&"
                  className="w-11 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b68ffd62a17e75ede0107144b238aa5ef524f32d38b7cbe7b5eeaad311bb0280?apiKey=8d6992485656477797592f8415f51272&"
                  className="my-auto w-6 aspect-square"
                />
              </div>
              <div className="mt-6 text-base font-medium tracking-wide text-slate-900">
                Total Balance Payment
              </div>
              <div className="mt-1.5 text-2xl font-bold tracking-wide text-zinc-800">
                68,000.00
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center px-5 py-5 w-full bg-white rounded-2xl max-md:mt-6">
            <div className="flex flex-col w-full bg-white rounded-2xl">
              <div className="flex gap-5 justify-between">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/82340bacd646d3766ac882f583af1ef2c28709536a1e0493850260437ae46f81?apiKey=8d6992485656477797592f8415f51272&"
                  className="w-11 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b68ffd62a17e75ede0107144b238aa5ef524f32d38b7cbe7b5eeaad311bb0280?apiKey=8d6992485656477797592f8415f51272&"
                  className="my-auto w-6 aspect-square"
                />
              </div>
              <div className="mt-6 text-base font-medium tracking-wide text-slate-900">
                Total Expenditure
              </div>
              <div className="mt-1.5 text-2xl font-bold tracking-wide text-zinc-800">
                59,000.00
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center px-5 py-5 w-full bg-white rounded-2xl max-md:mt-6">
            <div className="flex flex-col w-full bg-white rounded-2xl">
              <div className="flex gap-5 justify-between">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b05a0f3e97b32fb0a0bab44f775124d879cbf077cf4cbb333447dcfca7a8936?apiKey=8d6992485656477797592f8415f51272&"
                  className="w-11 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b68ffd62a17e75ede0107144b238aa5ef524f32d38b7cbe7b5eeaad311bb0280?apiKey=8d6992485656477797592f8415f51272&"
                  className="my-auto w-6 aspect-square"
                />
              </div>
              <div className="mt-6 text-base font-medium tracking-wide text-slate-900">
                Total Profit
              </div>
              <div className="mt-1.5 text-2xl font-bold tracking-wide text-zinc-800">
                10,000.00
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center px-5 py-5 w-full bg-white rounded-2xl max-md:mt-6">
            <div className="flex flex-col w-full bg-white rounded-2xl">
              <div className="flex gap-5 justify-between">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/af7d9b0ac30a7f0f7f4bafd31655ccb6fafff1664b0e165d22d6bafb9273452a?apiKey=8d6992485656477797592f8415f51272&"
                  className="w-11 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b68ffd62a17e75ede0107144b238aa5ef524f32d38b7cbe7b5eeaad311bb0280?apiKey=8d6992485656477797592f8415f51272&"
                  className="my-auto w-6 aspect-square"
                />
              </div>
              <div className="mt-6 text-base font-medium tracking-wide text-slate-900">
                Previous Balance
              </div>
              <div className="mt-1.5 text-2xl font-bold tracking-wide text-zinc-800">
                60,000.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-8 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-6 py-11 w-full bg-white rounded-2xl shadow-md max-md:px-5 max-md:mt-8 max-md:max-w-full">
            <div className="flex gap-5 justify-between self-start">
              <div className="flex flex-col flex-1">
                <div className="text-lg font-semibold leading-6 text-gray-900">
                  {" "}
                  Purchase Analytics
                </div>
                <div className="flex gap-5 justify-between mt-7 text-xs font-medium leading-3 whitespace-nowrap text-slate-600">
                  <div className="flex gap-2.5 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94bf7f2d63286499c1c6e947f5d544ff808a40ce37cf73a4a07816b9e38826f?apiKey=8d6992485656477797592f8415f51272&"
                      className="my-auto w-2 aspect-square"
                    />
                    <div>ABC</div>
                  </div>
                  <div className="flex gap-2.5 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/636e1b21ee7a443165b5af8d37ceb2904164d38cda0e921b03070fde4bf0e07a?apiKey=8d6992485656477797592f8415f51272&"
                      className="my-auto w-2 aspect-square"
                    />
                    <div>Purchase</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2.5 self-end mt-11 text-xs font-medium leading-3 whitespace-nowrap text-slate-600 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d4ffd350ca550234a72652240940c9a870d467369e85c694e4044e114765422?apiKey=8d6992485656477797592f8415f51272&"
                  className="my-auto w-2 aspect-square"
                />
                <div>ABC</div>
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col justify-between self-start text-xs font-semibold tracking-normal leading-3 whitespace-nowrap basis-0 text-slate-600 max-md:hidden">
                <div>20</div>
                <div className="mt-10">15</div>
                <div className="mt-10">10</div>
                <div className="mt-9">5</div>
                <div className="mt-10">0</div>
              </div>
              <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col flex-1 justify-end">
                  <div className="flex gap-1.5 justify-center px-px">
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-16 bg-indigo-400 h-[116px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                    <div className="w-2 bg-rose-300 h-[232px] rounded-[50px]" />
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-32 bg-[linear-gradient(225deg,#FFEF5E_0%,#F7936F_100%)] h-[58px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs font-semibold tracking-normal leading-3 text-center text-slate-500">
                    2/1/24
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-end">
                  <div className="flex gap-1.5 justify-center px-px">
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-16 bg-indigo-400 h-[116px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-32 bg-rose-300 h-[58px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-16 bg-[linear-gradient(225deg,#FFEF5E_0%,#F7936F_100%)] h-[116px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs font-semibold tracking-normal leading-3 text-center text-slate-500">
                    3/1/24
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-end">
                  <div className="flex gap-1.5 justify-center px-px">
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-32 bg-indigo-400 h-[58px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-2 bg-rose-300 h-[174px] rounded-[50px]" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-32 bg-[linear-gradient(225deg,#FFEF5E_0%,#F7936F_100%)] h-[58px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs font-semibold tracking-normal leading-3 text-center text-slate-500">
                    4/1/24
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-end">
                  <div className="flex gap-1.5 justify-center px-px">
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-16 bg-indigo-400 h-[116px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-32 bg-rose-300 h-[58px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-32 bg-[linear-gradient(225deg,#FFEF5E_0%,#F7936F_100%)] h-[58px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs font-semibold tracking-normal leading-3 text-center text-slate-500">
                    5/1/24
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-end">
                  <div className="flex gap-1.5 justify-center px-px">
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-16 bg-indigo-400 h-[116px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-2 bg-rose-300 h-[174px] rounded-[50px]" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-32 bg-[linear-gradient(225deg,#FFEF5E_0%,#F7936F_100%)] h-[58px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs font-semibold tracking-normal leading-3 text-center text-slate-500">
                    6/1/24
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-end">
                  <div className="flex gap-1.5 justify-center px-px">
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-16 bg-indigo-400 h-[116px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                    <div className="w-2 bg-rose-300 h-[232px] rounded-[50px]" />
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-32 bg-[linear-gradient(225deg,#FFEF5E_0%,#F7936F_100%)] h-[58px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs font-semibold tracking-normal leading-3 text-center text-slate-500">
                    7/1/24
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-end">
                  <div className="flex gap-1.5 justify-center px-px">
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-2 bg-indigo-400 h-[174px] rounded-[50px]" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-16 bg-rose-300 h-[116px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center basis-0">
                      <div className="flex flex-col pt-12 bg-white rounded-[50px]">
                        <div className="shrink-0 mt-32 bg-[linear-gradient(225deg,#FFEF5E_0%,#F7936F_100%)] h-[58px] rounded-[50px] max-md:mt-10" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs font-semibold tracking-normal leading-3 text-center text-slate-500">
                    8/1/24
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-5 py-5 mx-auto w-full font-medium whitespace-nowrap bg-white rounded-2xl max-md:mt-8">
            <div className="flex gap-5 justify-between px-px text-2xl bg-white rounded-2xl text-zinc-800">
              <div>Cards</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f0b64f2adedcca0824d2729beb9680a3e6fdf4a5a9b30804c2de2eda7d151b4?apiKey=8d6992485656477797592f8415f51272&"
                className="my-auto w-5 aspect-square"
              />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/969802fae243545126c8f8254f7f03905a91aedb81ddbe3254ba4520c0268a97?apiKey=8d6992485656477797592f8415f51272&"
              className="mt-4 w-full aspect-[1.79] max-md:mr-1.5"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb669bbfed09f7cd6973460b910cdf5652697779f4283bf223bb17defa650331?apiKey=8d6992485656477797592f8415f51272&"
              className="mt-3 w-full aspect-[1.79] max-md:mr-1.5"
            />
            <div className="flex flex-col justify-center px-14 py-3.5 mt-5 w-full text-base text-white bg-blue-700 rounded-md max-md:px-5">
              <div className="flex gap-1 justify-between bg-blue-700 rounded-md">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb363924f6267d3b1d43467bf61a7ab1b156e5bbd255b62d09a5dd6b93bb2b47?apiKey=8d6992485656477797592f8415f51272&"
                  className="w-6 aspect-square"
                />
                <div className="grow">Create new card</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col px-7 pt-6 pb-12 mt-8 bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2.5 justify-between text-lg font-medium text-zinc-800 max-md:flex-wrap max-md:max-w-full">
        <div className="grow my-auto text-xl text-white whitespace-nowrap">
          Quick Transaction View
        </div>
        <div className="flex gap-5 justify-between px-5 py-3 rounded-xl bg-neutral-100 max-md:pr-5">
          <div className="flex-auto">Search history...</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdc51f2cc81ec268f995191c03c97755720e9efde6aa3ac486a36fca80255d06?apiKey=8d6992485656477797592f8415f51272&"
            className="self-start w-5 aspect-square"
          />
        </div>
        <div className="flex gap-4 justify-between px-4 py-3 whitespace-nowrap rounded-xl border border-solid border-zinc-800 border-opacity-20">
          <div className="flex gap-3 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73053316b3cfc28e0f8d6558820305b3200f894bb654cbe0609b777618d45096?apiKey=8d6992485656477797592f8415f51272&"
              className="self-start w-5 aspect-square"
            />
            <div className="grow">10 May - 20 May</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6e9f8895121c542af7feaaef16c871fed5a2053a69b7374654c13b8f0ef354e?apiKey=8d6992485656477797592f8415f51272&"
            className="my-auto w-4 aspect-square"
          />
        </div>
        <button className="flex flex-col flex-1 justify-center px-6 py-2.5 my-auto text-xs font-semibold text-white whitespace-nowrap bg-blue-700 rounded-md max-md:pr-5" onClick={handle}>
          <div className="flex gap-2 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0570948a793a3965f0fba67e6b1e06149d90ae89a7e5e8b8745f07fc610b38b4?apiKey=8d6992485656477797592f8415f51272&"
              className="w-5 aspect-square"
            />
            <div className="grow">Add new data</div>
          </div>
        </button>
      </div>
      <div className="flex gap-0 justify-between items-start px-px mt-6 mb-44 max-md:flex-wrap max-md:mb-10 max-md:max-w-full">
        <div className="flex flex-col flex-1 self-stretch">
          <div className="justify-center items-start py-4 pr-16 pl-6 text-xs font-medium tracking-wider leading-4 text-black uppercase whitespace-nowrap bg-indigo-100 shadow-sm max-md:px-5">
            name
          </div>
          <div className="flex gap-4 justify-between mt-3 text-lg text-zinc-800">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/58de0f3c8187d99f12e55584b7111ca4ce579748696c9de35f1a2a2257b490c1?apiKey=8d6992485656477797592f8415f51272&"
              className="aspect-square w-[50px]"
            />
            <div className="flex-auto my-auto">Adobe After Effect</div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="justify-center items-start py-4 pr-16 pl-6 text-xs font-medium tracking-wider leading-4 text-black uppercase whitespace-nowrap bg-indigo-100 shadow-sm max-md:px-5">
            Date
          </div>
          <div className="self-start mt-8 ml-6 text-lg text-zinc-800 max-md:ml-2.5">
            Sat, 20 Apr 2022
          </div>
        </div>
        <div className="flex flex-col flex-1 whitespace-nowrap">
          <div className="justify-center items-start py-4 pr-16 pl-6 text-xs font-medium tracking-wider leading-4 text-black uppercase bg-indigo-100 shadow-sm max-md:px-5">
            Price
          </div>
          <div className="self-center mt-7 text-lg text-zinc-800">$80.09</div>
        </div>
        <div className="flex flex-col flex-1 text-xs font-medium whitespace-nowrap">
          <div className="justify-center items-start py-4 pr-16 pl-6 tracking-wider text-black uppercase bg-indigo-100 shadow-sm leading-[133%] max-md:px-5">
            status
          </div>
          <div className="justify-center self-end px-9 py-1.5 mt-5 mr-3 text-green-600 bg-emerald-50 rounded-[1234.722px] max-md:px-5 max-md:mr-2.5">
            Completed
          </div>
        </div>
        <div className="flex flex-col whitespace-nowrap basis-0">
          <div className="justify-center px-6 py-4 text-xs font-medium tracking-wider leading-4 text-black uppercase bg-indigo-100 shadow-sm max-md:px-5">
            actions
          </div>
          <div className="flex gap-1.5 justify-center self-center px-3 py-1.5 mt-5 text-xs font-bold leading-4 text-white bg-blue-500 rounded-md">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/76828f17d2673f1e9cf70797b669587e95500a65e8b3e42b60e50994ba403736?apiKey=8d6992485656477797592f8415f51272&"
              className="aspect-square fill-white w-[13px]"
            />
            <div className="grow self-start mt-1">Download</div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Accounts