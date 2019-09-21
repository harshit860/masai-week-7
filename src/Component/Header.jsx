import React from 'react';
import HeaderButton from './HeaderButton'

const Header = (props) =>
{
        return (
                <div className = "row">
                    <div className = "navbar bg-primary col-xl-12 col-lg-12 col-md-12">
                        <div className = "container ">

                            <div className = "col-xl-2 col-lg-6 col-md-6 col-sm-10">
                                
                                <img style = {{height:"40px"}} src = {props.logo}></img>
                                <h5 className="text-left text-white"><i>Explore</i><i className="ml-2 text-warning">Plus</i>
                                <img className src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"></img>
                                </h5>
                            </div>

                            <div className = "col-xl-4 ml-1">
                                <input className = "col-xl-12" placeholder = { "Search for products ,brands and more" }></input> 
                            </div>
                            <div className = "row col-xl-4 offset-1 ">
                                <HeaderButton nameButton = {props.valueButton[0]}/>
                                <HeaderButton nameButton = {props.valueButton[1]}/>
                            </div>
                        </div>

                    </div>
                </div>

        )
}
export default Header;