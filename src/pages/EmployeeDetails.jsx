import { Navigate } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import "../styles/List.css";
import { useGetEmployeeByIdQuery, useGetEmployeesQuery } from "../services/api";
import image from "../images/kv logo.png";
import list from "../images/List.png";
import round from "../images/Ellipse 1.png";
import plus from "../images/+.png";
import edit from "../images/edit.png"

const EmployeeDetails = () => {
    const navigate = useNavigate();
    const goToEditPage = () => {
        navigate("/editpage");
    };

    const { id } = useParams();

    const { data: empdet = {}, error, isLoading } = useGetEmployeeByIdQuery(id);


    const headarr = [
        {
            employeename: "Employee Name",
            employeeid: "Employee Id",
            joiningDate: "Joining Date",
            role: "Role",
            status: "Status",
            experience: "Experience(In yrs)",
            address: "Address"
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

                                <Button label="Edit" className="create" handleClick={goToEditPage}></Button>


                            </div>
                            <div className="ellipseimg">
                                <img src={round} />
                            </div>

                            <div className="editimg">
                                <img src={edit} />
                            </div>

                        </div>


                    </section>
                    <section>
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
                                        <th>{head.address}</th>
                                    </tr>
                                ))}

                                <tr >
                                    <td >{empdet.name}</td>
                                    <td>{empdet.id}</td>
                                    <td>{empdet.joiningdate}</td>
                                    <td>{empdet.role}</td>
                                    <td >
                                        {empdet.status}
                                    </td>
                                    <td>{empdet.experience}</td>
                                    <td>{`${empdet.address?.hname},
                                    ${empdet.address?.hno},
                                    ${empdet.address?.city},
                                    ${empdet.address?.state},
                                    ${empdet.address?.country},
                                    ${empdet.address?.pincode}`}

                                    </td> 

                                </tr>



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

export default EmployeeDetails;