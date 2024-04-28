import React, { useState } from 'react';
import Tooltip from '../Tooltip';
import {Bars, Apoio, Evolucao, Garantia} from '../Icons';


const Sidebar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [hasItemSelected, setHasItemSelected] = useState(false);

    const toogleSidebar = () =>{
        setIsSideBarOpen(!isSideBarOpen);
    }
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setHasItemSelected(item != selectedItem || !hasItemSelected);
        setSelectedItem(item)
    }

    const handleSubitemClick = (subitem) =>{
        //lidar com o click do subitem
    }

    return(
        <div className='flex'>
            <div className={`${isSideBarOpen?'w-44':'w-12'} bg-gray-700 text-white shadow-lg p-2`}>
                <div className='flex items-center mb-6'>
                    <button className="text-white mr-2 focus:outline-none" onClick={toogleSidebar}>
                        <Bars />
                    </button>
                    <h2 className={`text-md font-semibold ${isSideBarOpen?'':'hidden'}`}>Portal Soluções</h2>
                </div>
                <SideBarItem title='Apoios' isSidebarOpen={isSideBarOpen} onClick={() => handleItemClick('Apoios')}/>
                <SideBarItem title='Evoluções' isSidebarOpen={isSideBarOpen} onClick={() => handleItemClick('Evoluções')}/>
                <SideBarItem title='Garantias' isSidebarOpen={isSideBarOpen} onClick={() => handleItemClick('Garantias')}/>
            </div>
            <div className={`w-32 bg-gray-400 shadow ${hasItemSelected?'':'hidden'}`}>          
                <SubSideBar title = {selectedItem}>
                    <SubSideBarItem title="Iniciados" onClick={() => handleSubitemClick('Iniciados')}/>
                    <SubSideBarItem title="Pendentes" onClick={() => handleSubitemClick('Pendentes')}/>
                    <SubSideBarItem title="Aguardando" onClick={() => handleSubitemClick('Aguardando')}/>
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

const SubSideBarItem = ({title, onClick}) =>{
    return(
        <div className='p-2 cursor-pointer hover:bg-gray-300' onClick={onClick}>
            {title}
        </div>
    );
};

export default Sidebar;