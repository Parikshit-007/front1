import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Plus from "../../../Data/Plus.png";
import download from "../../../Data/download.png";
import search from "../../../Data/search.png";
import edit from "../../../Data/edit.png";

import generatePDF from "react-to-pdf";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
  makeStyles,
  TBody,
  Paper,
  TableContainer,
  TablePagination,
  Button,
  Typography,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb";
const   Recipt_Voucher = () => {
  const API = "http://127.0.0.1:8000/api/patient/api/patients/";
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async (api) => {
    try {
      const res = await axios.get(api);
      setMyData(res.data);
    } catch (error) {
      setIsError(error.toJSON().message);
    }
  };
  useEffect(() => {
    getApiData(API);
  }, []);

  const navigate = useNavigate();
  const handle = () => {
    navigate("/Patient/Patient_Details/Add_Patient");
  };
  const navigate1 = useNavigate();
  const handle1 = () => {
    navigate1(`/Patient/Patient_Details/Patient_Profile/${myData}`);
  };

  const handlechangepage = (event, newpage) => {
    setPage(newpage);
  };
  const handleRowPerPage = (event) => {
    setRowPerPage(parseInt(event.target.value, 20));
    setPage(0);
  };
  const [page, setPage] = useState(0);
  const [rowperpage, setRowPerPage] = useState(20);

  const targetRef = useRef();
  
  const [searh, setSearch] = useState("");
  //const urlName = user.FirstName.replace(/\s+/g, "-").toLowerCase();
  return (
    <div>
      
      <div className="w-[950px] ml-[70px] mt-0 relative bg-whitesmoke h-[984px] flex flex-col items-center justify-start pt-0 px-[30px] pb-[30px] box-border text-left text-xs text-f2d3d font-table-body-heading">
        <div className="flex flex-col items-center justify-start pt-5 px-0 pb-0">
          <div className="h-[692px] flex flex-col items-start justify-start">
            <div className="w-[1110px] relative bg-theme-white-default h-[692px] overflow-hidden shrink-0">
              <div className="absolute top-[0px] left-[0px] w-[1110px] flex flex-col items-start justify-start">
                <div className="self-stretch relative h-[60px] overflow-hidden shrink-0">
                  <div className="absolute w-full top-[60px] right-[0px] left-[0px] bg-gray-200 box-border h-0 border-t-[1px] border-solid border-border-light" />
                  <div className="absolute top-[18px] left-[22px] text-[20px] leading-[24px] font-medium">
                  Recipt Voucher
                  </div>
                  <input className="absolute top-[11px] left-[588px] rounded-[30px] bg-theme-white-default box-border w-[161px] h-[38px] border-[1px] border-solid border-black pl-5"  defaultValue={searh} onChange={(e)=>{ setSearch(e.target.value)}}/>
                  <div className="absolute top-[18px] left-[600px] h-[23.75px] flex flex-row  ml-28 items-start justify-start">
                    <img
                      className="w-5 relative h-5  overflow-hidden shrink-0"
                      alt=""
                      src={search}
                    />
                  </div>
                  <button className=" absolute flex flex-col justify-center px-5 py-2.5 text-xs font-semibold text-white whitespace-nowrap bg-blue-700 rounded-md max-w-[171px] left-[940px] mt-[10px] ">
                  <div className="flex gap-2 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/edccc43e4d81938a4e7fd8dc2e0109881995c16b6196bfcea8d14460e252379f?apiKey=8d6992485656477797592f8415f51272&"
                      className="w-5 aspect-square"
                    />
                    <div className="grow">Add new Voucher</div>
                  </div>
                </button>
                  <button
                    className="absolute top-[11px] left-[765px] rounded-md  h-10 bg-theme-white-default box-border w-[156px] flex flex-col items-start justify-start py-2.5 px-5 text-theme-primary-dark border-[1px] border-solid border-theme-primary-dark"
                    onClick={() =>
                      generatePDF(targetRef, {
                        filename: "Dishcharged_Patient_List.pdf",
                      })
                    }
                  >
                    <div className="w-24 my-0 mx-[!important] absolute top-[calc(50%_-_8px)] left-[calc(50%_-_48px)] flex flex-row items-center justify-start gap-[8px] z-[0]">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src={download}
                      />
                      <div className="relative font-semibold">Download </div>
                    </div>
                  </button>
                </div>
                <div className="self-stretch  h-[572px] overflow-hidden shrink-0  items-start justify-start text-text-body-light">
                  <page>
                    <TableContainer ref={targetRef}>
                      <Table>
                        <TableHead className=" bg-indigo-100 w-full">
                          <TableRow>
                            <TableCell>Patient ID</TableCell>
                            <TableCell>Name </TableCell>
                            <TableCell>Sex</TableCell>
                            <TableCell>Blood</TableCell>
                            <TableCell>Date Of Birth</TableCell>
                            <TableCell>Contact Number</TableCell>
                            <TableCell>Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {myData
                            .slice(
                              page * rowperpage,
                              page * rowperpage + rowperpage
                            ).filter((item)=>
                            searh.toLowerCase() === '' ||
                            item.FirstName.toLowerCase().includes(searh)
                          )
                            .map((user) => (
                              <TableRow key={user.PatientID}>
                                <TableCell>{user.PatientID}</TableCell>
                                <TableCell>{user.FirstName} </TableCell>
                                <TableCell>{user.Gender}</TableCell>
                                <TableCell>{user.blood}</TableCell>
                                <TableCell>{user.DOB}</TableCell>
                                <TableCell>{user.phone}</TableCell>

                                <div className="w-[190px] relative my-0 mx-[!important] left-[0px] bg-theme-white-default shadow-[0px_-1px_0px_#edf2f7_inset] h-[52px] overflow-hidden shrink-0 z-[22]">
                                  <img
                                    className="absolute top-[calc(50%_-_12px)] left-[24px] w-6 h-6 hidden"
                                    alt=""
                                    src=""
                                  />
                                  <img
                                    className="absolute top-[calc(50%_-_12px)] left-[21px] w-6 h-6 overflow-hidden"
                                    alt=""
                                    src={edit}
                                  />
                                  <Link
                                    className="absolute top-[13px] left-[71px] rounded flex flex-col items-center justify-start py-2 px-4 border-[1px] border-solid border-royalblue"
                                    to={`/Patient/Patient_Details/${user.PatientID}`}                                 >
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                      <img
                                        className="w-2.5 relative h-2.5 hidden"
                                        alt=""
                                        src="/icon.svg"
                                      />
                                      <div className="relative leading-[10px] font-medium">
                                        View
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                      <TablePagination
                        count={20}
                        page={page}
                        rowperpage={rowperpage}
                        component="div"
                        onPageChange={handlechangepage}
                        onRowsPerPageChange={handleRowPerPage}
                      ></TablePagination>
                    </TableContainer>
                  </page>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  Recipt_Voucher;
