import Link from "next/link";
import { useState, useEffect } from 'react'
export function AppHeader() {
  return (
    <header className="ud-header">
      <div className="container head-container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                {/* <img src="assets/images/logo/logo.svg" alt="Logo" /> */}
                <img src="/logo-dark.png" alt="Logo" height={40} />
              </a>
              <button className="navbar-toggler">
                <span className="toggler-icon"> </span>
                <span className="toggler-icon"> </span>
                <span className="toggler-icon"> </span>
              </button>

              <div className="navbar-collapse">
                <ul id="nav" className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link href={"#about"} scroll={false}>About</Link>
                  </li>
                  {/* <li className="nav-item">
                    <a href="/team">Team</a>
                  </li> */}
                  <li className="nav-item">
                    <a className="ud-menu-scroll" href="#footer">
                      Contact
                    </a>
                  </li>
                
                </ul>
              </div>

              <div className="navbar-btn d-none d-sm-inline-block ms-auto">
                <a
                  className="ud-main-btn ud-white-btn"
                  href="https://play.google.com/store/apps/details?id=farm.gonana.gonana"
                >
                  Download App
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
