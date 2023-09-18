import Image from 'next/image'

function Header(){
    return(
        <header>
            <div className="logo">
                <a href="/home">
                    <Image 
                        src='/assets/img/bxs-bank.svg' 
                        alt="logo"
                        width={32}
                        height={32}
                    />
                </a>
                <a href="/home">
                    <h2 className="nombre-banco">ITBANK</h2>
                </a>
            </div>
        </header>
    );
}

export default Header;