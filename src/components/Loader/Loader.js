import { Spinner } from '@chakra-ui/react'

const Loader = () =>{
    return (
        <Spinner
        pos='absolute'
        top='41%'
        left='50%'
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'>
        </Spinner>
    )
}
export default Loader