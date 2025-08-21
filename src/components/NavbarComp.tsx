'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../assets/css/Navbar.css'

const NavbarComp: React.FC = () => {
    useEffect(() => {
        // Pastikan kode berjalan di client side
        if (typeof window === 'undefined') return;

        // Handler functions untuk dropdown menus
        const handleSubMenuClick = (e: Event) => {
            e.preventDefault();
            const btn = e.currentTarget as HTMLElement;
            const subMenu = btn.nextElementSibling as HTMLElement;
            if (subMenu && subMenu.classList.contains("sub-menu")) {
                if (subMenu.style.display === "none" || subMenu.style.display === "") {
                    subMenu.style.display = "block";
                } else {
                    subMenu.style.display = "none";
                }
            }
        };

        const handleMoreMenuClick = (e: Event) => {
            e.preventDefault();
            const btn = e.currentTarget as HTMLElement;
            const moreMenu = btn.nextElementSibling as HTMLElement;
            if (moreMenu && moreMenu.classList.contains("more-menu")) {
                if (moreMenu.style.display === "none" || moreMenu.style.display === "") {
                    moreMenu.style.display = "block";
                } else {
                    moreMenu.style.display = "none";
                }
            }
        };

        // Handler functions untuk responsive menu
        const handleMenuOpen = () => {
            const menu = document.querySelector(".menu");
            menu?.classList.add("active");
        };

        const handleMenuClose = () => {
            const menu = document.querySelector(".menu");
            menu?.classList.remove("active");
        };

        // Add event listeners
        const subBtns = document.querySelectorAll(".sub-btn");
        const moreBtns = document.querySelectorAll(".more-btn");
        const menuBtn = document.querySelector(".menu-btn");
        const closeBtn = document.querySelector(".close-btn");

        subBtns.forEach((btn) => {
            btn.addEventListener("click", handleSubMenuClick);
        });

        moreBtns.forEach((btn) => {
            btn.addEventListener("click", handleMoreMenuClick);
        });

        menuBtn?.addEventListener("click", handleMenuOpen);
        closeBtn?.addEventListener("click", handleMenuClose);

        // Cleanup function
        return () => {
            subBtns.forEach((btn) => {
                btn.removeEventListener("click", handleSubMenuClick);
            });
            moreBtns.forEach((btn) => {
                btn.removeEventListener("click", handleMoreMenuClick);
            });
            menuBtn?.removeEventListener("click", handleMenuOpen);
            closeBtn?.removeEventListener("click", handleMenuClose);
        };
    }, []);
    
    return (
        <>
        <header>
            <Link href="/">
                <Image 
                    className='logo-nav' 
                    src="/assets/images/logo/IYMO.png" 
                    alt="IYMO Logo" 
                    width={100} 
                    height={50}
                    priority
                />
            </Link>
            <div className='navigation'>
                <ul className='menu'>
                    <div className='close-btn'></div>
                    
                    <li className='menu-item'>
                        <Link href="/">Home</Link>
                    </li>
                    
                    <li className='menu-item'>
                        <Link href="/#about-section">About</Link>
                    </li>
                    
                    <li className='menu-item'>
                        <Link href="https://drive.google.com/file/d/1h9_GF9ySoPID8FtusJeDBwV9Vc9z0ni7/view?usp=sharing" 
                           target='_blank' 
                           rel="noopener noreferrer">
                            Guide Book
                        </Link>
                    </li>
                 
                    <li className='menu-item'>
                        <Link href="/#contact-section">Contact</Link>
                    </li>
                    
                    <li className='menu-item'>
                       <Link href="/after-event">List of Winner</Link>
                    </li>
                    
                    <li className='menu-item'>
                        <Link className='sub-btn' href="#">
                            Certificate Supervisor <i className='fas fa-angle-down'></i>
                        </Link>
                        <ul className='sub-menu'>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/16h0q-dg-HwyRXFcQz59VQ_bf2mD4zBXg?usp=sharing" 
                                   target='_blank' 
                                   rel="noopener noreferrer">
                                    Certificate Supervisor 2025
                                </Link>
                            </li>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1KQUngMwESZoEIyHm3HqONBmx-vgbHiQs?usp=sharing" 
                                   target='_blank' 
                                   rel="noopener noreferrer">
                                    Certificate Supervisor 2024 Batch 2
                                </Link>
                            </li>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1CxPTXJ2h2cpSTAaDCr5xPsfAS82DZvEE?usp=sharing" 
                                   target='_blank' 
                                   rel="noopener noreferrer">
                                    Certificate Supervisor 2024 Batch 1
                                </Link>
                            </li>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1MDHEJDstaiCDjmLRhdTDLWwbC7oZdNDi?usp=sharing" 
                                   target='_blank' 
                                   rel="noopener noreferrer">
                                    Certificate Supervisor 2023
                                </Link>
                            </li>
                        </ul>
                    </li>
                    
                    <li className='menu-item'>
                        <Link className='sub-btn' href="#">
                            Gallery <i className='fas fa-angle-down'></i>
                        </Link>
                        <ul className='sub-menu'>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1g_FTKMi1CdUKKFrvOyhysCSKpPtPHCOY?usp=sharing" 
                                   target='_blank' 
                                   rel="noopener noreferrer">
                                    2025
                                </Link>
                            </li>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1JROGpOT_Ow7kHwwfcr7tOs8eR0RdgDW0?usp=sharing" 
                                   target='_blank' 
                                   rel="noopener noreferrer">
                                    2024 Batch 2
                                </Link>
                            </li>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/185S8hjYznLup_CeedtzBeIR0mPWeVCCI?usp=sharing" 
                                   target='_blank' 
                                   rel="noopener noreferrer">
                                    2024 Batch 1
                                </Link>
                            </li>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1UxUIzFSUiNtJdV4bAiy9et9UDkpQv5ME?usp=sharing" 
                                   target='_blank' 
                                   rel="noopener noreferrer">
                                    2023
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='menu-btn'></div>
        </header>
        </>
    );
};

export default NavbarComp;