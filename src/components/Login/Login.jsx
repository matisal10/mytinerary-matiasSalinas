import React from 'react';
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
} from '@chakra-ui/react'
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import "./Login.css"
import { Link } from 'react-router-dom';

const Login = () => {
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
                                        <Input type="email" />
                                    </FormControl>
                                    <FormControl id="password">
                                        <FormLabel>Password</FormLabel>
                                        <Input type="password" />
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
                                colorScheme='white'
                                color={'black'}
                                variant={'outline'}
                                leftIcon={<FcGoogle />}
                                >
                                Continue with Google
                            </Button>
                            <Button
                                colorScheme='facebook'
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                leftIcon={<FaFacebook />}>
                                Continue with facebook
                            </Button>
                        </div>
                    </Flex>
                </div>
            </section>
        </>
    );
}

export default Login;
