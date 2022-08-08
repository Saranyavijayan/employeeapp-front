import { Navigate } from "react-router-dom";
import { useNavigate,useParams } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import "../styles/List.css";
import { useDeleteEmployeeByIdMutation, useGetEmployeeByIdQuery, useGetEmployeesQuery } from "../services/api";
import image from "../images/kv logo.png";
import list from "../images/List.png";
import round from "../images/Ellipse 1.png";
import plus from "../images/+.png";
import edit from "../images/edit.png"

const EmployeeList = () => {
    const navigate = useNavigate();
    const goToNextPage = (url) => {
        navigate(url);

    };
    const navigate1 = useNavigate();
    const goToCreatePage=()=>{
        navigate1("/create");
    };
    const { id } = useParams();
    const { data = [], error, isLoading } = useGetEmployeesQuery();
    const [DeleteEmployee, result] = useDeleteEmployeeByIdMutation();
   
   
    
    const headarr = [
        {
            employeename: "Employee Name",
            employeeid: "Employee Id",
            joiningDate: "Joining Date",
            role: "Role",
            status: "Status",
            experience: "Experience(In yrs)",
            action: "Action"
        }
    ];

    return (
        <div>


            <title>
                Employee App
            </title>
            <header className="head">
                <div className="headdiv1">
                    <img src={image} width="250" height="50" />
                </div>
            </header>
            <body className="bodyclass">
                <div id="move">
                    <aside >
                        <nav className="vertnav">

                            <div className="link">
                                <a >

                                    <div className="logo" >
                                        <img src={list} />
                                    </div>
                                    <p>Employee List</p>
                                </a>

                            </div>
                        </nav>

                    </aside>
                </div>
                <main className="box">
                    <section class="topsec1">
                        <div id="container">


                            <div id="leftThing">
                                <h1 style={{ width: "304px", height: "32px", textAlign: "left", font: "normal normal bold 24px/32px Nunito Sans", letterSpacing: "0px", color: "#000000", marginTop: "10px" }}>Employee List</h1>

                            </div>

                            <div id="rightThing">

                                <Button label="Create Employee" className="create" handleClick={goToCreatePage}></Button>



                            </div>
                            <div className="ellipseimg">
                                <img src={round} />
                            </div>

                            <div className="plusimg">
                                <img src={plus} />
                            </div>

                        </div>


                    </section>
                    <section>
                        {/* <Button label="Next" handleClick={goToNextPage}/>  */}
                        {/* // <option value={option.value}>{option.label}</option> */}
                        <div>
                            <table >

                                {headarr.map(head => (
                                    <tr>

                                        <th>{head.employeename}</th>
                                        <th>{head.employeeid}</th>
                                        <th>{head.joiningDate}</th>

                                        <th>{head.role}</th>
                                        <th>{head.status}</th>
                                        <th>{head.experience}</th>
                                        <th>{head.action}</th>
                                    </tr>
                                ))}

                                {data?.data?.map(empdet => (

                                    <tr >
                                        <td onClick={() => goToNextPage(`/${empdet.id}/details`)}>{empdet.name}</td>
                                        <td>{empdet.id}</td>
                                        <td>{empdet.joiningdate}</td>
                                        <td>{empdet.role}</td>
                                        <td >
                                            <span className={empdet.status}>{empdet.status}</span>
                                        </td>
                                        <td>{empdet.experience}</td>
                                        <td >
                                       
                                <Button label="Delete" className="create1" handleClick={()=>{DeleteEmployee(empdet.id)}}/>
                                <Button label="Update" className="update"  handleClick={()=>{goToNextPage(`/${empdet.id}/editpage`)}}/>
                                           
                                        </td>

                                    </tr>

                                ))}



                                {/*             
        //     <div>
        //     {empdet.name}
        //     {empdet.id}
        //     {empdet.joiningDate}
        //     {empdet.role}
        //     {empdet.status}
        //     {empdet.experience}
          
        //   </div> */}



                            </table>
                        </div>






                    </section>
                </main>
            </body>
        </div>
    )
}
export default EmployeeList;