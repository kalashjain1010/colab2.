import React from "react";
import "./landing.css";
// import Navbar from "./Navbar";
import LanNav from "./LanNav";
import { Link as RouterLink } from "react-router-dom";
import { REGISTER } from "lib/routes";

function LandingPage() {
  return (
    <>
   <LanNav/>
    <div className="landing">
      <div className="heading">Landing page</div>
      <div className="subhead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quisquam
        maiores deserunt cupiditate totam hic necessitatibus? Iure dicta sit
        officia unde, reprehenderit, sed at tenetur fuga nihil earum fugiat
        nostrum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quisquam mollitia iusto, officiis excepturi cum odio doloremque beatae
        voluptatum dignissimos, sit perspiciatis itaque at modi harum eius nisi
        nam minima hic! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Ratione maxime atque nobis obcaecati suscipit molestias corporis
        voluptates animi possimus explicabo. Consectetur recusandae quo corporis
        voluptatem, possimus iste blanditiis explicabo error.

        <div className="started">
            <RouterLink to={REGISTER}>
                <button className="getStarted">Get Started</button>
            </RouterLink>
        </div>
      </div>
      <div className="landingImage">
        image
      </div>
    </div>
    </>
  );
}

export default LandingPage;