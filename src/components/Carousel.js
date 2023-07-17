import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" style={{objectFit:"contain"}}>
                <div className="carousel-inner" id="carousel">
                    <div className='carousel-caption' style={{zIndex:"10"}}>
                        <form className="d-flex" >
                            <input className="form-control me-10" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>

                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/1600x500/?Burger" className="d-block w-100" style={{filter:"brightness(35%)"}} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/1600x500/?food" className="d-block w-100" style={{filter:"brightness(35%)"}} alt="Noodles" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/1600x500/?cake" className="d-block w-100" style={{filter:"brightness(35%)"}} alt="cake" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
{/* 

   */}