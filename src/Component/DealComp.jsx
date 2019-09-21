import React from 'react';

const DealComp = (props) =>
{
    return(
       
        <div className="col-xl-1 ml-5">
        <img src={props.dealImage}></img>
        <h6>{props.dealCompCat}</h6>
        <p className="text-success font-weight-light">{props.dealCompDis}</p>
        <p className="text-secondary font-weight-light">{props.dealCompBrand}</p>
    
    </div>
    )
}
export default DealComp;