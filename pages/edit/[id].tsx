import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Btn from "../../components/Btn";
import Footer from "../../components/Footer"
import Form from "../../components/Form";
import Header from "../../components/Header"
import api from "../../libs/api";

import { Quote } from '../../types/Quote';



const Edit = () => {

    const router = useRouter();

    // const [quote, setQuote] = useState<Quote>()

    // useEffect(() => {
    //     loadQuote()
    // },[])

    // const loadQuote = async () => {
    //     const { id } = router.query;
    //     const res = await fetch(`/api/${id}`);
    //     const json = await res.json();
    //     setQuote(json);
    // }

    const editQuote = async (author: string, txt: string) => {
        const { id } = router.query

        if(author || txt) {
        
            const req = await fetch(`/api/${id}`, {
                method: 'PUT',
        
                headers: {
                    'Content-Type': 'application/json'
                },
        
                body: JSON.stringify({
                    author,
                    txt
                })
        
            }) 
            router.push('/')
        }
    }

    return (

        <div className="min-h-screen flex flex-col justify-between">
            <Header />


            <main className="flex flex-col items-center">

                <div className="w-5/6 mb-5">
                    <Btn link="/" text="return" />
                </div>

                <div className="flex justify-start w-5/6 text-3xl text-violet-900">
                    <h2>Edit quote:</h2>
                </div>

                <Form onClick={editQuote} />

            </main>
            <Footer />

        </div>

    )
}




export default Edit