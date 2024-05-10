import React, { useState } from 'react';
import Tooltip from './Tooltip';
import {Bars, Apoio, Evolucao, Garantia} from './Icons';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const hasItemSelected = selectedItem !== null;

    const toogleSidebar = () =>{
        setIsSideBarOpen(!isSideBarOpen);
    }

    const handleItemClick = (e) => {
        const item = e.currentTarget.id
        setSelectedItem(selectedItem === item ? null : item);
    }

    return(
        <aside className='flex absolute top-0 h-screen'>
            <div className='w-max bg-gray-700 text-white shadow-lg p-2'>
                <div className='flex items-center mb-7'>
                    <button className="text-white mr-2 focus:outline-none" onClick={toogleSidebar}>
                         <Bars />
                    </button>
                    {isSideBarOpen && <span>Portal Soluções</span>}
                </div>
                <ul className={`flex flex-col ${isSideBarOpen?'pr-4':''}`}>
                    <SideBarItem title='Apoios' icon={<Apoio />} isSidebarOpen={isSideBarOpen} onClick={handleItemClick}/>
                    <SideBarItem title='Evoluções' icon={<Evolucao />} isSidebarOpen={isSideBarOpen} onClick={handleItemClick}/>
                    <SideBarItem title='Garantias' icon={<Garantia />} isSidebarOpen={isSideBarOpen} onClick={handleItemClick}/>
                </ul>
            </div>
            {hasItemSelected && (
                <div className={`w-32 bg-gray-400 shadow text-center`}>
                    <h2 className='p-4 font-bold tracking-wider'>{selectedItem}</h2> 
                    <hr className='w-full border-black'/>
                    <ul className='flex flex-col'>
                        <SideBarSubItem title="Iniciados" item={selectedItem}/>
                        <SideBarSubItem title="Pendentes" item={selectedItem}/>
                        <SideBarSubItem title="Aguardando" item={selectedItem}/>
                    </ul>         
            </div>
            )}
        </aside>
    )
};

const SideBarItem = ({title, icon, isSidebarOpen, onClick}) => {
    return (
        <li className='mb-6 cursor-pointer hover:bg-gray-500 w-full' onClick={onClick} id={title}>
            <Tooltip text={title} isVisible={!isSidebarOpen}>
                <div className='flex items-center pt-1 pb-1'>
                    {icon}
                    {isSidebarOpen && (<span className='pl-2'>{title}</span>)}   
                </div>
            </Tooltip>
        </li>
    );
};

const SideBarSubItem = ({title, item}) => {
    return (
        <li className='py-2 cursor-pointer hover:bg-gray-300' id={title}>
            <Link to = {`../../${item}/${title.toLowerCase()}`} className='flex justify-center'>
                {title}
            </Link>
        </li>
    )
}

export default Sidebar;