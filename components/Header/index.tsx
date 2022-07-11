import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';


const Header = () => {
    return (
        <header className="flex justify-center text-5xl p-4 bg-violet-700 text-white">
            <FaQuoteLeft className='text-2xl'/>
            <h1>Quotes</h1>
            <FaQuoteRight className='text-2xl'/>
        </header>
    )
}

export default Header