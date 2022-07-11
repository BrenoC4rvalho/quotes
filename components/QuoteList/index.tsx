import { Quote } from '../../types/Quote';

import { BsChatQuote } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';

import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {
    quotes: Quote[];
}

const QuoteList = ( props: Props) => {
    
    const router = useRouter();

    const handlerDelete = async (id: number) => {
        
        await fetch(`/api/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        router.push('/')
    }

    return (
        <main className='flex flex-wrap justify-evenly mb-5'>
            
            {props.quotes.map((quote, index) =>(

                <div key={index} className='max-w-xl border-2 border-violet-700 rounded-md mt-5'>
                    <div className='flex text-3xl p-3 bg-violet-700 text-white'>
                        <BsChatQuote />
                        <p className='ml-2'>{quote.author}</p>
                    </div>
                    <div className='text-2xl text-center p-3'>
                        <p>{quote.txt}</p>
                        <div className='flex justify-end mt-4 text-violet-900'>
                            <Link href={`/edit/${quote.id}`}>
                                <button className='mr-2'> <FiEdit /> </button>
                            </Link>
                            <button onClick={() => handlerDelete(quote.id)}> <RiDeleteBinLine /> </button> 
                        </div>
                    </div>
                </div>
            
            ))}

        </main>
    )
}



export default QuoteList