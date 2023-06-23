import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components"
// import Tilt from "react-parallax-tilt";
// import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
import { Box, HStack, VStack, Flex, Image, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <DIV>
      <Box fluid className="home-about-section" id="about" w={"80%"} m={"auto"} >
        <Text fontSize="4xl" fontWeight="700" >
          ABOUT <span className="yellow"> ME </span>
        </Text>
        <Box mt={"5%"}>
          <Flex gap={"10%"} id="flex">
            <Box md={8} className="home-about-description" w={"100%"} mt={"4%"}>

              <Text fontSize="xl" id="desc" className="home-about-body" textAlign="left">
                As a highly skilled frontend web developer, I have a solid foundation in  {" "}
                <b className="yellow">HTML</b>, <b className="yellow">CSS</b>, and{" "}
                <b className="yellow">JavaScript</b>, along with expertise in the MERN stack  (<b className="yellow">MongoDB</b>, <b className="yellow">Express.js</b>, <b className="yellow">React.js</b>, <b className="yellow">Node.js</b>). I am dedicated to staying up-to-date with the latest technologies and trends in the industry, and I am always eager to expand my knowledge and skillset.
              </Text>
            </Box>
            <Box md={4} className="myAvtar" >

              <Image
                src="https://avatars.githubusercontent.com/u/115489722?v=4"
                className="home-img"
                style={{ borderRadius: "10%" }}
                alt="avatar"
                margin={"auto"}
                borderRadius="50%"
                w={"100%"}
              />

            </Box>
          </Flex>

        </Box>
      </Box>
    </DIV>
  );
};

const DIV = styled.div`
@media screen and (min-width:650px) and (max-width:836px){
  #about{
    margin-top:20%
  }
  #flex{
    display:flex;
    flex-direction:column
  }
  .myAvtar{
    width:50%;
    margin:auto;
    margin-top:5%
  }

  .home-img{
    width:100%;   
  }
  

}

@media screen and (min-width:500px) and  (max-width:649px){
  #about{
    margin-top:20%
  }
  #flex{
    display:flex;
    flex-direction:column
  }
  .myAvtar{
    width:50%;
    margin:auto;
    margin-top:5%
  }

  .home-img{
    width:100%
  }
#desc{
  font-size:1.1rem;
}

}
@media screen and (min-width:394px) and  (max-width:499px){
  #about{
    margin-top:30%
  }
  #flex{
    display:flex;
    flex-direction:column
  }
  .myAvtar{
    width:50%;
    margin:auto;
    margin-top:5%
  }

  .home-img{
    width:100%
  }
#desc{
  font-size:3.5vw;
}
}
@media screen and (max-width:393px){
  #about{
    margin-top:45%
  }
  #flex{
    display:flex;
    flex-direction:column
  }
  .myAvtar{
    width:50%;
    margin:auto;
    margin-top:5%
  }

  .home-img{
    width:100%
  }
#desc{
  font-size:3.5vw;
}
}
@media screen and  (max-width:375px){
  #about{
    margin-top:45%
  }
  #flex{
    display:flex;
    flex-direction:column
  }
  .myAvtar{
    width:50%;
    margin:auto;
    margin-top:5%
  }

  .home-img{
    width:100%
  }
#desc{
  font-size:3.5vw;
}
}
`


export default About;