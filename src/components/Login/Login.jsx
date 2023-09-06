import { useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    VisuallyHidden
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc';
import "./Login.css"
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (!isValidEmail(newEmail)) {
            setEmailError('Correo electrónico no válido');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        if (newPassword.length < 6) {
            setPasswordError('La contraseña debe tener al menos 6 caracteres');
        } else {
            setPasswordError('');
        }
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email); // Cambia esto con tu lógica de validación de correo electrónico.
    };

    const handleLogin = () => {

    }

    return (
        <>
            <section className='containerLogin'>
                <div><h1>My Tinerary</h1></div>
                <div style={{height:"100vh"}}>
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
                                        {emailError && <Text color="red">{emailError}</Text>}
                                    </FormControl>
                                    <FormControl id="password">
                                        <FormLabel>Password</FormLabel>
                                        <Input
                                            type="password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        {passwordError && <Text color="red">{passwordError}</Text>}
                                    </FormControl>
                                    <Stack spacing={10}>
                                        <Stack
                                            direction={{ base: 'column', sm: 'row' }}
                                            align={'start'}
                                            justify={'space-between'}>
                                            <Checkbox>Remember me</Checkbox>
                                            <Text color={'blue.400'}>Forgot password?</Text>
                                        </Stack>
                                        <Button
                                            bg={'blue.400'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'blue.500',
                                            }}>
                                            Sign in
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

export default Login;
