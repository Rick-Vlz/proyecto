import { useDispatch, useSelector } from "react-redux";
import { UserDropdown } from "../components/Dropdown";
import { Link } from "react-router-dom";
import { userLogoutAction } from "../Redux/Actions/User";
import Checkout from "../pages/Checkout";
import Sidenav from '../components/Sidenav';
import { useState } from "react";

const Navbar = () => {
    const userLoginReducer = useSelector((state) => state.userLoginReducer)
    const { userInfo } = userLoginReducer
    const dispatch = useDispatch();

    const qty = useSelector((state)=> state.cartReducer.cartItems.reduce((total,item)=> total+item.qty,0));

    const logoutHandler = () => {
        dispatch(userLogoutAction())
    };

    const [open, setOpen] = useState(false)
    const [sidenavOpen, setSidenavOpen] = useState(false);

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0 z-50 shadow-lg">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://www.svgrepo.com/show/529971/sun-2.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Solar Solutions</span>
                    </Link>
                    <div className="flex md:order-2">
                        {!userInfo ? (
                            <Link to="/login" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Login
                            </Link>
                        ) : (
                            <>
                                <UserDropdown logoutHandler={logoutHandler}></UserDropdown>
                                <button
                                    data-collapse-toggle="navbar-cta"
                                    type="button"
                                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-controls="navbar-cta"
                                    aria-expanded="false"
                                    onClick={() => setOpen(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    <span>{qty}</span>
                                </button>
                                <Checkout open={open} setOpen={setOpen}></Checkout>
                            </>
                        )}

                        <button
                            data-collapse-toggle="navbar-cta"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-cta"
                            aria-expanded={sidenavOpen}
                            onClick={() => setSidenavOpen(!sidenavOpen)}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>


                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Inicio</Link>
                            </li>                       
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Acerca de</a>
                            </li>
                            <li>
                                <a href="#productos" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Productos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Sidenav 
                sidenavOpen={sidenavOpen} 
                setSidenavOpen={setSidenavOpen} 
                logoutHandler={logoutHandler} 
                userInfo={userInfo} // Pasa la información del usuario
            />

            {/* Asegúrate de agregar un margen superior al contenido principal para evitar que quede oculto */}
            <div className="mt-20">
                {/* Aquí va el contenido principal de la página */}
            </div>
        </>
    );
};

export default Navbar;
