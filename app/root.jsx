import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import './style.css';
import { AiOutlineHome } from 'react-icons/ai';
import { FiUsers } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        <Meta />
        <Links />
      </head>
      <body>
       <div className="main_frame">
        <header>
          <div className="logo">
            <h2># Logo</h2>
          </div>
          <div className="header_btn">
            <button onClick={()=>console.log("logout")} className="logOutButton">Log Out</button>
          </div>
          </header>
        <div className="frame-body">
          <div className="navbar">
          <div class="sidebar">
  <ul class="nav-links">
    <li class="active">
      <a href="#">
        <div className="nav-icons">
        <AiOutlineHome />
        </div>   
        <span>Home</span>
      </a>
    </li>
    <li>
      <a href="#">
      <div className="nav-icons">
      <FiUsers />
      </div>   
        <span>Partner</span>
      </a>
    </li>
    <li>
      <a href="#">
      <div className="nav-icons">
      <IoCallOutline />
      </div>   
        <span>Support</span>
      </a>
    </li>
  </ul>
</div>

          </div>
          <div className="outlet_body">
            <Outlet />
          </div>
        </div>
       </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
