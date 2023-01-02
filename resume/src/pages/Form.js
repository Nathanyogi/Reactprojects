import React, {useEffect, useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import ArrayMap from "../utils/arrayMap";
import axios from 'axios';
import '../App.css';
import { useSelector ,useDispatch} from "react-redux";
import { setIsLogged, setUserName } from "../redux/slices/mainSlice";
import { setTemp,setResumeData ,setGetUserResume} from "../redux/slices/fromSlice";



export default function Home(){


    const Navigate = useNavigate()
    const dispatch = useDispatch()

    const{IsLogged,UserName} = useSelector((state) => state.mainSlice)
    const{ResumeData,Temp,getUserResume} = useSelector((state) =>state.FormSlice)

    useEffect(() =>{
        if(!IsLogged){
            Navigate('/')
        }
    })

    
    
    let createResume = async () => {
        let resume_api = {
            request:'create_react_resume',
            user:UserName,
            resume:ResumeData,
        }
        await axios.post('http://karka.academy/api/action.php',JSON.stringify(resume_api))
    }


    let addDetails = (key,value,indexkey) =>{
        let update;
        if(key !== 'personal_details'){
            update = {...ResumeData,[key]:value}
        }
        else{
            update = {...ResumeData,[key]:{...ResumeData[key],[indexkey]:value}}
        }
        dispatch(setResumeData(update))
     }


    let ADD = (key) =>{
        let temp_array ;
        if(key === 'skills' || key ==='computer_literacy' || key === 'interests'){
            if(Temp.skills){
                temp_array = {...ResumeData,[key]:[...ResumeData[key],Temp.skills]}
            }
            else if(Temp.computer_literacy){
                temp_array = {...ResumeData,[key]:[...ResumeData[key],Temp.computer_literacy]}
            }
            else{
                temp_array = {...ResumeData,[key]:[...ResumeData[key],Temp.interests]}
            }
        }
        else if(key ==='education'){
            if(Temp.education){
                temp_array = {...ResumeData,[key]:[...ResumeData[key],Temp.education]}
            }
        }
        dispatch(setTemp({
            skills:"",
            interests:"",
            computer_literacy:"",
            education:{
                course:'',
                year:'',
                institute:'',
                stream:'',
                percentage:'',
            }
        }))
        dispatch(setResumeData(temp_array))
    }

    useEffect(() =>{
        getResume();
    },[getUserResume])
    
    let getResume = async() =>{
        let {data} =  await axios.get(`http://karka.academy/api/action.php?request=get_user_react_resume&&user=${UserName}`)
        dispatch(setGetUserResume(data.data))
    }

    let deleteResume = async(id) =>{
        let {data} = await axios.get(`http://karka.academy/api/action.php?request=delete_react_user_resume&&user=${UserName}&&id=${id}`)
        dispatch(setGetUserResume(data.data))
    }

    let logout = () =>{
        localStorage.setItem('Logindetail',JSON.stringify({status:false,user:''}));
        const LoggedDetail = JSON.parse(localStorage.getItem('Logindetail'))
        dispatch(setIsLogged(LoggedDetail.status));
        dispatch(setUserName(LoggedDetail.user));
    }
    return(
        <>
        {/* nav for from */}
        <nav className="bg-dark py-2 nav-bar">
            <h3 className="text-white d-inline-block ms-2">Resume Generator</h3>
            <button type="button" onClick={() => logout()} className="float-end btn btn-light me-2">LogOut</button>
        </nav>

        <form className="container w-75 mt-4 border border-dark py-2">
            <textarea className="w-100 mb-2" rows={2} placeholder="Objective" onChange={(e) =>addDetails('objective',e.target.value)}/>
            <div className="row mb-2">
                <h4 className="text-center text-uppercase">Contact Details</h4>
                <div className="col-6">
                    <input placeholder="name" className="form-control border-secondary" onChange={(e) =>addDetails('name',e.target.value)}/>
                </div>
                <div className="col-6">
                    <input placeholder="Phone" className="form-control border-secondary" onChange={(e) => addDetails('phone',e.target.value)}/>
                </div>
                <div className="col-6 mt-2">
                    <input placeholder="email" className="form-control border-secondary"  onChange={(e) => addDetails('email',e.target.value)}/>
                </div>
                <div className="col-6 mt-2">
                    <input placeholder="Linked_in" className="form-control border-secondary"  onChange={(e) => addDetails('linked',e.target.value)}/>
                </div>
                <div className="col-6 mt-2">
                    <input placeholder="Role" className="form-control border-secondary"  onChange={(e) => addDetails('role',e.target.value)}/>
                </div>
            </div>
            <h4 className="text-center text-uppercase">Education Details</h4>
            <div className="py-3 px-2">
                <table>
                <thead>
                    <tr>
                        <th className="text-center">course</th >
                        <th className="text-center">year</th >
                        <th className="text-center">Institute</th >
                        <th className="text-center">stream</th >
                        <th className="text-center">Percentage</th >
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input className="form-control border-secondary" value={Temp.education.course} onChange={(e) => dispatch(setTemp({...Temp,education:{...Temp.education,course:e.target.value}}))}/></td>
                        <td><input className="form-control border-secondary" value={Temp.education.year} onChange={(e) => dispatch(setTemp({...Temp,education:{...Temp.education,year:e.target.value}}))}/></td>
                        <td><input className="form-control border-secondary" value={Temp.education.institute} onChange={(e) => dispatch(setTemp({...Temp,education:{...Temp.education,institute:e.target.value}}))}/></td>
                        <td><input className="form-control border-secondary" value={Temp.education.stream} onChange={(e) => dispatch(setTemp({...Temp,education:{...Temp.education,stream:e.target.value}}))}/></td>
                        <td><input className="form-control border-secondary" value={Temp.education.percentage} onChange={(e) => dispatch(setTemp({...Temp,education:{...Temp.education,percentage:e.target.value}}))}/></td>
                    </tr>
                </tbody>
            </table>
                <div className="text-center mt-2">
                    <button type="button" className="btn btn-outline-secondary" onClick={() =>ADD('education')}>Add COURSE</button>
                </div>
            </div>
        
        <div className="row my-3 d-flex justify-content-around text-center">
            <div className="col-5 border border-secondary py-2">
                <label className="fw-bold">SKILLS </label>
                <div className="d-flex">
                    <input className="form-control border-secondary mb-1" placeholder="Skills" value={Temp.skills} onChange={(e) =>dispatch(setTemp({...Temp,skills:e.target.value}))}/>
                    <button type="button" className="ms-2 btn btn-outline-secondary" onClick={() =>ADD ('skills')}>ADD</button>
                </div>
                {ResumeData.skills.length > 0 &&  <ArrayMap keys='skills'/>}
                
            </div>
            <div className="col-5 border border-secondary py-2 text-center">
                <label className="text-uppercase fw-bold">Interests </label><br/>
                <div className="d-flex">
                    <input className="form-control border-secondary mb-1" placeholder="Interest"  value={Temp.interests} onChange={(e) =>dispatch(setTemp({...Temp,interests:e.target.value}))}/>
                    <button type="button" className="ms-2 btn btn-outline-secondary" onClick={() =>ADD ('interests')}>ADD</button>
                </div>
                {ResumeData.interests.length > 0 && <ArrayMap keys='interests'/>}
            </div>
            <div className="col-5 border border-secondary mt-3 py-2 text-center">
                <label className="fw-bold">Computer-literacy</label>
                <div className="d-flex">
                    <input className="form-control border-secondary mb-1" placeholder="computer-skill" value={Temp.computer_literacy} onChange={(e) =>dispatch(setTemp({...Temp,computer_literacy:e.target.value}))}/>
                    <button type="button" className="ms-2 btn btn-outline-secondary" onClick={() =>ADD ('computer_literacy')}>ADD</button>
                </div>
                {ResumeData.computer_literacy.length > 0 && <ArrayMap ResumeData={ResumeData} keys='computer_literacy' setResumeData={setResumeData}/>}
                
            </div>
        </div>
        <div className="row mb-2">
            <h4 className="text-uppercase text-center">personal_details</h4>
            <div className="col">
                <input className="form-control border-secondary mb-1" placeholder="Father's Name" onKeyUp={(e) => addDetails('personal_details',e.target.value,'father_name')}/>
                <input className="form-control border-secondary mb-1" placeholder="Siblings" onKeyUp={async (e) => addDetails('personal_details',e.target.value,'siblings')}/>
                <input className="form-control border-secondary mb-1" placeholder="DOB" onKeyUp={(e) => addDetails('personal_details',e.target.value,'DOB')}/>
                <input className="form-control border-secondary mb-1" placeholder="Age" onKeyUp={(e) => addDetails('personal_details',e.target.value,'Age')}/>
            </div>
            <div className="col">
                <input className="form-control border-secondary mb-1" placeholder="Father_occupation" onKeyUp={(e) => addDetails('personal_details',e.target.value,'father_occupation')}/>
                <input className="form-control border-secondary mb-1" placeholder="Gender" onKeyUp={(e) => addDetails('personal_details',e.target.value,'gender')}/>
                <input className="form-control border-secondary mb-1" placeholder="Marital Status" onKeyUp={(e) => addDetails('personal_details',e.target.value,'marital_status')}/>
                <input className="form-control border-secondary mb-1" placeholder="Nationality" onKeyUp={(e) => addDetails('personal_details',e.target.value,'nationality')}/>
            </div>
        </div>
        <textarea className="w-100" rows={2} placeholder="Declaration" onChange={(e) =>addDetails('declaration',e.target.value)}/>
        <div className="text-center">
            <button type="button" className="btn btn-success" onClick={createResume}>Create Resume</button>
        </div>
        </form>

        <table className="table table-secondary w-75 my-3 m-auto">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Id</th>
                    <th scope="col">user</th>
                    <th scope="col">Delete</th>
                    <th scope="col">view</th>
                </tr>
            </thead>
            <tbody>
                {getUserResume.map((detail,index) =>(
                    <tr key={index}>
                        <th scope='row'>{index + 1}</th>
                        <td className="fw-semibold">{detail.id}</td>
                        <td className="fw-semibold">{JSON.parse(detail.data).name}</td>
                        <td><button type="button" className='btn btn-secondary' onClick={() => deleteResume(detail.id)}>Delete</button></td>
                        <td><Link to={`/view/${detail.id}`} className="btn btn-dark">view</Link></td>
                    </tr>
                ))}
            </tbody>
            </table>
        </>
    )
}