import React from 'react'

import filesImg from "../assets/path3683.png"


import "../styles/rightSideSection.css"

const RightSideSection = () => {
    return (
        <>

            <div className="right__side--section">
                <div className="right__side__section--top">
                    <div className="right__side__section--top1">
                        <div>
                            <div className='common__class'>
                                <p>Gender</p>
                                <h5>Female</h5>
                            </div>

                            <div className='common__class'>
                                <p>Street Address</p>
                                <h5>JL. Diponegoro No. 21</h5>
                            </div>
                        </div>
                        <div>
                            <div className='common__class'>
                                <p>Birthday</p>
                                <h5>Feb 24th,1997</h5>
                            </div>
                            <div className='common__class'>
                                <p>City</p>
                                <h5>Cilacap</h5>
                            </div>
                        </div>
                        <div>
                            <div className='common__class'>
                                <p>Phone Number</p>
                                <h5>(239) 555-0108</h5>
                            </div>
                            <div className='common__class'>
                                <p>Zip Code</p>
                                <h5>655849</h5>
                            </div>
                        </div>
                        <div>
                            <div className='common__class'>
                                <p>Registration date</p>
                                <h5>Feb 24th, 1997</h5>
                            </div>

                            <div className='common__class'>
                                <p>Member Status</p>
                                <h5>Active Member</h5>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="right__side__section--middle">
                    <p>Upcoming Appointments</p>
                    <p>Past Appointments</p>
                    <p>Medical Records</p>
                </div>



                <div className="right__side__section--bottom">

                    <div className="right__side__section__bottom--header">
                        <p>Root Canal Treatment</p>
                        <p>Show Previous Treatments</p>
                    </div>

                    <div className="right__side__section__bottom--body">
                        <div>
                            <h1 >26 Nov '19</h1>
                            <p>09.00 - 10.00</p>
                        </div>
                        <div className='border_vertical' ></div>

                        <div>
                            <p>Treatment</p>
                            <h4>Open Access</h4>
                        </div>
                        <div className='border_vertical'></div>

                        <div className='common_class'>
                            <div>
                                <p>Dentist</p>
                                <h4>Drg. Adam H.</h4>
                            </div>

                            <div>
                                <p>Dentist</p>
                                <h4>Drg. Adam H.</h4>
                            </div>

                            <div className='icon_section'>
                                <img src={filesImg} alt="" />
                                <p>Note</p>
                            </div>
                        </div>

                    </div>




                    <div className="right__side__section__bottom--body">
                        <div>
                            <h1>12 Nov '19</h1>
                            <p>09.00 - 10.00</p>
                        </div>
                        <div className='border_vertical'></div>

                        <div>
                            <p>Treatment</p>
                            <h4>Root Canal</h4>
                        </div>
                        <div className='border_vertical'></div>

                        <div className='common_class'>
                            <div>
                                <p>Dentist</p>
                                <h4>Drg. Adam H.</h4>
                            </div>

                            <div>
                                <p>Dentist</p>
                                <h4>Drg. Adam H.</h4>
                            </div>

                            <div className='icon_section'>
                                <img src={filesImg} alt="" />
                                <p>Note</p>
                            </div>
                        </div>

                    </div>






                </div>



            </div>
        </>
    )
}

export default RightSideSection