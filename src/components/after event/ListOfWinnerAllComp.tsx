import Link from "next/link"

const ListOfWinnerAllComp = () => {
    return(
        <>
        <section className='website-event-section'>
        <div className="container">
            <div className="box">
                <div className="content">
                    <div className="icon">
                        <i className="fa-solid fa-trophy"></i>
                    </div>
                    <div className="text">
                        <Link href="/after-event/2025">List of Winner 2025</Link>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="content">
                    <div className="icon">
                        <i className="fa-solid fa-trophy"></i>
                    </div>
                    <div className="text">
                        <Link href="/after-event/2024B2">List of Winner Batch 2 2024</Link>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="content">
                    <div className="icon">
                        <i className="fa-solid fa-trophy"></i>
                    </div>
                    <div className="text">
                        <Link href="/after-event/2024">List of Winner Batch 1 2024</Link>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="content">
                    <div className="icon">
                        <i className="fa-solid fa-trophy"></i>
                    </div>
                    <div className="text">
                        <Link href="/after-event/2023">List of Winner 2023</Link>
                    </div>
                </div>
            </div>          
        </div>
        </section>
        </>
    )
}

export default ListOfWinnerAllComp