import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { productListAction } from "../Redux/Actions/Product"

const Hero = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productListAction());
    }, [dispatch]);
    return (
        <div>
                <>
                <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 pt-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Energía Solar Limpia y Sostenible?
                        <br className="hidden lg:inline-block" />Solar Solutions
                    </h1>
                    <p className="mb-8 leading-relaxed">Solar Solutions es una empresa líder en energía solar. Nos dedicamos a proporcionar soluciones sostenibles y limpias para la generación de energía. Únete a nosotros en nuestro viaje hacia un mundo más brillante y sostenible</p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/foto-gratis/hombre-trabajador-campo-junto-paneles-solares_1303-15597.jpg?w=826&t=st=1723831598~exp=1723832198~hmac=e46fe5050122bd6e62a4b701197e1c8478cf3141c13ce51e47bf98ede4a84581" />
                </div>
            </div>
        </section>
                </>
        </div> 
    )
};

export default Hero;