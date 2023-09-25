import React from 'react'
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';


function Navbar() {

    const navigate = useNavigate()

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            command: (e) => {
                navigate('/');
            }
        },
        {
            label: 'Store',
            icon: 'pi pi-fw pi-shopping-cart',
            command: (e) => {
                navigate('/store');
            }
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-bookmark',
            command: (e) => {
                navigate('/about');
            }
        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-envelope',
            command: (e) => {
                navigate('/contact');
            }
        }
    ]


  return (
    <>
         <Menubar model={items} />
    </>
  )
}

export default Navbar