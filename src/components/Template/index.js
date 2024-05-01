import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import logo from '../../assets/logo192.png'

export default class Template extends Component {
  render() {
    return (
      <div className='flex h-screen w-screen flex-col'>
        <nav className='bg-gray-800 text-white p-2'>
          <div className='float-right'>
            <div className='flex items-center'>
              <img src={logo} alt='Foto do usuário' className='h-10 rounded-full'/>
              <h6 className='pl-2'>Leonardo</h6>
            </div>
          </div>
          
        </nav>
        <div className='flex items-stretch h-full'>
          <Sidebar />
          <div className='flex bg-gray-300 w-full items-center justify-center'>
            {this.props.children}
          </div>
        </div>
        <footer className='bg-gray-900 text-white'>
          <h2 className='text-center'>
            Desenvolvido por Leonardo Dick Bernardes
          </h2>
        </footer>
      </div>
    )
  }
}
