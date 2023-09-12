import { useState, useEffect } from 'react';
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
} from '@chakra-ui/react'
import { GoogleLogin } from '@react-oauth/google';
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../store/actions/authActions'
const { login } = authActions

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const dispatch = useDispatch()
    const { error } = useSelector(store => store.authReducer)
    const [emailPasswordError, setEmailPasswordError] = useState('')
    const [formValid, setFormValid] = useState(false);
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

    const handleLogin = async () => {
        const formData = {
            email,
            password
        }
        await dispatch(login(formData));

        if (error!="") {
            setEmailPasswordError('The email/password is incorrect');
        } else {
            const token = localStorage.getItem('token');
            if (token) {
                navigate('/');
            }
        }

    }

    const handleLoginWithGoogle = async (dataForm) => {
        await dispatch(login(dataForm))
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/')
        }
    }

    useEffect(() => {
        if (
            emailError !== '' &&
            passwordError === ''
        ) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }, [emailError, passwordError]);

    return (
        <>
            <section className='containerLogin'>
                <div><h1>My Tinerary</h1></div>
                <div style={{ height: "100vh" }}>
                    <Flex
                        className='ContainerForm'
                        minH={''}
                        align={'center'}
                        justify={'center'}
                        bg={useColorModeValue('gray.50', 'gray.800')} style={{ borderRadius: "10px" }}>
                        <Stack spacing={10} mx={'auto'} maxW={'lg'} py={5} px={5} >
                            <Stack align={'center'}>
                                <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                                <Text fontSize={'lg'} color={'gray.600'}>
                                    New user?  <Text as={Link} to={'/register'} color={'blue.400'}>Create an account</Text>
                                </Text>
                            </Stack>
                            <Box
                                rounded={'lg'}
                                bg={useColorModeValue('white', 'gray.700')}
                                boxShadow={'lg'}
                                p={8}>
                                <Stack spacing={4}>
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
                                    <Stack spacing={10}>
                                        <Stack
                                            direction={{ base: 'column', sm: 'row' }}
                                            align={'start'}
                                            justify={'space-between'}>
                                            {/* <Checkbox>Remember me</Checkbox>
                                            <Text color={'blue.400'}>Forgot password?</Text> */}
                                        </Stack>
                                        <Button
                                            bg={'blue.400'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'blue.500',
                                            }}
                                            isDisabled={formValid}
                                            onClick={handleLogin}>
                                            Sign in
                                        </Button>
                                        {emailPasswordError && <Text fontSize='sm' color="red">{emailPasswordError}</Text>}
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                        <div className='containerButtons'>
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    const infoUser = jwtDecode(credentialResponse.credential)
                                    handleLoginWithGoogle({
                                        email: infoUser.email,
                                        password: infoUser.given_name + infoUser.family_name + import.meta.env.VITE_PASSWORD_GOOGLE,
                                    })
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </div>
                    </Flex>
                </div>
            </section>
        </>
    );
}

export default Login;
