import React from 'react';


const ButtonGroup = (props) => {
    return(
        <div class="btn-group" >
            <button className="btn dropdown-toggle">
                {props.categoryList}
            {/* <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a class="dropdown-item" href="#">Dropdown link</a>
                <a class="dropdown-item" href="#">Dropdown link</a>
            </div> */}
        </button>
        </div>
    )
}
export default ButtonGroup;