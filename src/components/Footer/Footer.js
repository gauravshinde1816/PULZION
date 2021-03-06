import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <footer>
        <div class="row justify-content-center py-2 ">
            <div class="col-11">
                <div class="row mt-2">
                    <div class="col-xl-6 col-md-4 col-sm-4 col-12 mx-auto mb-3 a">
                        <h6 class="mb-3 mb-lg-4 bold-text mt-sm-0 ml-3"><b>ADDRESS</b></h6>
                        <p class="mb-1 ml-3">Pune Institute of Computer Technology<br/>Dhankawdi</p>

                    </div>
                    <div class="col-xl-3 col-md-4 col-sm-4 col-12">
                        <h6 class="mb-3 mb-lg-4 bold-text mt-sm-0 ml-3"><b>Explore</b></h6>
                        <ul class="list-unstyled ml-3">

                            <li class="nav-item">
                               Home
                            </li>


                            <li class="nav-item">
                               About Us
                            </li>
                            <li class="nav-item">
                                Join us
                            </li>
                        </ul>
                    </div>
                    <div class="col-xl-3 col-md-4 col-sm-4 col-12">
                        <h6 class="mb-3 mb-lg-4 bold-text mt-sm-0 ml-3"><b>Contact Us</b></h6>
                        <p class="mb-1 ml-3">dummy.com</p>

                    </div>
                </div>

            </div>
        </div>
    </footer>
     );
}
 
export default Footer;