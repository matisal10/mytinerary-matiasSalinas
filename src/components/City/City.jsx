import { useRef, useState, useEffect } from 'react';
import './City.css'
import { Button, Icon } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Text, Heading, Box, Avatar, Flex, Stack } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { BiLike, BiChat } from 'react-icons/bi'
import { LiaMoneyBillAlt, LiaHashtagSolid } from 'react-icons/lia'
import { useParams } from 'react-router-dom';
const City = () => {

    const [city, setCity] = useState();
    const itinerariesRef = useRef(null);
    const { id } = useParams();

    const scrollToItineraries = () => {
        if (itinerariesRef.current) {
            itinerariesRef.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const getCity = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/cities/${id}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setCity(data.response);
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    }


    useEffect(() => {
        getCity();
    }, []);

    return (
        <>
            <section className="heroCity" style={{ backgroundImage: city ? `url(${city.cover})` : 'none' }}>
                <div className="hero-background">
                    {/* Content inside the hero section */}
                    <div className="contentCity">
                        <h1 style={{ color: '#ffbc40', fontWeight: '700' }}>{city && city.name}</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante sapien, non vulputate lorem faucibus vitae. Nunc ac ultrices metus. Nam neque ex, dictum sed velit vitae, vehicula sagittis risus. Aenean volutpat ante ex, et scelerisque dui blandit sed. Morbi pretium lorem nec scelerisque consectetur. Donec odio odio, maximus nec magna sed, congue hendrerit sapien.
                        </p>
                        <Button colorScheme="facebook" className='btn-Itineraries' onClick={scrollToItineraries}>View Itineraries ↓</Button>
                    </div>
                </div>
            </section>
            <section>
                <div ref={itinerariesRef} id='itineraries' className='containerItineraries'>
                    {/* <div className='noItineraries'>
                        <img src="https://via.placeholder.com/255x191" />
                        <div>There are no itineraries</div>
                    </div> */}
                    <div className='Itineraries'>
                        <Card maxW="3xl">
                            <CardHeader>
                                <Flex spacing='4'>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                        <Box>
                                            <Heading size='sm'>Segun Adebayo</Heading>
                                        </Box>
                                    </Flex>
                                </Flex>
                            </CardHeader>
                            <CardBody>
                                <div className='containerDetails'>
                                    <div>
                                        <Heading size={'sm'} >Price:</Heading>
                                        <Icon
                                            color={'green'}
                                            as={LiaMoneyBillAlt}
                                        />
                                        <Icon
                                            color={'green'}
                                            as={LiaMoneyBillAlt}
                                        />
                                        <Icon
                                            color={'green'}
                                            as={LiaMoneyBillAlt}
                                        />
                                        <Icon
                                            color={'green'}
                                            as={LiaMoneyBillAlt}
                                        />
                                        <Icon
                                            color={'green'}
                                            as={LiaMoneyBillAlt}
                                        />
                                    </div>
                                    <div>
                                        <Heading size={'sm'} >Duration:</Heading>
                                        <p>
                                            7 Hours
                                        </p>
                                    </div>
                                    <div>
                                        <Heading  size={'sm'}>
                                            <Icon
                                                as={LiaHashtagSolid}
                                            />
                                            hashtags
                                        </Heading>
                                        <Text color={'violet'}>
                                            #caipirinia #praia #fuchibol
                                        </Text>
                                    </div>
                                    <div>
                                        <Button variant='ghost' p={0} leftIcon={<BiLike />}>
                                        </Button>
                                        <span>
                                            0
                                        </span>
                                    </div>
                                </div>
                            </CardBody>
                            <Image
                                objectFit='cover'
                                src={city.image}
                                alt='Chakra UI'
                            />
                            <Accordion allowToggle>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                <Heading size={'sm'} color={'blue.500'}>View more </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <Card
                                            direction={{ base: 'column', sm: 'row' }}
                                            overflow='hidden'
                                            variant='outline'
                                            size={'sm'}
                                            maxHeight={'150px'}
                                        >
                                            <Image
                                                objectFit='cover'
                                                maxW={{ base: '100%', sm: '300px' }}
                                                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                                                alt='Caffe Latte'
                                            />
                                            <Stack>
                                                <CardBody>
                                                    <Text>Actividad</Text>
                                                    <Heading size='md'>The perfect latte</Heading>
                                                </CardBody>

                                                <CardFooter>
                                                </CardFooter>
                                            </Stack>
                                        </Card>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            <CardFooter
                                justify='space-between'
                                flexWrap='wrap'
                                sx={{
                                    '& > button': {
                                        minW: '136px',
                                    },
                                }}>
                                <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                                    Comment
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}

export default City;
