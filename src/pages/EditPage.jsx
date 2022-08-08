import InputField from "../components/InputField";
import "../styles/CreateEmployeeStyle.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import image from "../images/kv logo.png";
import list from "../images/List.png";
import Button from "../components/Button";
import InputSelect from "../components/InputSelect";
import { useDeleteEmployeeByIdMutation, useGetEmployeesQuery, useGetEmployeeByIdQuery, useUpdateEmployeeByIdMutation } from "../services/api";





const EditPage = () => {

    const { id } = useParams();
    const { data, error, isLoading } = useGetEmployeeByIdQuery(id);


    useEffect(() => {
        const defatulVal = {
            name: data?.name,
            id: data?.id,
            joiningdate: data?.joiningdate,
            role: data?.role,
            status: data?.status,
            experience: data?.experience,
            hname: data?.address?.hname,
            hno: data?.address?.hno,
            city: data?.address?.city,
            state: data?.address?.state,
            country: data?.address?.country,
            pincode: data?.address?.pincode,
            username:data?.username,
            password:data?.password,
        }
        setState(defatulVal)
    }, [data]);

    const [UpdateEmployee, result] = useUpdateEmployeeByIdMutation();

    const [state, setState] = useState({
        name: "",
        id: "",
        joiningdate: "",
        role: "",
        status: "",
        experience: "",
        hname: "",
        hno: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        username:"",
        password:""
    });

    const onChangeValue = (key, value) => {
        setState({
            ...state,
            [key]: value

        })
    }





    return (
        <div>
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
                                <a>

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
                    <section className="topsec">

                        <h1 style={{ width: "304px", height: "32px", textAlign: "left", font: "normal normal bold 24px/32px Nunito Sans", letterSpacing: "0px", color: "#000000", marginTop: "10px" }}>Update employee</h1>
                    </section>
                    <section >

                        {state && (

                            <div className="content" >
                                <div className="div1">
                                    <div className="div2">
                                        <label className="inlabel" for="employee name">Employee name</label><br />
                                        <InputField className="inclass" value={state?.name} type="text" id="name" placeHolder="employee name" onChange={(value) => onChangeValue("name", value)} />
                                        <br />
                                        <br />
                                    </div>

                                    <div className="div2">
                                        <label className="inlabel" for="joining date">Joining date</label><br />
                                        <InputField type="text" className="inclass" value={state?.joiningdate} id="joiningdate" placeHolder="joining date" onChange={(value) => onChangeValue("joiningdate", value)} />
                                        <br />
                                        <br />
                                    </div >


                                    <div className="div2">
                                        <label className="inlabel" for="role">Role</label><br />
                                        {/* <InputSelect className="inclass" type="text" id="role" name="role" placeHolder="role" onChange={(value) => onChangeValue("name", value)}> */}
                                        <InputSelect className="inclass" name="role" value={state?.role} isEdit={!!id} placeHolder="role" onChange={(value) => onChangeValue("role", value)}
                                            options={[
                                                {
                                                    label: 'Choose Role',
                                                    val: ''
                                                },
                                                {
                                                    label: 'Developer',
                                                    val: 'developer'
                                                },
                                                {
                                                    label: 'Admin',
                                                    val: 'admin'
                                                },
                                                {
                                                    label: 'HR',
                                                    val: 'hr'
                                                },

                                            ]}

                                        />
                                        <br />
                                        <br />
                                    </div>
                                </div>
                                <div className="div1">
                                    <div className="div2">
                                        <label className="inlabel" for="status">Status</label><br />
                                        <InputSelect className="inclass" name="status" value={state?.status} isEdit={!!id} placeHolder="status" onChange={(value) => onChangeValue("status", value)}
                                            options={[

                                                {
                                                    label: 'Choose Status',
                                                    val: ''
                                                },
                                                {
                                                    label: 'Active',
                                                    val: 'Active'
                                                },
                                                {
                                                    label: 'Probation',
                                                    val: 'probation'
                                                },
                                                {
                                                    label: 'Inactive',
                                                    val: 'inactive'
                                                },

                                            ]} />

                                        <br />
                                        <br />
                                    </div>
                                    <div className="div2">
                                        <label className="inlabel" for="experience">Experience(In yrs)</label><br />
                                        <InputField className="inclass" type="text" id="experience" value={state?.experience} name="experience" placeHolder="experience" onChange={(value) => onChangeValue("experience", value)} />
                                        <br />
                                        <br />
                                    </div>




                                    <div className="div2">
                                        <label className="inlabel" for="address1">House Name</label><br />
                                        <InputField className="inclass" type="text" id="address1" value={state?.hname} placeHolder="House Name" onChange={(value) => onChangeValue("hname", value)} />
                                        <br />
                                        <br />
                                    </div>

                                </div>
                                <div className="div1">
                                    <div className="div2">
                                        <label className="inlabel" for="address2">House Number</label><br />
                                        <InputField className="inclass" type="text" id="address2" value={state?.hno} placeHolder="House Number" onChange={(value) => onChangeValue("hno", value)} />
                                        <br />
                                        <br />
                                    </div>
                                    <div className="div2">
                                        <label className="inlabel" for="address3">City</label><br />
                                        <InputField className="inclass" type="text" id="address3" value={state?.city} placeHolder="City" onChange={(value) => onChangeValue("city", value)} />
                                        <br />
                                        <br />
                                    </div>
                                    <div className="div2">
                                        <label className="inlabel" for="address4">State</label><br />
                                        <InputField className="inclass" type="text" id="address4" value={state?.state} placeHolder="State" onChange={(value) => onChangeValue("state", value)} />
                                        <br />
                                        <br />
                                    </div>

                                </div>
                                <div className="div1">
                                    <div className="div2">
                                        <label className="inlabel" for="address5">Country</label><br />
                                        <InputField className="inclass" type="text" id="address5" value={state?.country} placeHolder="Country" onChange={(value) => onChangeValue("country", value)} />
                                        <br />
                                        <br />
                                    </div>
                                    <div className="div2">
                                        <label className="inlabel" for="address6">Pincode</label><br />
                                        <InputField className="inclass" type="text" id="address6" value={state?.pincode} placeHolder="Pincode" onChange={(value) => onChangeValue("pincode", value)} />
                                        <br />
                                        <br />
                                    </div>
                                    <div className="div2">

                                        <label className="inlabel" for="file">Upload-Id</label><br />
                                        <div className="inputfile-box">
                                            <input type="file" id="file" className="inputfile" />


                                            <label for="file">
                                                <span id="file-name" className="file-box"></span>
                                                <span className="file-button">
                                                    Browse
                                                </span>
                                            </label>
                                        </div>


                                    </div>
                                </div>

                                <br />
                                <br />
                                <div className="div1">
                            <div className="div2">
                                    <label className="inlabel" for="password">User Name</label><br />
                                    <InputField className="inclass" type="text" id="username" value={state?.username} placeHolder="Pincode" onChange={(value) => onChangeValue("username", value)} />
                                    <br />
                                    <br />
                                </div>
                            
                            <div className="div2">
                                    <label className="inlabel" for="password">Password</label><br />
                                    <InputField className="inclass" type="text" id="password"  placeHolder="Password" onChange={(value) => onChangeValue("password", value)} />
                                    <br />
                                    <br />
                                </div>

                            <br />
                            <br />
                            </div>
                                {/* <div className="div1"> */}

                                <div className="div3">

                                    <div className="action_btn">

                                        <Button label="Update" className="sub" handleClick={() => {
                                            UpdateEmployee({
                                                name: state.name,
                                                id: state.id,
                                                joiningdate: state.joiningdate,
                                                role: state.role,
                                                status: state.status,
                                                experience: Number(state.experience),
                                                username: state.username,
                                                password: state.password,
                                                departmentId: "bae68867-f14f-4772-8fa5-37b1c4b180d1",
                                                address: {
                                                    hname: state.hname,
                                                    hno: state.hno,
                                                    city: state.city,
                                                    state: state.state,
                                                    country: state.country,
                                                    pincode: state.pincode

                                                }
                                            })
                                        }} />
                                        <Button label="cancel" className="sub1" onclick="myFunction2()"></Button>



                                    </div>

                                </div>

                                {/*                 
                </div> */}
                            </div>
                        )}

                    </section>
                </main>
            </body>

        </div>
    )


}
export default EditPage;