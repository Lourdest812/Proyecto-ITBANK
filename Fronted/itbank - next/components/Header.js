import Image from 'next/image'
import Link from 'next/link';


function Header(){
    return(
        <header>
            <div className="logo">
                
                <Link href="/main">
                    <Image 
                        src='/assets/img/bxs-bank.svg' 
                        alt="logo"
                        width={32}
                        height={32}
                    />
                </Link>
                <Link href="/main">
                    <h2 className="nombre-banco">ITBANK</h2>
                </Link>
            </div>
        </header>
    );
}

export default Header;