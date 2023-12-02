import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Root() {
    const router = useRouter();

    useEffect(() => {
        async function verificarAutenticacion() {
            const userData = JSON.parse(sessionStorage.getItem('userData'));
            if (userData) {
                // Si el usuario está logeado, redirige a la página principal.
                router.push('/main');
            } else {
                // Si el usuario no está logeado, redirige a la página de inicio de sesión.
                router.push('/login');
            }
        }

        verificarAutenticacion();
    }, []);

    return (
        <></>
    );
}