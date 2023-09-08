import "./search.css";


export const Search = () => {
    return (
        <>
            <div className="body">
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
                </div>
            </div>
        </>
    )


}