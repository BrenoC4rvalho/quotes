import { useState } from "react";

type Props = {
     onClick: (author: string, txt: string) => void
     author?: string
     txt?: string  
}

const Form = ( props: Props ) => {

    const a = props.author != undefined ? props.author : ''
    const t = props.txt != undefined ? props.txt : '' 

    const [author, setAuthor] = useState(a);
    const [txt, setTxt] = useState(t);

    return (

        <div className="w-5/6 flex flex-col items-end">
            <div className="bg-violet-700 flex mt-5 w-full rounded">
                <label htmlFor="author" className="bg-violet-700 rounded-l p-3 text-white text-2xl">
                    Author
                </label>
                <input type="text" id="author"
                    className="border-2 border-violet-700 rounded-r  p-2 text-2xl w-full" 
                    value={author} 
                    onChange={e => setAuthor(e.target.value)}
                />
            </div>
            <p>{props.author}</p>
            <p>{props.txt}</p>

            <div className="bg-violet-700 flex mt-5 w-full rounded">
                <label htmlFor="txt" className="bg-violet-700 rounded-l p-3 text-white text-2xl">
                    Quote
                </label>
                <input type="textarea" id="txt" 
                    className="border-2 border-violet-700 rounded-r  p-2 text-2xl w-full"
                    value={txt}
                    onChange={e => setTxt(e.target.value)}
                />
            </div>
            <button 
                onClick={() => props.onClick(author, txt)}
                className="bg-violet-600 text-white text-2xl p-4 mt-5 rounded-xl hover:bg-violet-400 max-w-min"
            >
                Submit
            </button>
      
        </div>
    )
}

export default Form