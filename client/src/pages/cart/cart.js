import "./cart.css";



export const Cart = () => {
    return (
        <>
            <div className="body">
                <h1 className="cart-heading">Cart</h1>
                <div className="grid-container">
                    <div className="grid-left">
                        <div className="left-heading">
                            <h1>Cart Products</h1>
                            <p>Total 7 products are available in Cart</p>
                        </div>
                        <div className="cards-section">
                            <div className="cards-container">
                                
                            <div className="product-card">
                                    <img className="product-img" src={require("../../static/images/menu-1.jpg")} alt="" />
                                    <div className="product-details">
                                        <div className="product-head">
                                            <h1>Product Name</h1>
                                            <div class="stars">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star-half-alt"></i>
                                            </div>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum deserunt voluptatibus facilis cumque! Assumenda omnis nobis aperiam vitae temporibus.</p>
                                        <div className="product-pricing">
                                            <h1>$102.12</h1>
                                            <div className="product-count">
                                                <a href="">+</a>1<a href="">-</a>
                                            </div>
                                        </div>
                                        <div className="links">
                                            <a href="">Remove</a><a href="">Edit</a>
                                        </div>
                                    </div>
                                </div>


                                <div className="product-card">
                                    <div className="pro-img-container">
                                        <img className="product-img" src={require("../../static/images/menu-3.jpg")} alt="" />
                                    </div>
                                    <div className="product-details">
                                        <div className="product-head">
                                            <h1>Product Name</h1>
                                            <div class="stars">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star-half-alt"></i>
                                            </div>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum deserunt voluptatibus facilis cumque! Assumenda omnis nobis aperiam vitae temporibus.</p>
                                        <div className="product-pricing">
                                            <h1>$102.12</h1>
                                            <div className="product-count">
                                                <a href="">+</a>1<a href="">-</a>
                                            </div>
                                        </div>
                                        <div className="links">
                                            <a href="">Remove</a><a href="">Edit</a>
                                        </div>
                                    </div>
                                </div>


                                <div className="product-card">
                                    <img className="product-img" src={require("../../static/images/menu-2.jpg")} alt="" />
                                    <div className="product-details">
                                        <div className="product-head">
                                            <h1>Product Name</h1>
                                            <div class="stars">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star-half-alt"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum deserunt voluptatibus facilis cumque! Assumenda omnis nobis aperiam vitae temporibus.</p>
                                        <div className="product-pricing">
                                            <h1>$102.12</h1>
                                            <div className="product-count">
                                                <a href="">+</a>1<a href="">-</a>
                                            </div>
                                        </div>
                                        <div className="links">
                                            <a href="">Remove</a><a href="">Edit</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="grid-right">
                        <div>
                            <h1 className="right-heading">Bill Details</h1>
                            <p>Complete Transaction and Checkout</p>
                        </div>
                        <div className="right-body">
                            <div className="promo-section">
                                <h2>Got a Coupon?</h2>
                                <div className="promo-form">
                                    <input type="text" placeholder="Enter a promo code" />
                                    <button>Apply</button>
                                </div>
                            </div>
                            <div className="amounts-section">
                                <div className="amount">
                                    <p className="amt-name">Subtotal</p>
                                    <p className="amt-price">$1209.12</p>
                                </div>
                                <div className="amount">
                                    <p className="amt-name">Discounts</p>
                                    <p className="amt-price">$34.92</p>
                                </div>
                                <div className="amount">
                                    <p className="amt-name">GST and Restaurant Charges</p>
                                    <p className="amt-price">$18.34</p>
                                </div>
                                <div className="amount">
                                    <p className="amt-name">Delivery Charges</p>
                                    <p className="amt-price">$00.00</p>
                                </div>
                                <div className="gtotal-section">
                                    <h2>Grand Total</h2>
                                    <h2>$1233.90</h2>
                                </div>
                            </div>
                            <div className="proceed">
                                <button>Proceed to Payment</button>
                            </div>
                        
                        </div>
                    </div>
                </div>
        
            </div>
        </>
    )


}