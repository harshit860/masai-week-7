import React from 'react';

const SlideOffer = () =>
{
    return(
            <div>
                 <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://rukminim1.flixcart.com/flap/104/140/image/7dc6a24be4a08508.jpg?q=50" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src="https://rukminim1.flixcart.com/flap/50/50/image/e481f5b4cc5ae41f.jpg?q=50" class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
            </div>

    )
}
export default SlideOffer;