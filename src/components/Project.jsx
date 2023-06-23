import styled from "styled-components"
// import "../CSS/Project.css"
// import myntra from "../images/Screenshot (251).png"
import { SimpleGrid, Box, Image, Text, Heading } from "@chakra-ui/react"
import { GoMarkGithub } from "react-icons/go"

import { SiNetlify } from "react-icons/si"
import { Link } from "react-router-dom"
function Project() {


    return (
        <DIV id="projects" style={{ marginTop: "10%" }}>
            <Heading mt='90px' color='#FF004F' fontSize={35}><Text as='span' color='black'>Projects</Text> </Heading>
            <SimpleGrid columns={[1, 2, 2]} spacing={10} mt={10} className="Project_grid">
                <Box className="project-card">
                    <Image src="https://user-images.githubusercontent.com/115489722/213989789-29c596a2-af1b-4521-9f6f-6d93121ab736.png" alt="" />
                    <h2 className="project-title">Refurbay(Quicker Bazaar clone)</h2>
                    <Text className="project-description">This website provides a comprehensive e-commerce platform that is easy to use, well-designed, and secure. It provides all the necessary features for an e-commerce website and it is designed to provide a great user experience for the customers</Text>
                    <p className="project-tech-stack">Tech stack: HTML,CSS,JavaScript</p>
                    <Box style={{ display: "flex", justifyContent: "space-around", "margin-top": "20px" }}>
                        <Link to='https://github.com/dev-akhilesh/short-rod-3165'> <button className="project-github-link"><GoMarkGithub />{" "} Github</button></Link>
                        <Link to='https://imaginative-mochi-4ca96c.netlify.app/'>    <button className="project-deployed-link"><SiNetlify />{' '}Netlify</button></Link>
                    </Box>

                </Box>
                <Box className="project-card" >
                    <Image src="https://user-images.githubusercontent.com/115461550/229465563-d6f7f749-3070-4214-887d-f38f9bf949ac.png" alt="" />
                    <h2 className="project-title">TripMate(Make my trip Clone)</h2>
                    <p className="project-description">Diesel.com is the official website of the company, and it offers an online shopping experience for customers all over the world. The website features a wide variety of products for men, women, and children, as well as a range of accessories, including bags, wallets, and sunglasses. </p>
                    <p className="project-tech-stack">Tech Stack: HTML, CSS, JavaScript, Json-server</p>
                    <Box style={{ display: "flex", justifyContent: "space-around", "margin-top": "20px" }}>
                        <Link to='https://github.com/dev-akhilesh/harsh-cream-7809'> <button className="project-github-link"><GoMarkGithub />{" "} Github</button></Link>
                        <Link to='https://mellifluous-biscuit-ea4b79.netlify.app/'>    <button className="project-deployed-link"><SiNetlify />{' '}Netlify</button></Link>
                    </Box>

                </Box>
                <Box className="project-card">
                    <Image src="https://i.imgur.com/cGaQ0qV.png" alt="" />
                    
                    <h2 className="project-title">Shopkart</h2>
                    <p className="project-description">Shopkart is an Indian e-commerce website. Shopkart strives hard to make your online shopping a more pleasant and cost-effective experience by providing the top quality products at the best price rates in India. Our collection of products consist of electronic appliances, clothes, home and kitchen products, backpacks, books and stationery, to name a few.

                    </p>
                    <p className="project-tech-stack">Tech stack: HTML,CSS,JavaScript,React,Firebase,Chakra-Ui</p>
                    <Box style={{ display: "flex", justifyContent: "space-around", "margin-top": "20px" }}>
                        <Link to='https://github.com/dev-akhilesh/actual-size-6883'> <button className="project-github-link"><GoMarkGithub />{" "} Github</button></Link>
                        <Link to='https://myapp-henna-two.vercel.app'>    <button className="project-deployed-link"><SiNetlify />{' '}Netlify</button></Link>
                    </Box>

                </Box>
                <Box className="project-card" >
                    <Image src="https://i.imgur.com/cGaQ0qV.png" alt="" />
                    <h2 className="project-title">EasyLoans</h2>
                    <p className="project-description">EasyLoans is a comprehensive online platform that connects businesses with lenders, making it easier to secure funding for various purposes, such as expansion, working capital, equipment purchase, or inventory management.  </p>
                    <p className="project-tech-stack">Tech stack: HTML,CSS,TypeScript,React,ChakraUi,Redux</p>
                    <Box style={{ display: "flex", justifyContent: "space-around", "margin-top": "20px" }}>
                        <Link to='https://github.com/dev-akhilesh/spiritual-school-8644'> <button className="project-github-link"><GoMarkGithub />{" "} Github</button></Link>
                        <Link to='https://spiritual-school-8644-gmot7jezf-dev-akhilesh.vercel.app/#'>    <button className="project-deployed-link"><SiNetlify />{' '}Netlify</button></Link>
                    </Box>

                </Box>

            </SimpleGrid>
        </DIV>
    )

} export default Project

const DIV = styled.div`

.project-card{
    /* border: 1px solid #333; */
    padding: 10px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* background-color: #fc89ad; */
}
.project-github-link,.project-deployed-link{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #FF004f;
    width: 120px;
    border-radius: 50px;
    padding: 4px;
    font-family: monospace;
    font-size: 16px;
    font-weight: 300;
    text-transform:uppercase;
    transition: transform 0.5s ease-in-out;
}
.project-github-link:hover,.project-deployed-link:hover{
    transform: scale(1.1);
    color:#fff;
    background: #FF004F;
}

`