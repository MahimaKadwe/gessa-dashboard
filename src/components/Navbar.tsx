import '../App.css';
import React from 'react';

interface NavbarProps {
  title: string;
  mode: string;
  plain: string;
  togglemode: () => void;
  swithcd: () => void;
}

export default function Navbar(props: NavbarProps) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
         <div className="container-fluid">
           {/* <a className="navbar-brand" href="/">{props.title}</a>
           <a className="navbar-mahi" href="/">{props.plain}</a> */}

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                square
              </li>
           
            </ul>
            {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
              <input className="form-check-input" onClick={props.swithcd} type="checkbox" id="flexSwitchCheckDefault2" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault2"> Green</label>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
