import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss'

function HomePage(){
    return(
        <div className='HomePage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='Title'>Find Real Estate Near You and Get Your Dream Place</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloremque odio officia beatae optio, itaque eos, quasi adipisci saepe quam soluta necessitatibus, quia in nesciunt. Sapiente fugit consectetur saepe eius!
                </p>
                <SearchBar />
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>1200</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="imagecontainer">
        <img src="/bg.png" alt='' />
        </div>
        
        </div> 
        
    )
}

export default HomePage;