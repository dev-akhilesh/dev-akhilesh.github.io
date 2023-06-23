import {
    Box,
    Text,
    Image,
    VStack,
    Heading
} from '@chakra-ui/react'

import GitHubCalendar from 'react-github-calendar';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 90, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 129, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


export const GithubStats = () => {


    return <Box pb='50px' mt={"10%"} id='github' >


        <Heading color='#FF004F;' fontSize={35}> <Text as='span' color='black'>Github</Text> Calender</Heading>


        <VStack mt='70px' data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">

            <GitHubCalendar username="dev-akhilesh"></GitHubCalendar>

        </VStack>


        <Heading mt='50px' color='#FF004F;' fontSize={35}> <Text as='span' color='black'>Github</Text> Stats</Heading>

        <VStack mt='70px' data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">

            <Image data-aos="zoom-in-up" id="github-stats-card" borderRadius='20px' src='https://camo.githubusercontent.com/5470ab686b04b68b343f888352ec5492c2d162b0dd1f3c3c5aad510abd6abf42/68747470733a2f2f6769746875622d726561646d652d73746174732d65696768742d74686574612e76657263656c2e6170702f6170693f757365726e616d653d6465762d616b68696c6573682673686f775f69636f6e733d74727565267468656d653d616c676f6c696126696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565'></Image>

        </VStack>


        <Heading mt='50px' color='#FF004F;' fontSize={35}> <Text as='span' color='black'>Github</Text> Streaks</Heading>

        <VStack mt='70px' data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">

            <Image data-aos="zoom-in-up" id="github-streak-stats" borderRadius='20px' src='https://camo.githubusercontent.com/e442fead2e0cd4cc6c5c4c9d9ffe4df5c81e3b1bda11a1eaca0efc176f2e8f17/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d3f757365723d6465762d616b68696c657368267468656d653d6769746875622d6461726b2d626c756526646174655f666f726d61743d6a2532304d25354225323059253544'></Image>

        </VStack>

        <Heading mt='50px' color='#FF004F;' fontSize={35}> <Text as='span' color='black'>Github</Text> Languages</Heading>

        <VStack mt='70px' data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">

            <Image data-aos="zoom-in-up" id="github-top-langs" borderRadius='20px' src='https://camo.githubusercontent.com/a10b94cba45af32445ad5e82c4f17ea4e9f55a566e0b4b0fb67ae71295d5b881/68747470733a2f2f6769746875622d726561646d652d73746174732d65696768742d74686574612e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d6465762d616b68696c657368266c61796f75743d636f6d70616374266c616e67735f636f756e743d38267468656d653d616c676f6c6961'></Image>

        </VStack>


    </Box>

}
export default GithubStats