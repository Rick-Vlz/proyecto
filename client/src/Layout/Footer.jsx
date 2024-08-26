import SSLogo from '../assets/SSLogosvg.svg';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
                        <img src={SSLogo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Solar Solutions</span>
                    </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Acerca de</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Privacidad</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://solar-solutions-ecommerce.vercel.app/" target='_blank' className="hover:underline">Solar Solutions S.A. de C.V.</a> Todos los derechos reservados.</span>
                </div>
            </footer>

        </>
    );
};

export default Footer;