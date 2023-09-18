import { useRouter } from 'next/router';

export default function Root() {
    const router = useRouter();
    return (
        <></>
    );
}


async function verificarAutenticacion() {
    const estaLogeado = false; // TODO: implementar logica de validacion
    return estaLogeado;
}

export async function getServerSideProps(context) {
    const estaLogeado = await verificarAutenticacion();

    if (estaLogeado) {
        // Si el usuario está logeado, redirige a la página principal.
        return {
        redirect: {
            destination: "/home",
            permanent: false,
        },
        };
    } else {
        // Si el usuario no está logeado, redirige a la página de inicio de sesión.
        return {
        redirect: {
            destination: "/login",
            permanent: false,
        },
        };
    }
}
