import Link from "next/link"

const HeroComp = () =>{
    return(
        <>
        <section className="hero-section" id="hero-section">
            <div className="hero-content">
                <h1>IYMO</h1>
                <h3>International Youth Math Olympiad</h3>
                {/* <p>Registration is now open for the International Youth Math Olympiad! <br />
                Join this prestigious event and gain an unforgettable mathematical experience!</p> */}
                    <br />
                    <div className="hero-social-icon">   
                        <Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></Link>
                        <Link href="https://www.instagram.com/iymo.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className='fab fa-instagram instagram-bg'></i></Link>
                        <Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></Link>
                        <Link href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></Link>
                        <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></Link>
                    </div>
                    <br />
                    <br />
                    <Link href="/registration" className="btn">Registration Here!</Link>
                    <Link href="https://drive.google.com/file/d/1g3Z1P5fGJGdDxoPklfWcYszwLWlQmE-l/preview" target="_blank" className="btn">GuideBook</Link>
            </div>
            <div className="hero-img">
                <img src="/assets/images/logo/IYMO.png" alt="" />
            </div>
        </section>
        </>
    )
}

export default HeroComp