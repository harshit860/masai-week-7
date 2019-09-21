import React from 'react';

const HeaderButton = (props) =>{
    return(
        <div>
                <button className="btn text-white"><b>{props.nameButton}</b></button>
        </div>
    )
}
export default HeaderButton;