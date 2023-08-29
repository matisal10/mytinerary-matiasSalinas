import { useRef, useState, useEffect } from 'react';
import './City.css'
import { useDispatch, useSelector } from 'react-redux';
import cityActions from '../../store/actions/cityActions.js'
const { saveCity } = cityActions

import {
    Button, Icon,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image, Text, Heading, Box, Avatar, Flex, Stack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

import { BiLike, BiChat } from 'react-icons/bi'
import { LiaMoneyBillAlt, LiaHashtagSolid } from 'react-icons/lia'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'

import { useParams } from 'react-router-dom';

const City = () => {

    // const [city, setCity] = useState();
    const itinerariesRef = useRef(null);
    const { id } = useParams();
    const dispatch = useDispatch()
    const city = useSelector(store => store.cityReducer.city)
    const loading = useSelector(store => store.cityReducer.loading)

    const scrollToItineraries = () => {
        if (itinerariesRef.current) {
            itinerariesRef.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const getCity = async () => {
        dispatch(saveCity({id}))
        console.log("city",city)
        // try {
        //     const response = await fetch(`http://localhost:4000/api/cities/${id}`);

        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }

        //     const data = await response.json();
        //     setCity(data.response);
        //     console.log(data.response.itineraries)
        // } catch (error) {
        //     console.log(error)
        //     throw new Error

        // }
    }


    useEffect(() => {
        getCity()
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
                {
                    city != undefined &&
                    <div ref={itinerariesRef} id='itineraries' className='containerItineraries'>
                        {city.itineraries && city.itineraries.length == 0 ?
                            <div className='noItineraries'>
                                <img src="https://via.placeholder.com/255x191" />
                                <div>There are no itineraries</div>
                            </div>
                            :
                            (city.itineraries.map((itinerary, i) => (
                                <div key={i} className='Itineraries' >
                                    <Card maxW="3xl">
                                        <CardHeader>
                                            <Heading size={'lg'}>{itinerary.name}</Heading>
                                            <Flex spacing='4'>
                                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                                    <Box>
                                                        <Heading size='sm'>{itinerary.guideName}</Heading>
                                                    </Box>
                                                </Flex>
                                            </Flex>
                                        </CardHeader>
                                        <CardBody>
                                            <div className='containerDetails'>
                                                <div>
                                                    <Heading size={'sm'} >Price:</Heading>
                                                    {
                                                        itinerary.price ? (
                                                            Array.from({ length: itinerary.price }).map((_, index) => (
                                                                <Icon key={index} color={'green'} as={LiaMoneyBillAlt} />
                                                            ))) :
                                                            <p>Invalid price value</p>
                                                    }
                                                </div>
                                                <div>
                                                    <Heading size={'sm'} >Duration:</Heading>
                                                    <p>
                                                        {itinerary.duration} Hours
                                                    </p>
                                                </div>
                                                <div>
                                                    <Heading size={'sm'}>
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
                                            src={city ? city.image : 'none'}
                                            alt='Chakra UI'
                                        />
                                        <Accordion allowToggle>
                                            <AccordionItem>
                                                <h2>
                                                    <AccordionButton borderRadius={'none'}>
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
                                            {/* <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                                                Comment
                                            </Button> */}
                                            <Accordion allowToggle flex='1'>
                                                <AccordionItem>
                                                    {({ isExpanded }) => (
                                                        <>
                                                            <h2>
                                                                <AccordionButton _expanded={{ bg: 'gray', color: 'white' }}>
                                                                    <Box as="span" flex='1' textAlign='left'>
                                                                        Comments
                                                                    </Box>
                                                                    {isExpanded ? (
                                                                        <MinusIcon fontSize='12px' />
                                                                    ) : (
                                                                        <AddIcon fontSize='12px' />
                                                                    )}
                                                                </AccordionButton>
                                                            </h2>
                                                            <AccordionPanel pb={4}>

                                                            </AccordionPanel>
                                                        </>
                                                    )}
                                                </AccordionItem>
                                            </Accordion>
                                        </CardFooter>
                                    </Card>
                                </div>
                            ))

                            )
                        }
                    </div>
                }
            </section >
        </>
    );
}

export default City;
