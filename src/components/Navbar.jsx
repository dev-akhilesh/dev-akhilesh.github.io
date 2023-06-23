
import React from 'react'

import Style from './Navbar.module.css';

import { Heading, useDisclosure } from '@chakra-ui/react';

import { useState } from 'react';

import { HStack, Box, Text, Image, Button, IconButton, Link as ChakraLink } from '@chakra-ui/react'


import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { NavLink as RouterLink, Router } from 'react-router-dom'

import { NavDrawer } from './NavDrawer';
import { HamburgerIcon } from '@chakra-ui/icons'

import { useRef } from 'react';


const Navbar_options = [{ text: 'Home', id: 'home', class: 'nav-link home' }, { text: 'About', id: 'about', class: 'nav-link about' }, { text: 'Skills', id: 'skills', class: 'nav-link skills' }, { text: 'Github', id: 'github', class: 'nav-link github' }, { text: 'Projects', id: 'projects', class: 'nav-link projects' }, { text: 'Contact', id: 'contact', class: "nav-link contact" }];


const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { current } = useRef([]);


    const Active_Link = (e, index) => {


        current.forEach((el, i) => {

            if (index === i) {

                el.classList.add(Style.active);

            } else {

                el.classList.remove(Style.active);

            }

        })


    }


    const OpenPDF = () => {
        const url = 'https://drive.google.com/uc?export=download&id=1_UtNij_Itb_9eLpXIcFvQ8IV-bkDS_xu';
        window.open(url, '_blank');
    };







    return (

        <Box zIndex={'3'} minW='280px' mb='20px' boxShadow={'2px 2px 5px black'} position={'sticky'} top='0' bg='black' color='white' as='nav' id="nav-menu" p='2'>

            <HStack m='auto' w={{ base: '95%', '587px': '90%', '1120px': '80%' }} justify='space-between'>

                <IconButton size={['sm', 'md']} mr='5px' display={{ base: 'block', '836px': 'none' }} _hover={{ background: 'rgb(14, 60, 96);' }} bg='rgb(7, 40, 66);' onClick={onOpen} variant='none' icon={<HamburgerIcon />}></IconButton>

                {/* <Heading>𝘼𝙆</Heading> */}


                <HStack display={{ base: 'none', '836px': 'flex' }} w={{ 'base': '450px', '966px': '500px' }} justify='space-between'>

                    {Navbar_options.map((el, i) => {


                        return <ScrollLink className={el.class} key={Math.random()} to={el.id} smooth={true} duration={300} >

                            <Text className={i === 0 ? Style.active : ''} ref={(el) => current[i] = el} onClick={(e) => Active_Link(e, i)} _hover={{ cursor: 'pointer', color: '#FF004F', borderBottom: '2px solid', borderColor: '#FF004F' }} px='2' py='1' fontWeight={600}>{el.text}</Text>


                        </ScrollLink>



                    })}

                </HStack>


                <Button onClick={OpenPDF} id="resume-button-1" _hover={{ background: '#d61351' }} className="nav-link resume" size={['sm', 'md']} variant='none' bg='#FF004F' border='1px solid' boxShadow={'1px 1px 5px'} color='#fff'><ChakraLink id="resume-link-1" isExternal href='Resume.pdf' download="Resume.pdf" _hover={{ textDecoration: 'none' }}>Resume</ChakraLink></Button>



            </HStack>




            <NavDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />





        </Box>

    )
}

export default Navbar