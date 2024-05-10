import React, { Component } from 'react'
import Sidebar from './Sidebar'
import logo from '../assets/logo192.png'
import styled from 'styled-components'

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

// const Main = styled.main`
//   display: flex;
//   flex-flow: column;
//   width: 100%;
//   height: 100vh;
// `

// const Navbar = styled.nav`
//   background-color: #333333;
//   color: #FFFFFF;
//   padding: 8px;
// `

// const UserDiv = styled.div`
//   float: right;
//   display: flex;
//   align-items: center;
// `

// const UserImage = styled.img`
//   height: 40px;
//   border-radius: 100%;
// `

// const UserName = styled.h6`
//   padding: 8px;
// `

// const Principal = styled.div`
//   display: flex;
//   align-items: stretch;
//   height: 100%;
// `

// const Content = styled.div`
//   display: flex;
//   background-color: #F2F2F2;
//   width: 100%;
//   align-items: center;
//   justify-content: center;
// `
// const Footer = styled.footer`
//   background-color: #333333;
//   color: #FFFFFF;
// `

// const FooterText = styled.h2`
//   text-align: center;
// `

// const Template = ({children}) => {
//     return (
//       <Main>
//         <Nav />

//         <Principal>
//           <Sidebar />
//           <Content>
//             {children}
//           </Content>
//         </Principal>

//         <Footer>
//           <FooterText>
//             Desenvolvido por Leonardo Dick Bernardes
//           </FooterText>
//         </Footer>
//       </Main>
//     )
// }

// const Nav = () => {
//   return(
//     <Navbar>
//       <UserDiv>
//         <UserImage src={logo} alt='Foto do Usuário'/>
//         <UserName>Leonardo</UserName>
//       </UserDiv>        
//     </Navbar>
//   )
// }

// export default Template;

