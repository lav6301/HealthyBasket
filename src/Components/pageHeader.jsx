import React from "react";
import { Link } from "react-router-dom";

function PageHeader(props){
    return(
        <>
      <div className="container-fluid py-5 about-header">
      <h2 className="text-center text-primary">
        {props.h2}</h2>
      <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
            <Link className="text-white"  to="/">
              {props.prepage}</Link></li>
            <li className="breadcrumb-item">
            <a className="text-secondary" href="#">
              {props.currentpage}</a></li>
        </ol>
      </div>
        </>

    )
}

export default PageHeader;

