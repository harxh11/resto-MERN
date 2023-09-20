import axios from "axios";
import "../../static/css/style.css";
import { useEffect, useState } from "react";




export const Home = () => {

    const [dishes, setDishes] = useState([]);
    const [userID, setUserID] = useState("");

    useEffect(() => {
        const getDishes = async () => {
            const response = await axios.get("http://localhost:3001/dishes/getDishes");
            setDishes(response.data.dishes);
        }

        getDishes();
    }, []);

    const handleCart = async (event) => {
        event.preventDefault();
        setUserID(window.localStorage.getItem("userID"));
        const response = await axios.get("http://localhost:3001/users/getUser", {userID: userID});
        console.log(userID);
    }

    return(
        <>

            <form action="" id="search-form">
                <input type="search" placeholder="search here..." name="" id="search-box" />
                <label for="search-box" class="fas fa-search"></label>
                <i class="fas fa-times" id="close"></i>
            </form>

            <section class="home" id="home">

                <div class="swiper-container home-slider">

                    <div class="swiper-wrapper wrapper">

                        <div class="swiper-slide slide">
                            <div class="content">
                                <span>our special dish</span>
                                <h3>spicy noodles</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                <a href="#" class="btn">order now</a>
                            </div>
                            <div class="image">
                                <img src={require("../../static/images/home-img-1.png")} alt="" />
                            </div>
                        </div>
                    </div>

                    <div class="swiper-pagination"></div>

                </div>

            </section>

            <section class="dishes" id="dishes">

                <h3 class="sub-heading"> our dishes </h3>
                <h1 class="heading"> popular dishes </h1>

                <div class="box-container">
                    {
                        dishes.map((dish) => {
                            return (
                            <div class="box">
                                <a href="#" class="fas fa-heart"></a>
                                <a href="#" class="fas fa-eye"></a>
                                <img src={require("../../static/images/dish-1.png")} alt="" />
                                <h3>{dish.name}</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <span>${dish.price}</span>
                                <a href="#" class="btn">add to cart</a>
                            </div>
                            )

                        })
                    }

                </div>

            </section>

            <section class="about" id="about">

                <h3 class="sub-heading"> about us </h3>
                <h1 class="heading"> why choose us? </h1>

                <div class="row">

                    <div class="image">
                        <img src={require("../../static/images/about-img.png")} alt="" />
                    </div>

                    <div class="content">
                        <h3>best food in the country</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.</p>
                        <div class="icons-container">
                            <div class="icons">
                                <i class="fas fa-shipping-fast"></i>
                                <span>free delivery</span>
                            </div>
                            <div class="icons">
                                <i class="fas fa-dollar-sign"></i>
                                <span>easy payments</span>
                            </div>
                            <div class="icons">
                                <i class="fas fa-headset"></i>
                                <span>24/7 service</span>
                            </div>
                        </div>
                        <a href="#" class="btn">learn more</a>
                    </div>

                </div>

            </section>

            <section class="menu" id="menu">

                <h3 class="sub-heading"> our menu </h3>
                <h1 class="heading"> today's speciality </h1>

                <div class="box-container">

                    {
                        dishes.map((dish) => {
                            return (
                                <div class="box">
                                    <div class="image">
                                        <img src={require("../../static/images/menu-1.jpg")} alt="" />
                                        <a href="#" class="fas fa-heart"></a>
                                    </div>
                                    <div class="content">
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star-half-alt"></i>
                                        </div>
                                        <h3>{dish.name}</h3>
                                        <p>{dish.description}</p>
                                        <a href="#" class="btn" onClick={handleCart}>add to cart</a>
                                        <span class="price">${dish.price}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </section>

            <section class="review" id="review">

                <h3 class="sub-heading"> customer's review </h3>
                <h1 class="heading"> what they say </h1>

                <div class="swiper-container review-slider">

                    <div class="swiper-wrapper review-container">

                        <div class="swiper-slide slide user-review">
                            <i class="fas fa-quote-right"></i>
                            <div class="user">
                                <img src={require("../../static/images/pic-1.png")} alt="" />
                                <div class="user-info">
                                    <h3>john doe</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat. Lorem ipsum dolor sit amet consectetur.</p>
                        </div>

                        <div class="swiper-slide slide user-review">
                            <i class="fas fa-quote-right"></i>
                            <div class="user">
                                <img src={require("../../static/images/pic-2.png")} alt="" />
                                <div class="user-info">
                                    <h3>emily hart</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat. Lorem ipsum dolor sit, amet.</p>
                        </div>


                        <div class="swiper-slide slide user-review">
                            <i class="fas fa-quote-right"></i>
                            <div class="user">
                                <img src={require("../../static/images/pic-3.png")} alt="" />
                                <div class="user-info">
                                    <h3>mark white</h3>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat iste commodi dicta ducimus ipsum. </p>
                        </div>


                    </div>

                </div>
                
            </section>

{/* 
            <section class="order" id="order">

                <h3 class="sub-heading"> order now </h3>
                <h1 class="heading"> free and fast </h1>

                <form action="">

                    <div class="inputBox">
                        <div class="input">
                            <span>your name</span>
                            <input type="text" placeholder="enter your name" />
                        </div>
                        <div class="input">
                            <span>your number</span>
                            <input type="number" placeholder="enter your number" />
                        </div>
                    </div>
                    <div class="inputBox">
                        <div class="input">
                            <span>your order</span>
                            <input type="text" placeholder="enter food name" />
                        </div>
                        <div class="input">
                            <span>additional food</span>
                            <input type="test" placeholder="extra with food" />
                        </div>
                    </div>
                    <div class="inputBox">
                        <div class="input">
                            <span>how much</span>
                            <input type="number" placeholder="how many orders" />
                        </div>
                        <div class="input">
                            <span>date and time</span>
                            <input type="datetime-local" />
                        </div>
                    </div>
                    <div class="inputBox">
                        <div class="input">
                            <span>your address</span>
                            <textarea name="" placeholder="enter your address" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div class="input">
                            <span>your message</span>
                            <textarea name="" placeholder="enter your message" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>

                    <input type="submit" value="order now" class="btn" />

                </form>

            </section> */}

       </>
    )
}