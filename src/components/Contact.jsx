import {
    Container,
    Flex,
    Box,
    Heading,

    SimpleGrid,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,

} from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from "react-icons/fa"
import styled from 'styled-components';
export default function Contact() {
    return (
        <Container maxW="full" mt={0} centerContent overflow="hidden">
            <Heading>Contact</Heading>
            <DIV>
                <SimpleGrid columns={[1, 2, 3, 4]}>
                    <Box className='con' id="contact-github"><BsGithub /></Box>
                    <Box className='con' id="contact-linkedin"><FaLinkedin /></Box>
                    <Box className='con' id="contact-email"><MdEmail />akhileshtakawale703@gmail.com</Box>
                    <Box className='con' id="contact-phone"><MdPhone />+91-8424898948</Box>


                </SimpleGrid>
            </DIV>
        </Container>
    );
}
const DIV = styled.div`
  .con{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`