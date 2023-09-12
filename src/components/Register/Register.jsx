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
    Select
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import './Register.css'
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import authActions from '../../store/actions/authActions'
const { signUp } = authActions

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
    const [formValid, setFormValid] = useState(false);
    const dispatch = useDispatch()

    const navigate = useNavigate()

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

        // Validar la contraseña y establecer el mensaje de error
        const passwordError = validatePassword(newPassword);
        setPasswordError(passwordError);
    };

    const validatePassword = (password) => {
        const minLength = 6;
        const maxLength = 30;

        const lowerCaseRegex = /[a-z]/;
        const upperCaseRegex = /[A-Z]/;
        const numericRegex = /[0-9]/;

        if (password.length < minLength) {
            return 'Password must be at least 6 characters long.';
        }
        if (password.length > maxLength) {
            return 'Password cannot be more than 30 characters long.';
        }

        if (!lowerCaseRegex.test(password)) {
            return 'Password must contain at least one lowercase letter.';
        }

        if (!upperCaseRegex.test(password)) {
            return 'Password must contain at least one uppercase letter.';
        }

        if (!numericRegex.test(password)) {
            return 'Password must contain at least one number.';
        }

        return '';
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

    const handleSubmitWithGoogle = async (dataForm) => {
        await dispatch(signUp(dataForm))
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/')
        }

    }

    useEffect(() => {
        getCountries()
    }, []);

    const handleRegistration = async () => {
        const dataForm = {
            name,
            lastName,
            photo,
            email,
            password,
            country: selectedCountry,
        };
        try {
            await dispatch(signUp(dataForm));
            const token = localStorage.getItem('token')
            if (token) {
                navigate('/')
            }
        } catch (error) {
            console.error('Error en el componente:', error.message);
        }


    };


    useEffect(() => {
        if (
            name.trim() !== '' &&
            lastName.trim() !== '' &&
            emailError === '' &&
            passwordError === '' &&
            selectedCountry !== ''
        ) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }, [name, lastName, emailError, passwordError, selectedCountry]);

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
                                        <FormLabel>Name <span style={{ color: "red" }}>*</span></FormLabel>
                                        <Input
                                            type="text"
                                            value={name}
                                            onChange={handleNameChange}
                                        />
                                        {nameError && <Text fontSize='sm' color="red">{nameError}</Text>}
                                    </FormControl>
                                    <FormControl id="lastName">
                                        <FormLabel>LastName <span style={{ color: "red" }}>*</span></FormLabel>
                                        <Input
                                            type="text"
                                            value={lastName}
                                            onChange={handleLastNameChange}
                                        />
                                        {lastNameError && <Text fontSize='sm' color="red">{lastNameError}</Text>}
                                    </FormControl>
                                    <FormControl id="email">
                                        <FormLabel>Email address <span style={{ color: "red" }}>*</span></FormLabel>
                                        <Input
                                            type="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                        {emailError && <Text fontSize='sm' color="red">{emailError}</Text>}
                                    </FormControl>
                                    <FormControl id="password">
                                        <FormLabel>Password <span style={{ color: "red" }}>*</span></FormLabel>
                                        <Input
                                            type="password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        {passwordError && <div><span fontSize='sm' className='error-message'>{passwordError}</span></div>}
                                    </FormControl>
                                    <FormControl id="select">
                                        <FormLabel>Country <span style={{ color: "red" }}>*</span></FormLabel>
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
                                            onChange={(e) => setPhoto(e.target.value === "" ? " " : e.target.value)}
                                        />
                                    </FormControl>
                                    <Stack spacing={10}>
                                        <Button
                                            bg={'blue.400'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'blue.500',
                                            }}
                                            isDisabled={!formValid}
                                            onClick={handleRegistration}>
                                            Create Account
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                        <div className='containerButtons'>
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    const infoUser = jwtDecode(credentialResponse.credential)
                                    handleSubmitWithGoogle({
                                        email: infoUser.email,
                                        name: infoUser.given_name,
                                        lastName: infoUser.family_name,
                                        photo: infoUser.picture,
                                        password: infoUser.given_name + infoUser.family_name + import.meta.env.VITE_PASSWORD_GOOGLE,
                                        country: " "
                                    })
                                }}
                                onError={() => {
                                    console.log('SignUp Failed');
                                }}
                            />
                        </div>
                    </Flex>
                </div>
            </section>
        </>
    );
}

export default Register;
