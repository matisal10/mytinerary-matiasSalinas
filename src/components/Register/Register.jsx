import { useEffect, useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select, VisuallyHidden
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [photo, setPhoto] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);

        if (newName.trim() === "") {
            setNameError('Name is required');
        } else {
            setNameError('');
        }
    };

    const handleLastNameChange = (e) => {
        const newLastName = e.target.value;
        setLastName(newLastName);

        if (newLastName.trim() === "") {
            setLastNameError('LastName is required');
        } else {
            setLastNameError('');
        }
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (!isValidEmail(newEmail)) {
            setEmailError('invalid email');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        if (newPassword.length < 6) {
            setPasswordError('The password must be at least 6 characters');
        } else {
            setPasswordError('');
        }
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const getCountries = async () => {
        const url = 'https://referential.p.rapidapi.com/v1/country?fields=currency%2Ccurrency_num_code%2Ccurrency_code%2Ccontinent_code%2Ccurrency%2Ciso_a3%2Cdial_code&limit=250';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f883b614b6mshd715abf7ea784e5p1cc3cdjsn99648339c19c',
                'X-RapidAPI-Host': 'referential.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setCountries(data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCountries()
    }, []);

    const handleRegistration = () => {
        const formData = {
            name,
            lastName,
            photo,
            email,
            password,
            selectedCountry,
        };
        // Ejemplo de envío a través de fetch:
        // fetch('url_del_backend', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         // Realizar acciones después de un registro exitoso
        //         console.log('Registro exitoso', data);
        //     })
        //     .catch((error) => {
        //         // Manejar errores de registro
        //         console.error('Error al registrar', error);
        //     });
        console.log(formData)
    };



    return (
        <>
            <section className='containerLogin'>
                <div><h1>My Tinerary</h1></div>
                <div>
                    <Flex
                        className='ContainerForm'
                        minH={''}
                        align={'center'}
                        justify={'center'}
                        bg={useColorModeValue('gray.50', 'gray.800')} style={{ borderRadius: "10px" }}>
                        <Stack spacing={10} minW={['90%', '90%', 'md']} mx={['auto', 'auto', 0]} maxW={'lg'} py={5} px={5} >
                            <Stack align={'center'} >
                                <Heading fontSize={'4xl'}>Create an account</Heading>
                                <Text fontSize={'lg'} color={'gray.600'}>
                                    Already have an account?  <Text as={Link} to={'/login'} color={'blue.400'}>Log in</Text>
                                </Text>
                            </Stack>
                            <Box
                                rounded={'lg'}
                                bg={useColorModeValue('white', 'gray.700')}
                                boxShadow={'lg'}
                                p={8}>
                                <Stack spacing={4}>
                                    <FormControl id="name">
                                        <FormLabel>Name</FormLabel>
                                        <Input
                                            type="text"
                                            value={name}
                                            onChange={handleNameChange}
                                        />
                                        {nameError && <Text fontSize='sm' color="red">{nameError}</Text>}
                                    </FormControl>
                                    <FormControl id="lastName">
                                        <FormLabel>LastName</FormLabel>
                                        <Input
                                            type="text"
                                            value={lastName}
                                            onChange={handleLastNameChange}
                                        />
                                        {lastNameError && <Text fontSize='sm' color="red">{lastNameError}</Text>}
                                    </FormControl>
                                    <FormControl id="email">
                                        <FormLabel>Email address</FormLabel>
                                        <Input
                                            type="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                        {emailError && <Text fontSize='sm' color="red">{emailError}</Text>}
                                    </FormControl>
                                    <FormControl id="password">
                                        <FormLabel>Password</FormLabel>
                                        <Input
                                            type="password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        {passwordError && <Text fontSize='sm' color="red">{passwordError}</Text>}
                                    </FormControl>
                                    <FormControl id="select">
                                        <FormLabel>Country</FormLabel>
                                        <Select placeholder='Select Country' value={selectedCountry}
                                            onChange={(e) => setSelectedCountry(e.target.value)}>
                                            {countries.length > 0 && countries.filter((countryData) => countryData.value) // Filtra elementos vacíos
                                                .map((countryData) => (
                                                    <option key={countryData.value} value={countryData.value}>
                                                        {countryData.value}
                                                    </option>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
                                    <FormControl id="photo">
                                        <FormLabel>Photo (url)</FormLabel>
                                        <Input
                                            type="text"
                                            value={photo}
                                            onChange={(e) => setPhoto(e.target.value)}
                                        />
                                    </FormControl>
                                    <Stack spacing={10}>
                                        <Button
                                            bg={'blue.400'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'blue.500',
                                            }}
                                            onClick={handleRegistration}>
                                            Create Account
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                        <div className='containerButtons'>
                            <Button
                                variant={'outline'}
                                borderColor={'black'}
                                leftIcon={<FcGoogle />}
                            >
                                <VisuallyHidden>
                                    
                                </VisuallyHidden>
                                <Text>Continue with Google</Text>
                            </Button>
                        </div>
                    </Flex>
                </div>
            </section>
        </>
    );
}

export default Register;
