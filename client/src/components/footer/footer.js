import "../../static/css/style.css";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (

        <>
            <section class="footer">

                <div class="box-container">

                    <div class="box">
                        <h3>locations</h3>
                        <a href="#">pune</a>
                        <a href="#">mumbai</a>
                        <a href="#">delhi</a>
                        <a href="#">chennai</a>
                        <a href="#">kolkata</a>
                    </div>

                    <div class="box">
                        <h3>quick links</h3>
                        <a href="#">home</a>
                        <a href="#">dishes</a>
                        <a href="#">about</a>
                        <a href="#">menu</a>
                        <a href="#">reivew</a>
                        <a href="#">login</a>
                    </div>

                    <div class="box">
                        <h3>contact info</h3>
                        <a href="#">+91 9067691363</a>
                        <a href="#">+91 8668654546</a>
                        <a href="#">harshjagtap2003@gmail.com</a>
                        <a href="#">20210802014@dypiu.ac.in</a>
                        <a href="#">pune, india - 411057</a>
                    </div>

                    <div class="box">
                        <h3>follow us</h3>
                        <a href="#">facebook</a>
                        <a href="#">twitter</a>
                        <a href="#">instagram</a>
                        <a href="#">linkedin</a>
                    </div>

                </div>

                <div class="credit"> copyright @ 2023 by <span>Harsh Jagtap</span> </div>

            </section>


        </>
    )
}