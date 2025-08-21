const CategoryComp = () =>{
    return(
        <>
        <section className="category-section" id="category">
            <div className="category-container">
                <h1>Olympiad Level</h1>
                <br />
                <br />
                <br />
                <div className="category-row">
                    <div className="category-column">
                        <div className="category-card">
                            <div className="icon-wrapper">
                                <i className="fa-solid fa-building-columns"></i>  
                            </div>
                            <h3>Elementary School</h3>
                            <p>Come enter your school in the Math olympiad and achieve achievements together</p>
                            {/* <p>Ayo sertakan sekolahmu dalam olimpiade kimia dan raih prestasi bersama</p> */}
                        </div>
                    </div>
                    <div className="category-column">
                        <div className="category-card">
                            <div className="icon-wrapper">
                                <i className="fa-solid fa-building-columns"></i>  
                            </div>
                            <h3>Junior High School</h3>
                            <p>Come enter your school in the Math olympiad and achieve achievements together</p>
                            {/* <p>Ikuti Olimpiade kimia tingkat universitas dan tunjukan kemampuanmu</p> */}
                        </div>
                    </div>
                    <div className="category-column">
                        <div className="category-card">
                            <div className="icon-wrapper">
                                <i className="fa-solid fa-building-columns"></i>  
                            </div>
                            <h3>Senior High School</h3>
                            <p>Come enter your school in the Math olympiad and achieve achievements together</p>
                            {/* <p>Ayo sertakan sekolahmu dalam olimpiade kimia dan raih prestasi bersama</p> */}
                        </div>
                    </div>
                    <div className="category-column">
                        <div className="category-card">
                            <div className="icon-wrapper">
                                <i className="fa-solid fa-building-columns"></i>  
                            </div>
                            <h3>University</h3>
                            <p>Join the university Math Olympiad and show your skills</p>
                            {/* <p>Ikuti Olimpiade kimia tingkat universitas dan tunjukan kemampuanmu</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default CategoryComp