import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidenav = ({ sidenavOpen, setSidenavOpen, logoutHandler, userInfo }) => {
    const sidenavRef = useRef(null);

    // Cierra el sidenav si se hace clic fuera de él
    useEffect(() => {
        function handleClickOutside(event) {
            if (sidenavRef.current && !sidenavRef.current.contains(event.target)) {
                setSidenavOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidenavRef, setSidenavOpen]);

    return (
        <div 
            className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-75 transform ${sidenavOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}
            aria-hidden={!sidenavOpen}
        >
            <div 
                ref={sidenavRef} 
                className="absolute top-0 right-0 w-64 bg-white h-full shadow-lg flex flex-col justify-between"
            >
                {/* Header del Sidenav */}
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <img src="https://www.svgrepo.com/show/529971/sun-2.svg" className="h-8" alt="Solar Solutions Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">Solar Solutions</span>
                    </div>
                </div>

                {/* Opciones del Sidenav */}
                <ul className="flex flex-col space-y-2 p-4">
                    <li>
                        <Link 
                            to="/" 
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500"
                            onClick={() => setSidenavOpen(false)}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <a 
                            href="#" 
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500"
                            onClick={() => setSidenavOpen(false)}
                        >
                            Acerca de
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#productos" 
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500"
                            onClick={() => setSidenavOpen(false)}
                        >
                            Productos
                        </a>
                    </li>
                </ul>

                {/* Botón de Login/Logout */}
                <div className="p-4">
                    {!userInfo ? (
                        <Link 
                            to="/login"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => setSidenavOpen(false)}
                        >
                            Login
                        </Link>
                    ) : (
                        <button
                            className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
                            onClick={() => {
                                setSidenavOpen(false);
                                logoutHandler();
                            }}
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
