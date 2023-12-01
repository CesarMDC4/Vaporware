import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';

// global style for border box
const globalStyles = `
    *, ::after, ::before {
        box-sizing: border-box;
    }
`;

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


    const fadeInUpStyle = {
        visibility: 'visible',
        animationName: 'fadeInUp',
      };
    
      const colLGStyle = {
        WebkitBoxFlex: 0,
        MsFlex: '0 0 25%',
        flex: '0 0 25%',
        maxWidth: '25%',
      };
    
      const colStyle = {
        position: 'relative',
        width: '100%',
        minHeight: '1px',
        paddingRight: '15px',
        paddingLeft: '15px',
      };

      const centeredStyle = {
        display: 'inline-block',
        marginLeft: 'auto',
        marginRight: 'auto',
      };

      const memberHoverStyle = {
        background: 'rgba(0, 0, 0, 0.7)',
        opacity: 1,
        transition: '0.4s',
      };
    
      const memberInfoStyle = {
        opacity: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        borderRadius: '50%',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        transition: '0.2s',
      };
    
      const imgFluidStyle = {
        maxWidth: '100%',
        height: 'auto',
      };
    
      const imgStyle = {
        maxWidth: '100%',
        height: 'auto',
        verticalAlign: 'middle',
        borderStyle: 'none',
      };

      const img =  {
        verticalAlign: 'middle',
        borderStyle: 'none',
        }

    const linkStyle = {
        color: '-webkit-link',
        cursor: 'auto',
        color: '#007bff',
            textDecoration: 'none',
            backgroundColor: 'transparent',
            WebkitTextDecorationSkip: 'objects',
        };
    
        const faLinkedinStyle = {
        content: '"\f0e1"',
        };
    
        const faStyle = {
        display: 'inline-block',
        font: 'normal normal normal 14px/1 FontAwesome',
        fontSize: 'inherit',
        textRendering: 'auto',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        };
    
        const socialIconStyle = {
        fontSize: '18px',
        margin: '0 2px',
        };
    
        const socialLinkStyle = {
        color: '#fff',
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
            .section-header h5 {
                font-size: 48px;
                color: #003861;
                text-transform: uppercase;
                text-align: center;
                font-weight: 700;
                position: relative;
                padding-bottom: 10px;
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
            }q
            .section-header before {
                position: absolute;
                display: block;
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


        <div className="container mx-auto">
            <header className="section-header">
                
                <div className="facts-header"> 
                    ::before
                    <h3> Facts </h3>
                    ::after
                    <p>Some magic numbers below. Counting up since 2008.</p>
                </div>

                <div className="horizontal-info">  
                    <div className="col-lg-3 col-6 text-center">
                        <h5><span data-toggle="counter-up">180</span></h5>
                         <p>Clients</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <h5><span data-toggle="counter-up">1,350</span></h5>
                        <p>Projects</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <h5><span data-toggle="counter-up">78</span></h5>
                        <p>Years of Combined Experience</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <h5><span data-toggle="counter-up">9</span></h5>
                        <p>Hard Workers</p>
                    </div>
                </div>

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
        <div className="mb-12">
            <h1 className="text-center font-bold text-4xl mt-4 mb-12 font-sans">THE TEAM</h1>
            <div className="w-3/4 mx-auto">
                
        
    <section id="team">
      <style>
        {`
          .fadeInUp {
            animation-name: fadeInUp;
          }
          @media (min-width: 992px) {
            .col-lg-3 {
              -webkit-box-flex: 0;
              -ms-flex: 0 0 25%;
              flex: 0 0 25%;
              max-width: 25%;
            }
          }
          #team .centered {
            display: inline-block;
            margin-left: auto;
            margin-right: auto;
          }
        `}
      </style>

      <div className="container">
      <style>
        {`
          #team .member:hover .member-info {
            background: rgba(0, 0, 0, 0.7);
            opacity: 1;
            transition: 0.4s;
          }
          #team .member .member-info {
            opacity: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            border-radius: 50%;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transition: 0.2s;
            color: white;
          }
          .img-fluid {
            max-width: 100%;
            height: auto;
            margin-left: auto;
            margin-right: auto;
            vertical-align: middle;
            border-style: none;
          }
          #team .member {
            text-align: center;
            margin-bottom: 20px;
            background: #fff;
            position: relative;
            }
          #team img {
            border-radius: 50%;
          }
          img {
            vertical-align: middle;
            border-style: none;
            }
          /* Adding the provided styles for columns */
          .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, 
          .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, 
          .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, 
          .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, 
          .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, 
          .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, 
          .col-xl-auto {
            position: relative;
            width: 100%;
            min-height: 1px;
            padding-right: 15px;
            padding-left: 15px;
          }
          /* style for the facts portion of the site */ 
          .horizontal-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-align: center;
          }
          .horizontal-info h3, .horizontal-info p {
                flex: 1;
                margin: 0;
          }
          /*style for the about info portion on the site*/
        `}
      </style>

        <div className="section-header wow fadeInUp" style={fadeInUpStyle}>
          
          <p>Here is the competent Cypress Team. Cypress Engineering Group combines experience and energy of its competent engineers from multi-disciplinary backgrounds and high educational degrees.</p>
        </div>
        <div className="row">
          {/* Individual team members */}
          {/* You'd replicate this structure for each team member */}
          <div className="col-lg-3 col-md-4 wow fadeInUp centered" style={{ ...colLGStyle, ...centeredStyle }}>
            <div className="member">
              <img src="src/assets/img/sefa.jpg" className="img-fluid" alt="Sefa Isik"/>
              <div className="member-info">
                <div className="member-info-content"> 
                  <h4>Sefa Isik</h4>
                  <span>Founder, PE, MSME, CSP</span>
                 <div className="social">
                    <a href="https://www.linkedin.com/in/sefa-isik-pe-csp-15bb4843/" target="_blank" rel="noopener" style={linkStyle}>
                        <i className="fa fa-linkedin" style={faStyle}>IN</i>
                    </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of individual team member */}
          {/* Add more team members similarly */}
          <div className="col-lg-3 col-md-4 wow fadeInUp centered" style={{ ...colLGStyle, ...centeredStyle }}>
            <div className="member">
              <img src="src/assets/img/Metin.png" className="img-fluid" alt="Metin Serttunc"/>
              <div className="member-info">
                <div className="member-info-content"> 
                  <h4>Metin Serttunc</h4>
                  <span>Principal, PE, CBCP, CEM</span>
                 <div className="social">
                    <a href="https://www.cypresseg.com" target="_blank" rel="noopener" style={linkStyle}>
                        <i className="fa fa-linkedin" style={faStyle}>IN</i>
                    </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of individual team member */}
          {/* Add more team members similarly */}
          <div className="col-lg-3 col-md-4 wow fadeInUp centered" style={{ ...colLGStyle, ...centeredStyle }}>
            <div className="member">
              <img src="src/assets/img/scott.png" className="img-fluid" alt="Scott Stroshane"/>
              <div className="member-info">
                <div className="member-info-content"> 
                  <h4>Scott Stroshane</h4>
                  <span>Senior Project Manager, PE</span>
                 <div className="social">
                    <a href="https://www.cypresseg.com" target="_blank" rel="noopener" style={linkStyle}>
                        <i className="fa fa-linkedin" style={faStyle}>IN</i>
                    </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of individual team member */}
          {/* Add more team members similarly */}
          <div className="col-lg-3 col-md-4 wow fadeInUp centered" style={{ ...colLGStyle, ...centeredStyle }}>
            <div className="member">
              <img src="src/assets/img/Steven.png" className="img-fluid" alt="Steven E Rawson"/>
              <div className="member-info">
                <div className="member-info-content"> 
                  <h4>Steven E Rawson</h4>
                  <span>Project Manager, PE</span>
                 <div className="social">
                    <a href="https://www.linkedin.com/in/steven-e-rawson-p-e-025a659" target="_blank" rel="noopener" style={linkStyle}>
                        <i className="fa fa-linkedin" style={faStyle}>IN</i>
                    </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of individual team member */}
          {/* Add more team members similarly */}
          <div className="col-lg-3 col-md-4 wow fadeInUp centered" style={{ ...colLGStyle, ...centeredStyle }}>
            <div className="member">
              <img src="src/assets/img/Chahan.png" className="img-fluid" alt="Chahan Shah"/>
              <div className="member-info">
                <div className="member-info-content"> 
                  <h4>Chahan Shah</h4>
                  <span>Project Manager, PE, CxA</span>
                 <div className="social">
                    <a href="https://www.linkedin.com/in/chahan-shah-p-e-cxa-9934268b" target="_blank" rel="noopener" style={linkStyle}>
                        <i className="fa fa-linkedin" style={faStyle}>IN</i>
                    </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of individual team member */}
          {/* Add more team members similarly */}
          <div className="col-lg-3 col-md-4 wow fadeInUp centered" style={{ ...colLGStyle, ...centeredStyle }}>
            <div className="member">
              <img src="src/assets/img/Rod.jpg" className="img-fluid" alt="Rod Revera"/>
              <div className="member-info">
                <div className="member-info-content"> 
                  <h4>Rod Revera</h4>
                  <span>Project Manager, PE</span>
                 <div className="social">
                    <a href="https://www.cypresseg.com" target="_blank" rel="noopener" style={linkStyle}>
                        <i className="fa fa-linkedin" style={faStyle}>IN</i>
                    </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of individual team member */}
          {/* Add more team members similarly */}
          <div className="col-lg-3 col-md-4 wow fadeInUp centered" style={{ ...colLGStyle, ...centeredStyle }}>
            <div className="member">
              <img src="src/assets/img/mfatihkonus.jpg" className="img-fluid" alt="Fatih Konus"/>
              <div className="member-info">
                <div className="member-info-content"> 
                  <h4>Fatih Konus</h4>
                  <span>Project Engineer, PHD, QISP</span>
                 <div className="social">
                    <a href="https://www.linkedin.com/in/m-fatih-konus-ph-d-93206072/" target="_blank" rel="noopener" style={linkStyle}>
                        <i className="fa fa-linkedin" style={faStyle}>IN</i>
                    </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of individual team member */}
          {/* Add more team members similarly */}
          <div className="col-lg-3 col-md-4 wow fadeInUp centered" style={{ ...colLGStyle, ...centeredStyle }}>
            <div className="member">
              <img src="src/assets/img/JulieLin.png" className="img-fluid" alt="Julie Lin"/>
              <div className="member-info">
                <div className="member-info-content"> 
                  <h4>Julie Lin</h4>
                  <span>Production Manager</span>
                 <div className="social">
                    <a href="https://www.linkedin.com/in/julielin2/" target="_blank" rel="noopener" style={linkStyle}>
                        <i className="fa fa-linkedin" style={faStyle}>IN</i>
                    </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of individual team member */}
          {/* Add more team members similarly */}
          <div className="col-lg-3 col-md-4 wow fadeInUp centered" style={{ ...colLGStyle, ...centeredStyle }}>
            <div className="member">
              <img src="src/assets/img/Hakan.png" className="img-fluid" alt="Hakan Eren"/>
              <div className="member-info">
                <div className="member-info-content"> 
                  <h4>Hakan Eren</h4>
                  <span>Regulatory Compliance Manager</span>
                 <div className="social">
                    <a href="https://tr.linkedin.com/in/hakan-eren-9170bb49" target="_blank" rel="noopener" style={linkStyle}>
                        <i className="fa fa-linkedin" style={faStyle}>IN</i>
                    </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of individual team member */}
          {/* Add more team members similarly */}
          <div className="col-lg-3 col-md-4 wow fadeInUp centered" style={{ ...colLGStyle, ...centeredStyle }}>
            <div className="member">
              <img src="src/assets/img/Daniel.png" className="img-fluid" alt="Daniel Soto"/>
              <div className="member-info">
                <div className="member-info-content"> 
                  <h4>Daniel Soto</h4>
                  <span>Designer</span>
                 <div className="social">
                    <a href="https://www.linkedin.com/in/daniel-soto-48117947" target="_blank" rel="noopener" style={linkStyle}>
                        <i className="fa fa-linkedin" style={faStyle}>IN</i>
                    </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of individual team member */}
          {/* Add more team members similarly */}
          <div className="col-lg-3 col-md-4 wow fadeInUp centered" style={{ ...colLGStyle, ...centeredStyle }}>
            <div className="member">
              <img src="src/assets/img/placeholder_female.png" className="img-fluid" alt="Meselina Garcia"/>
              <div className="member-info">
                <div className="member-info-content"> 
                  <h4>Meselina Garcia</h4>
                  <span></span>
                 <div className="social">
                    <a href="https://www.cypresseg.com" target="_blank" rel="noopener" style={linkStyle}>
                        <i className="fa fa-linkedin" style={faStyle}>IN</i>
                    </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of individual team member */}
          {/* Add more team members similarly */}
          <div className="col-lg-3 col-md-4 wow fadeInUp centered" style={{ ...colLGStyle, ...centeredStyle }}>
            <div className="member">
              <img src="src/assets/img/placeholder_female.png" className="img-fluid" alt="Kathryn Kroeze"/>
              <div className="member-info">
                <div className="member-info-content"> 
                  <h4>Kathryn Kroeze</h4>
                  <span>Bookkeeper</span>
                 <div className="social">
                    <a href="https://www.cypresseg.com" target="_blank" rel="noopener" style={linkStyle}>
                        <i className="fa fa-linkedin" style={faStyle}>IN</i>
                    </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of individual team member */}
          {/* Add more team members similarly */}
          <div className="col-lg-3 col-md-4 wow fadeInUp centered" style={{ ...colLGStyle, ...centeredStyle }}>
            <div className="member">
              <img src="src/assets/img/RobbyKroeze.png" className="img-fluid" alt="Robby Kroeze"/>
              <div className="member-info">
                <div className="member-info-content"> 
                  <h4>Robby Kroeze</h4>
                  <span>Retired</span>
                 <div className="social">
                    <a href="https://www.cypresseg.com" target="_blank" rel="noopener" style={linkStyle}>
                        <i className="fa fa-linkedin" style={faStyle}>IN</i>
                    </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of individual team member */}
          {/* Add more team members similarly */}
        </div>
      </div>
    </section>
    </div>  
        </div>

    </section>


    )
}

export default About