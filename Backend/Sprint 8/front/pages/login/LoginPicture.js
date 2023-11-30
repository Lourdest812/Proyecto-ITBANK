import Image from 'next/image'


function LoginPicture(){
    return (
      <div className="login-picture">
        <Image 
            src="/assets/img/undraw_login_re_4vu2.svg" 
            alt="login-picture"
            width={320}
            height={191}
        />
      </div>
    );
}

export default LoginPicture;