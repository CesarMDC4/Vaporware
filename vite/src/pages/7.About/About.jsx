import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';


const About = () => {


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6, // This will show 6 logos at a time
        slidesToScroll: 6, // This will scroll 6 logos at a time
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: 'linear',
    };


    const logos = [
        // Add the URLs of your logos here
        'src/assets/img/clients/American_Cooling.png',
        'src/assets/img/clients/Andy Boy Logo 2.jpg',
        'src/assets/img/clients/Bear-Creek-logo.jpg',
        'src/assets/img/clients/Bornt Family Farms Logo.gif',
        'src/assets/img/clients/Candelaria.png',
        'src/assets/img/clients/Capurro Farms.bmp',

        'src/assets/img/clients/central cold storage.png',
        'src/assets/img/clients/CentralCoastCooling.jpg',
        'src/assets/img/clients/Coke Farms.png',
        'src/assets/img/clients/COX LOGO 1 reflex.jpg',
        'src/assets/img/clients/Crop Production Services.png',
        'src/assets/img/clients/dglogo2.bmp',

        'src/assets/img/clients/dolelogo.jpg',
        'src/assets/img/clients/driscollslogo.gif',
        'src/assets/img/clients/Earthbound_Farm_Organic.jpg',
        'src/assets/img/clients/Crop Production Services.png',
        'src/assets/img/clients/Field Fresh Farms.png',
        'src/assets/img/clients/foxy-logo.jpg',

        'src/assets/img/clients/Fresh_Express.jpg',
        'src/assets/img/clients/GloriAnnFarmsLogo.png',
        'src/assets/img/clients/golden acre farms.jpg',
        'src/assets/img/clients/Growers Express.jpg',
        'src/assets/img/clients/Growers Transplanting.png',
        'src/assets/img/clients/Mann_Packing_new.png',

        'src/assets/img/clients/logo-ClassicFarmsLogoRGB.png',
        'src/assets/img/clients/Mission Produce.png',
        'src/assets/img/clients/Ocean Mist Logo.jpg',
        'src/assets/img/clients/logo_organicgirl.png',
        'src/assets/img/clients/PFGLedyard.png',
        'src/assets/img/clients/Silva Farms Logo 2.png',

        'src/assets/img/clients/SmartWash Solutions.png',
        'src/assets/img/clients/Southern Vacuum Cooling.jpg',
        'src/assets/img/clients/Tanimura_and_Antle.png',
        'src/assets/img/clients/Taylor Farms California-1.png',
        'src/assets/img/clients/Taylor_Farms_Retail-logo.jpg',
        'src/assets/img/clients/True_Leaf_Farms.png',
        
        'src/assets/img/clients/TWE Crest Medium News Preview.jpg',
        'src/assets/img/clients/Veg Tech SCS Logo 10-5-15 c.jpg',
        'src/assets/img/clients/Western Precooling Logo.jpg',
        'src/assets/img/clients/American_Cooling.png',
        'src/assets/img/clients/Andy Boy Logo 2.jpg',
        'src/assets/img/clients/Bear-Creek-logo.jpg',
        // ...
    ];  


    return (
    <section id="about">
        <style>
        {`
            .section-header h3 {
            font-size: 32px;
            color: #111;
            text-transform: uppercase;
            text-align: center;
            font-weight: 700;
            position: relative;
            padding-bottom: 15px;
            }
            .section-header p {
            text-align: center;
            padding-bottom: 30px;
            color: #333;
            margin: 0 0 30px 0;
            }
            h1, h2, h3, h4, h5, h6 {
            font-family: "Exo", sans-serif;
            font-weight: 400;
            margin: 0 0 20px 0;
            padding: 0;
            }
            p {
            padding: 0;
            margin: 0 0 30px 0;
            }
        `}
        </style>


        <div className="container mx-auto">
        <header className="section-header">
            <h3>We are...</h3>
            <p>
            Cypress Engineering Group (CEG), providing engineering services to companies primarily in California and
            Arizona. <br/><br/>
            CEG (formerly KIE Consultants) was founded by Robby Kroeze and Sefa Isik in 2008. <br/><br/>
            As a diversified engineering group, CEG prides itself in developing close relationships with clients and
            always being available for projects in a wide spectrum, no matter the size. At CEG, we are constantly
            working to improve our services and maintain pace with the latest developments in our industry.
            </p>
        </header>
        </div>


        <div className="container">
        <header className="section-header">
            <h3> Cypress Engineering Facts </h3>
            <p>
            Clients
            </p>

            <p>
            Projects
            </p>
             
            <p>
            years of combined experience
            </p>
        </header>
        </div>


        <div className="mb-12">
            <h1 className="text-center font-bold text-4xl mt-4 mb-12 font-sans">OUR CLIENTS</h1>
            <div className="w-3/4 mx-auto">
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                    <div key={index} className="px-4">
                        <img src={logo} alt='logo' className="w-auto h-32 object-contain" />
                    </div>
                    ))}
                </Slider>
            </div>  
        </div>
    </section>


    )
}

export default About