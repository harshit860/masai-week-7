import React from 'react';
import DealComp from './DealComp'


const Deal = (props) =>{
    return(
        <div className="container-fluid col-xl-10 mt-4">
                <div className="row">
                    <h5>Deals of the Day</h5>
                    <div className="col-xl-5"></div>
                    <button className="btn btn-primary offset-5">View All</button>
                    </div>
                    <div className="row mt-4">
                    <DealComp 
                        dealCompCat = {props.dealData[0].dealCategory}
                        dealCompDis = {props.dealData[0].discount}
                        dealCompBrand = {props.dealData[0].brands}
                        dealImage = {props.dealData[0].itemImage}
                    />
                    <DealComp 
                         dealCompCat = {props.dealData[1].dealCategory}
                         dealCompDis = {props.dealData[1].discount}
                         dealCompBrand = {props.dealData[1].brands}
                         dealImage = {props.dealData[1].itemImage}                    
                    />
                    <DealComp 
                         dealCompCat = {props.dealData[2].dealCategory}
                         dealCompDis = {props.dealData[2].discount}
                         dealCompBrand = {props.dealData[2].brands}
                         dealImage = {props.dealData[2].itemImage}                    
                    />
                    <DealComp 
                         dealCompCat = {props.dealData[3].dealCategory}
                         dealCompDis = {props.dealData[3].discount}
                         dealCompBrand = {props.dealData[3].brands}
                         dealImage = {props.dealData[3].itemImage}                    
                    />
                    <DealComp 
                         dealCompCat = {props.dealData[4].dealCategory}
                         dealCompDis = {props.dealData[4].discount}
                         dealCompBrand = {props.dealData[4].brands}
                         dealImage = {props.dealData[4].itemImage}                    
                    />
                    <DealComp 
                         dealCompCat = {props.dealData[5].dealCategory}
                         dealCompDis = {props.dealData[5].discount}
                         dealCompBrand = {props.dealData[5].brands}
                         dealImage = {props.dealData[5].itemImage}                    
                    />
                    <DealComp 
                         dealCompCat = {props.dealData[6].dealCategory}
                         dealCompDis = {props.dealData[6].discount}
                         dealCompBrand = {props.dealData[6].brands}
                         dealImage = {props.dealData[6].itemImage}                    
                    />
                    <DealComp 
                         dealCompCat = {props.dealData[7].dealCategory}
                         dealCompDis = {props.dealData[7].discount}
                         dealCompBrand = {props.dealData[7].brands}
                         dealImage = {props.dealData[7].itemImage}                    
                    />
                    
                    </div>

                </div>
            )
}
export default Deal;