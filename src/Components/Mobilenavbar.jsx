import React, { useState } from 'react';
import { Menu, X, Home, User, Settings, Mail,Bell,Folder, University, Cpu } from 'lucide-react';
import logo from '../assets/Images/jec logo QQ.webp';
import { Link } from 'react-router-dom';

const Mobilenavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const menuItems = [
        { icon: Home, label: 'Home', href: '/' },
        { icon: Bell, label: 'Updates', href: '/updates' },
        { icon: Folder, label: 'Projects', href: '/projects' },
        { icon: Cpu, label: 'Equipments', href: '/equipments' },
        { icon: University, label: 'Institute', href: 'https://www.jecjabalpur.ac.in/' },
        { icon: Mail, label: 'Contact Us', href: '/contact_us' }
    ];

    return (
        <div className="relative">
            {/* Navbar Header */}
            <nav className="bg-slate-900 text-white px-4 py-3 flex justify-between items-center shadow-lg">

                <div class="flex items-center">
                    <img class="pl-2 mr-3 h-14 w-auto max-md:h-11" src={logo} alt="" />
                    <div class="collegeName">
                        <p class="text-2xl font-semibold max-md:text-xl max-md:mb-[-8px]">Robotics Laboratory</p>
                        <a class="no-underline text-white text-sm max-md:text-xs" target="_blank" href="https://www.jecjabalpur.ac.in/">Jabalpur
                            Engineering College</a>
                    </div>
                </div>
                <button
                    onClick={toggleMenu}
                    className="p-2 rounded-md hover:bg-slate-800 transition-colors duration-200"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Menu Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
                    <span className="text-lg font-semibold">Menu</span>
                    <button onClick={closeMenu} className="p-1 rounded-md hover:bg-slate-800">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="py-4">
                    {menuItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={index}
                                to={item.href}
                                onClick={closeMenu}
                                className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            >
                                <Icon className="w-5 h-5 mr-3" />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Mobilenavbar;