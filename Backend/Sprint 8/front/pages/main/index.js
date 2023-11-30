import Image from 'next/image'
import Layout from "./Layout";

function HomeSection(){
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    return(
        <Layout sidebarActiveLink="home-section-link">
            <main id="main-section">
                <h2 id="main-section-title">INICIO</h2>
                <div id="main-section-content">
                    <p className="home-user-welcome">
                        ¡Te damos la bienvenida, {userData.name}!
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
        </Layout>
    );
}

export default HomeSection;