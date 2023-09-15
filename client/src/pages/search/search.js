import "./search.css";
import { useEffect } from "react";

// useEffect(() => {

// }, [])


export const Search = () => {
    return (
        <>
            <div className="search-body">
                <div className="s-body">    
                    <div className="s-main">
                        <input type="text" placeholder="Search for food and dishes..."/>
                        <button><img src={require("../../static/images/search.png")} alt="" /></button>
                    </div>
                    <div className="options">
                        <h1>Popular Cuisines</h1>
                        <div className="s-cards-container">
                            <div className="s-card">
                                <div className="s-card-img">
                                    <img src={require("../../static/images/dish-1.png")} alt="" />
                                </div>
                                <p>Burger</p>
                            </div>
                            <div className="s-card">
                                <div className="s-card-img">
                                    <img src={require("../../static/images/home-img-1.png")} alt="" />
                                </div>
                                <p>Noodles</p>
                            </div>
                            <div className="s-card">
                                <div className="s-card-img">
                                    <img src={require("../../static/images/home-img-3.png")} alt="" />
                                </div>
                                <p>Pizza</p>
                            </div>
                            <div className="s-card">
                                <div className="s-card-img">
                                    <img src={require("../../static/images/home-img-2.png")} alt="" />
                                </div>
                                <p>Chicken</p>
                            </div>
                            <div className="s-card">
                                <div className="s-card-img">
                                    <img src={require("../../static/images/dish-4.png")} alt="" />
                                </div>
                                <p>Pizza</p>
                            </div>
                            <div className="s-card">
                                <div className="s-card-img">
                                    <img src={require("../../static/images/dish-5.png")} alt="" />
                                </div>
                                <p>IceCream</p>
                            </div>
                            <div className="s-card">
                                <div className="s-card-img">
                                    <img src={require("../../static/images/dish-6.png")} alt="" />
                                </div>
                                <p>Nuggets</p>
                            </div>
                            <div className="s-card">
                                <div className="s-card-img">
                                    <img src={require("../../static/images/about-img.png")} alt="" />
                                </div>
                                <p>MoMo's</p>
                            </div>
                            <div className="s-card">
                                <div className="s-card-img">
                                    <img src={require("../../static/images/dish-1.png")} alt="" />
                                </div>
                                <p>Burger</p>
                            </div>
                        </div>
                    </div>

                    <div className="s-products">
                        <div className="s-products-container">
                            {/* CARD */}
                            <div className="s-product-card">
                                <div className="s-product-details">
                                    <span>BESTSELLER</span>
                                    <h2>Food-Product</h2>
                                    <h3>$27.34</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum reprehenderit beatae saepe quidem, doloremque fugit?</p>
                                    <span className="s-more">MORE</span>
                                </div>
                                <div className="s-product-img">
                                    <div className="s-product-img-bottom">
                                        <img src={require("../../static/images/menu-1.jpg")} alt="" />
                                        <button>ADD+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="s-product-card">
                                <div className="s-product-details">
                                    <span>BESTSELLER</span>
                                    <h2>Food-Product</h2>
                                    <h3>$27.34</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum reprehenderit beatae saepe quidem, doloremque fugit?</p>
                                    <span className="s-more">MORE</span>
                                </div>
                                <div className="s-product-img">
                                    <div className="s-product-img-bottom">
                                        <img src={require("../../static/images/menu-1.jpg")} alt="" />
                                        <button>ADD+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="s-product-card">
                                <div className="s-product-details">
                                    <span>BESTSELLER</span>
                                    <h2>Food-Product</h2>
                                    <h3>$27.34</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum reprehenderit beatae saepe quidem, doloremque fugit?</p>
                                    <span className="s-more">MORE</span>
                                </div>
                                <div className="s-product-img">
                                    <div className="s-product-img-bottom">
                                        <img src={require("../../static/images/menu-1.jpg")} alt="" />
                                        <button>ADD+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="s-product-card">
                                <div className="s-product-details">
                                    <span>BESTSELLER</span>
                                    <h2>Food-Product</h2>
                                    <h3>$27.34</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum reprehenderit beatae saepe quidem, doloremque fugit?</p>
                                    <span className="s-more">MORE</span>
                                </div>
                                <div className="s-product-img">
                                    <div className="s-product-img-bottom">
                                        <img src={require("../../static/images/menu-1.jpg")} alt="" />
                                        <button>ADD+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="s-product-card">
                                <div className="s-product-details">
                                    <span>BESTSELLER</span>
                                    <h2>Food-Product</h2>
                                    <h3>$27.34</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum reprehenderit beatae saepe quidem, doloremque fugit?</p>
                                    <span className="s-more">MORE</span>
                                </div>
                                <div className="s-product-img">
                                    <div className="s-product-img-bottom">
                                        <img src={require("../../static/images/menu-1.jpg")} alt="" />
                                        <button>ADD+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="s-product-card">
                                <div className="s-product-details">
                                    <span>BESTSELLER</span>
                                    <h2>Food-Product</h2>
                                    <h3>$27.34</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum reprehenderit beatae saepe quidem, doloremque fugit?</p>
                                    <span className="s-more">MORE</span>
                                </div>
                                <div className="s-product-img">
                                    <div className="s-product-img-bottom">
                                        <img src={require("../../static/images/menu-1.jpg")} alt="" />
                                        <button>ADD+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="s-product-card">
                                <div className="s-product-details">
                                    <span>BESTSELLER</span>
                                    <h2>Food-Product</h2>
                                    <h3>$27.34</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum reprehenderit beatae saepe quidem, doloremque fugit?</p>
                                    <span className="s-more">MORE</span>
                                </div>
                                <div className="s-product-img">
                                    <div className="s-product-img-bottom">
                                        <img src={require("../../static/images/menu-1.jpg")} alt="" />
                                        <button>ADD+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="s-product-card">
                                <div className="s-product-details">
                                    <span>BESTSELLER</span>
                                    <h2>Food-Product</h2>
                                    <h3>$27.34</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum reprehenderit beatae saepe quidem, doloremque fugit?</p>
                                    <span className="s-more">MORE</span>
                                </div>
                                <div className="s-product-img">
                                    <div className="s-product-img-bottom">
                                        <img src={require("../../static/images/menu-1.jpg")} alt="" />
                                        <button>ADD+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="s-product-card">
                                <div className="s-product-details">
                                    <span>BESTSELLER</span>
                                    <h2>Food-Product</h2>
                                    <h3>$27.34</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum reprehenderit beatae saepe quidem, doloremque fugit?</p>
                                    <span className="s-more">MORE</span>
                                </div>
                                <div className="s-product-img">
                                    <div className="s-product-img-bottom">
                                        <img src={require("../../static/images/menu-1.jpg")} alt="" />
                                        <button>ADD+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="s-product-card">
                                <div className="s-product-details">
                                    <span>BESTSELLER</span>
                                    <h2>Food-Product</h2>
                                    <h3>$27.34</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum reprehenderit beatae saepe quidem, doloremque fugit?</p>
                                    <span className="s-more">MORE</span>
                                </div>
                                <div className="s-product-img">
                                    <div className="s-product-img-bottom">
                                        <img src={require("../../static/images/menu-1.jpg")} alt="" />
                                        <button>ADD+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}