import React, { useState } from 'react';
import Tooltip from '../Tooltip';
import {Bars, Apoio, Evolucao, Garantia} from '../Icons';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [hasItemSelected, setHasItemSelected] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toogleSidebar = () =>{
        setIsSideBarOpen(!isSideBarOpen);
    }

    const handleItemClick = (item) => {
        setHasItemSelected(item !== selectedItem || !hasItemSelected);
        setSelectedItem(item)
    }

    return(
        <div className='flex absolute top-0 h-screen'>
            <div className={`${isSideBarOpen?'w-44':'w-12'} bg-gray-700 text-white shadow-lg p-2`}>
                <div className='flex items-center mb-7'>
                    <button className="text-white mr-2 focus:outline-none" onClick={toogleSidebar}>
                        <Bars />
                    </button>
                    <h2 className={`text-md font-semibold ${isSideBarOpen?'':'hidden'}`}>Portal Soluções</h2>
                </div>
                <SideBarItem title='Apoios' isSidebarOpen={isSideBarOpen} onClick={() => handleItemClick('Apoios')}/>
                <SideBarItem title='Evoluções' isSidebarOpen={isSideBarOpen} onClick={() => handleItemClick('Evoluções')}/>
                <SideBarItem title='Garantias' isSidebarOpen={isSideBarOpen} onClick={() => handleItemClick('Garantias')}/>
            </div>
            <div className={`w-32 bg-gray-400 shadow ${hasItemSelected?'':'hidden'} text-center`}>          
                <SubSideBar title = {selectedItem}>
                    <SubSideBarItem title="Iniciados" item={selectedItem}/>
                    <SubSideBarItem title="Pendentes" item={selectedItem}/>
                    <SubSideBarItem title="Aguardando" item={selectedItem}/>
                </SubSideBar>
            </div>
        </div>
    )
};

const SideBarItem = ({title, isSidebarOpen, onClick}) => {
    return (
        <div className='mb-6 cursor-pointer hover:bg-gray-500 flex items-left' onClick={onClick}>
            <Tooltip text={title} isVisible={!isSidebarOpen}>
                <div className='flex items-center'>
                    {title === "Apoios" && <Apoio />}
                    {title === "Evoluções" && <Evolucao/>}
                    {title === "Garantias" && <Garantia/>}
                    <div className='pl-2'>
                        {isSidebarOpen && title}
                    </div>
                </div>
            </Tooltip>
      </div>
    );
};

const SubSideBar = ({title, children}) => {
    return(
        <div className='h-full bg-gray-400 shadow-lg'>
            <h2 className='p-4'>{title}</h2>
            <hr className='w-full border-black'/>
            {children}
        </div>
    );
};

const SubSideBarItem = ({title, item}) =>{
    return(
        <div className='p-2 cursor-pointer hover:bg-gray-300'>
            <Link to= {`../../${item}/${title.toLowerCase()}`}>
                {title}
            </Link>
        </div>

    );
};

export default Sidebar;