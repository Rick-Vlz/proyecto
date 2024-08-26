import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { productListAction } from "../Redux/Actions/Product"

const About = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productListAction());
    }, [dispatch]);
    return (
        <div>
            <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">¿Por qué Solar Solutions?</h2>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                            Tenemos a los mejores proveedores, garantizando rendimiento y máxima eficiencia energética.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        {/* Imagen a la izquierda */}
                        <div className="p-4 md:w-1/2 w-full">
                            <img
                                src="https://img.freepik.com/fotos-premium/ingeniero-energia-solar-reparando-sistema-avanzado-celdas-fotovoltaicas-entorno-industrial-sereno_1223049-3198.jpg?w=740"
                                alt="Solar Panel Installation"
                                className="rounded-lg object-cover object-center h-full w-full"
                            />
                        </div>
                        {/* Características a la derecha */}
                        <div className="p-4 md:w-1/2 w-full flex flex-col space-y-4">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <h3 className="text-gray-900 text-lg title-font font-medium">Alta eficiencia</h3>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base text-gray-600">
                                        Los paneles con la mejor eficiencia del mercado a tu disposición
                                    </p>
                                </div>
                            </div>
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <h3 className="text-gray-900 text-lg title-font font-medium">Larga duración</h3>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base text-gray-600">
                                        Built to withstand harsh weather conditions and provide long-lasting performance.
                                    </p>
                                </div>
                            </div>
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <h3 className="text-gray-900 text-lg title-font font-medium">Instalación completa</h3>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base text-gray-600">
                                        Nuestro equipo se encarga de la instalación garantizando, desde el día uno contaras con energía.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </>
        </div>
    )
};

export default About;