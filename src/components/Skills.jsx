import React from 'react'

import { Box, Heading, SimpleGrid, GridItem, Image, Text } from '@chakra-ui/react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import style from './skills.module.css'
import html from "../assets/HTML.png"
import css from "../assets/CSS.png"
import javascript from "../assets/Javascript.png"
import typescript from "../assets/Typescript.png"
import react from "../assets/React.png"
import redux from "../assets/Redux.png"
import router from "../assets/react-router.png"
import chakra from "../assets/chakra.png"
import mongo from "../assets/Mongo db.png"
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
const Tech_Stack = [

    { img: html, text: 'HTML 5', w: '70px', w2: '40px' },

    { img: css, text: 'CSS 3', w: '80px', w2: '46px' },

    { img: javascript, text: 'Javascript', w: '80px', w2: '46px' },

    { img: typescript, text: 'Typescript', w: '111px', w2: '55px' },

    { img: react, text: 'React', w: '80px', w2: '40px' },

    { img: router, text: 'React Router', w: '121px', w2: '60px' },

    { img: redux, text: 'Redux', w: '80px', w2: '40px' },

    { img: chakra, text: 'Chakra UI', w: '80px', w2: '40px' },



    { img: mongo, text: 'Mongo DB', w: '80px', w2: '40px' },

]



const Skills = () => {
    return (
        <Box id='skills'>


            <Heading mt='90px' color='#FF004F' fontSize={35}><Text as='span' color='black'>Technical</Text> Skills</Heading>

            <SimpleGrid columns={{ base: '2', '529px': '3', '848px': '4' }} spacing={'20px'} mt='50px' >

                {Tech_Stack.map((el, i) => {

                    return <GridItem data-aos="fade-up" key={Math.random()} className="skills-card" border="3px solid black" borderRadius={'20px'} >

                        <Box data-aos="fade-up" p='15px' display={'flex'} justifyContent='center' >

                            <Image data-aos="zoom-in-up" w={{ base: el.w2, '685px': el.w }} className="skills-card-img" src={el.img}></Image>

                        </Box>

                        <Text fontSize={'20'} mb='10px' className="skills-card-name">{el.text}</Text>


                    </GridItem>
                })
                }
            </SimpleGrid>
        </Box>
    )
}

export default Skills