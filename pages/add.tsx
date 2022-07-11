import { useRouter } from "next/router";
import Btn from "../components/Btn";
import Footer from "../components/Footer"
import Form from "../components/Form";
import Header from "../components/Header"

const Add = () => {

    const router = useRouter();

    const addQuote = async (author: string, txt: string) => {
        
        if(author && txt) {
        
            const req = await fetch('/api', {
                method: 'POST',
        
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
                <div className="flex flex-col justify-start w-5/6 text-3xl text-violet-900">
                    <Btn link="/" text="return" />
                    <h2 className="mt-5">Add new quote:</h2>
                </div>

                <Form onClick={addQuote}/>

            </main>
            <Footer />

        </div>

    )
}

export default Add