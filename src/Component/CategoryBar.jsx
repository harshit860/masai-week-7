import React from 'react';
import ButtonGroup from './ButtonGroup.jsx'

const CategoryBar = (props) =>{
          let buttonCategory=  props.categoryName.map(a=>{
               return  <ButtonGroup categoryList={a}/>
            })
    return(
        <div className="col-xl-12">
            
         {buttonCategory}
        </div>
        
    )
}
export default CategoryBar;