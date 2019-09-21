import React from 'react';

const Exclusive = (props) =>
{
    return(

        <div className="container-fluid col-xl-10">
            <div className="row">
                <div className="col-xl-4">
                    <img  className="col-xl-12 h-100" src={props.excData1}></img>
                </div>

                <div className="col-xl-4">
                    <img className="col-xl-12 h-100" src={props.excData2}></img>
                </div>
                   
                <div className="col-xl-4">
                    <img className="col-xl-12 h-100" src={props.excData3}></img>
                </div>
         
            </div>
        </div>
    )
}
export default Exclusive;