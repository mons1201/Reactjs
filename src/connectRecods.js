import { useEffect, useState } from "react";
import{Records} from "./Records";
export const ConnectData=()=>
{
    const[process,setProcess]=useState([])

    useEffect(()=>
    {
        setProcess(process)
    },[])
    return(
        <>
        <table ClassName="table table-bordered col-lg-8 col-md-8 col-sm-12 shadow">
            <thead>
                <tr>
                    <th>StudentName</th>
                    <th>StudentDepartment</th>
                    <th>StudentMobileNo</th>
                </tr>
            </thead>
            <tbody>
                {
                    Records.map((ele,ind)=>(
                        <tr>
                            <td>{ele.StudentName}</td>
                            <td>{ele.StudentDepartment}</td>
                            <td>{ele.StudentMobileNo}</td>
                        </tr>

                    ))
                }
            </tbody>

        </table>
        </>
    );
}

