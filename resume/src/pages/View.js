import React, { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import {ViewArray} from "../utils/arrayMap";
import { useSelector , useDispatch} from "react-redux";
import { GetViewSlice} from "../redux/slices/viewSlice";


export default function View(){

    const {viewResume} = useSelector((state) => state.ViewSlice)
    const {IsLogged,UserName} = useSelector((state) => state.mainSlice)

    const dispatch = useDispatch()

    const Navigate =useNavigate()
    const params = useParams()

    useEffect(() =>{
        if(!IsLogged){
            Navigate('/')
        }
    },[IsLogged])

    useEffect(() =>{
        dispatch(GetViewSlice(params.id,UserName));
    },[params.id])

    return(
        <>
        {viewResume && (
             <div className="w-100 px-2 py-2">
                <h1 className="text-center">RESUME</h1>
                <div className="container-fluid py-3">
                    <div>
                        <label className="fs-1 fw-bold "><span>{viewResume.name}</span></label>
                        <label className="fs-1 fw-bold float-end"><span>{viewResume.role}</span></label>
                    </div>
                    <hr className="border border-5 border-dark bg-dark"/>
                    <div>
                        <h4 className="text-center"> <span>Phone:{viewResume.phone}</span> | <span>Email:{viewResume.email}</span> | <span>LinkedIn:{viewResume.linked}</span></h4>
                    </div>
                    <div className="row my-3 border border-2 border-dark m-0">
                        <div className="col-6">
                            <div>
                                <h3 className="text-uppercase">Objective</h3>
                                <p className="fs-"><span className="me-5"></span>{viewResume.objective}</p>
                            </div>
                            <hr className="border border-dark bg-dark"/>
                            <div>
                                <h3 className="text-uppercase">Education</h3>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">course</th >
                                            <th scope="col">year</th >
                                            <th scope="col">Institute</th >
                                            <th scope="col">stream</th >
                                            <th scope="col">Percentage</th >
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {viewResume.education.map((val,index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{val.course}</td>
                                                <td>{val.year}</td>
                                                <td>{val.institute}</td>
                                                <td>{val.stream}</td>
                                                <td>{val.percentage}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <hr className="border border-dark bg-dark"/>
                            <div className="skills">
                                <h3>SKILLS</h3>
                                <ul>
                                    <ViewArray keys='skills' /> 
                                </ul>
                            </div>
                            <hr className="border border-dark"/>
                            <div className="computer">
                                <h3 className="text-uppercase">computer_literacy</h3>
                                <ul>
                                    <ViewArray keys='computer_literacy' /> 
                                </ul>
                            </div>
                        </div> 
                        <div className="col d-flex justify-content-center my-2">
                            <div className="border border-2 "></div>
                        </div>
                        <div className="col-5">
                            <div className="interest">
                                <h3>INTERESTS</h3>
                                <ul>
                                    <ViewArray keys='interests' /> 
                                </ul>
                            </div>
                            <hr className="border border-dark bg-dark"/>
                            <div className="personal_detail">
                                <h3>PERSONAL DETAILS :</h3>
                                <div className="w-100">
                                    <span className="fs-5 fw-semibold d-inline-block w-50">Father Name</span><span className="fs-5 fw-normal">:{viewResume.personal_details.father_name} </span><br/>
                                    <span className="fs-5 fw-semibold d-inline-block w-50">Father's Occupation</span><span className="fs-5 fw-normal">:{viewResume.personal_details.father_occupation} </span><br/>
                                    <span className="fs-5 fw-semibold d-inline-block w-50">Siblings</span><span className="fs-5 fw-normal">:{viewResume.personal_details.siblings} </span><br/>
                                    <span className="fs-5 fw-semibold d-inline-block w-50">Date of Birth</span><span className="fs-5 fw-normal">:{viewResume.personal_details.DOB} </span><br/>
                                    <span className="fs-5 fw-semibold d-inline-block w-50">Age</span><span className="fs-5 fw-normal">:{viewResume.personal_details.Age} </span><br/>
                                    <span className="fs-5 fw-semibold d-inline-block w-50">Marital_status</span><span className="fs-5 fw-normal">:{viewResume.personal_details.marital_status} </span><br/>
                                    <span className="fs-5 fw-semibold d-inline-block w-50">Nationality</span><span className="fs-5 fw-normal">:{viewResume.personal_details.nationality} </span><br/>
                                </div>
                            </div>
                            <hr className="border border-dark bg-dark"/>
                            <div className="declaration">
                                <h3 className="text-uppercase">Declaration:</h3>
                                <p className="fs-4 fw-normal"><span className="me-5 "></span>{viewResume.declaration}</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        )}
       
        </>
    )
}