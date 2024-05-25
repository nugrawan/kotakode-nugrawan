import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';

const navigation = [
  {
    name: 'Tentang',
    to: '/about'
  },
  {
    name: 'Produk',
    to: '/product'
  },
  {
    name: 'FAQ',
    to: '/faq'
  },
  {
    name: 'Events',
    to: '/events'
  },
  {
    name: 'Partnership',
    to: '/partnership'
  }
]

const Navbar = () => {
  return (
    <nav className='fixed bg-white top-0 w-full h-[65px] gap-10 py-5 px-20 border-b-[3px] border-secondary flex justify-between items-center'>
      <div className='px-2 flex items-center w-full gap-10'>
          <div className='flex gap-2'>
            <Link to="/"><Logo /></Link>
          </div>
          <ul className='flex ml-10 justify-around font-bold text-[1rem] text-text/80'>
            {
              navigation.map((item, index) => {
                return (
                  <li key={index} className='px-4 rounded-md py-2 border-white border hover:border-primary'><Link to={item.to}>{item.name}</Link></li>
                )
              })
            }            
          </ul>
      </div>

      <div className='flex gap-5'>
        <Button text="Masuk" className="border border-primary text-primary hover:bg-primary hover:text-white" />
        <Button text="Daftar" className="bg-primary text-white" />
      </div>
    </nav>
  );
}

export default Navbar;
