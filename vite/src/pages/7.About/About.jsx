

const About = () => {
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
      <div className="container">
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
    </section>
  )
}

export default About