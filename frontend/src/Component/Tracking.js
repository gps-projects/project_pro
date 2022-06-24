// import React from 'react'
import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { FaPeopleCarry } from 'react-icons/fa';
// import {CgTimer} from 'react-icon/cg';
import { CgTimer } from "react-icons/cg";
import { TbReportSearch } from "react-icons/tb";
import { GoProject } from "react-icons/go"
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
// import { FaPeopleCarry } from "@react-icons/all-files/fa/FaPeopleCarry";
import "./Tracking.css";




export default function Tracking() {
    function fun1(e) {
        e.preventDefault();

        console.log('You clicked submit.');
    }


    const [data, setData] = useState([{}])

    // useEffect(() => {
    //     fetch("/lo_la").then(
    //         res => res.json()
    //     ).then(
    //         data => {
    //             setData(data)
    //             console.log(data)
    //         }
    //     )
    // }, [])

    return (
        <div>
            {/* <h1>Tracking</h1> */}
            <div className="row">
                <div className="col-2">

                    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark pmd-navbar pmd-z-depth">

                        {/* <!-- Sidebar Toggle Button--> */}
                        <a href="javascript:void(0);" data-target="basicSidebar" data-placement="left" data-position="slidepush" is-open="true" is-open-width="1000" class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect pmd-sidebar-toggle"><i class="material-icons md-light">menu</i></a>
                        <a class="navbar-brand" href="#">Brand</a>



                    </nav>
                    <ul className="nav flex-column pmd-sidebar-nav">
                        <li onClick={fun1}> <CgTimer color="white" fontSize="1.9em" className='pr-5' /> Time Tracker</li>
                        <li onClick={fun1}> <AiOutlineUnorderedList color="white" fontSize="1.9em" className='pr-5' /> Estimates</li>
                        <li onClick={fun1}> <TbReportSearch color="white" fontSize="1.9em" className='pr-5' /> Reports</li>
                        <li onClick={fun1}> <GoProject color="white" fontSize="1.9em" className='pr-5' /> Projects</li>
                        <li onClick={fun1}> <MdAirlineSeatReclineNormal color="white" fontSize="1.9em" className='pr-5' /> Clints</li>
                        <li onClick={fun1}> <FaPeopleCarry color="white" fontSize="1.9em" className='pr-5'></FaPeopleCarry> Team</li>
                    </ul>

                </div>

                <div class="pmd-sidebar-overlay"></div>
                <div className="col-10">
                    <div className="output"></div>
                    {/* {(typeof data.members === 'undefined') ? (
                        <p> Loading...</p>
                    ) : (
                        {lo_la}
                    )} */}


                </div>
            </div>

        </div>
    )
}
