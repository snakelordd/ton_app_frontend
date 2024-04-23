import React, {useState} from 'react';
import './ClientsCard.css'
const ClientsCard = ({content}) => {
    const [list, setList] = useState(content)
    return (
        <div className='w-full border-1 flex items-center justify-center rounded-2xl card-wrapper'>
            <div className='w-full flex flex-wrap justify-around '>
                {
                    list.map(item => {
                        return <ul className='client w-[47%] flex justify-start items-center p-1 rounded-lg m-1'>
                            <li className='w-5'><img src={item.icon}/></li>
                            <li className='ml-2'>{item.title}</li>
                        </ul>
                    })
                }
            </div>
        </div>
    );
};

export default ClientsCard;