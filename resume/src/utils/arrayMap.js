import { useSelector,useDispatch } from "react-redux";
import { setResumeData } from "../redux/slices/fromSlice";


export default function ArrayMap({keys}){

    const dispatch = useDispatch();
    const {ResumeData} = useSelector((state) => state.FormSlice)

    let remove = (index) =>{
        let newAaary = [...ResumeData[keys]]
        newAaary.splice(index,1)
        dispatch(setResumeData({...ResumeData,[keys]:newAaary}))
    }
    return(
    <> 
    <table className="table">
        <thead>
            <tr>
                <th scope="col">NO</th>
                <th scope="col">{keys}</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
        {ResumeData[keys].map( (value,index)=>(
            <tr key = {index}>
                <th scope="row">{index + 1}</th>
                <td>{value}</td>
                <td><button onClick={() =>remove(index)} type="button">remove</button></td>
            </tr>
        ))}
        </tbody>
    </table>
        </>)

    }

export function ViewArray({keys}){
    const{viewResume} = useSelector((state) => state.ViewSlice)
    return(
        <>
            {viewResume[keys].map((item,index)=>(
                <li key={index}>{item}</li>
                ))}
        </>
)
}

