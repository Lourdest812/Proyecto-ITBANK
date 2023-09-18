import Image from 'next/image'


function HomeSection(){
    return(
        <main id="main-section">
        <h2 id="main-section-title">INICIO</h2>
        <div id="main-section-content">
            <p className="home-user-welcome">
                ¡Te damos la bienvenida!
            </p>
            <div className="home-user-welcome-img">
                <Image 
                    src="/assets/img/home_welcome.svg" 
                    alt="welcome-picture"
                    width={400}
                    height={339}
                />
            </div>  
        </div>
        </main>
    );
}

export default HomeSection;

