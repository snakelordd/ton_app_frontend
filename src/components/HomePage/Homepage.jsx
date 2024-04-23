import React from 'react';
import './Homepage.css'
import Carousel from "../Carousel/Carousel";
import ClientsCard from "../ClientsCard/ClientsCard";
import logo from '../../assets/magnit-logo.png'

const getItems = () => [
    { id: `element-1` , title: 'Акция!', img: 'product-1.png'},
    { id: `element-2` , title: 'New product', img: 'product-2.jpeg'}
]

const getClients = () => {

    return Array(6)
        .fill(0)
        .map((item, index) => {
            return {
                id: `card-${index}`,
                title: `Магнит ${index}`,
                icon: logo
            }
        })
}
const Homepage = () => {
    return (
        <div className='homepage p-4'>
            <div className='m-2 flex justify-between items-center mt-2'>
                <p className='text-lg '>Our partners</p>
                <a className='link'>More ></a>
            </div>
            <ClientsCard content={() => getClients()}/>
            <div className='m-2 mt-4'>
                <p className='text-2xl '>Our recommendations</p>
            </div>
            <Carousel content={()=>getItems()} type={'products'}/>
        </div>
    );
};

export default Homepage;