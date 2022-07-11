import { NextApiHandler } from "next";
import { RequestHandler } from "next/dist/server/next";

import api from "../../libs/api";

import Cors from 'micro-cors';

const cors = Cors()

const handlerGet: NextApiHandler = async (req, res) => {
    const quotes = await api.getAllQuote();  
    res.json(quotes);
}

const handlerPost: NextApiHandler = async (req, res) => {
    const { author, txt } = req.body;   
    const quote = await api.addQuote(author, txt);
    res.json(quote);
}

const handler: NextApiHandler = async (req, res) => {
    switch(req.method) {
        case 'GET':
            await handlerGet(req, res);
        break
        case 'POST':
            await handlerPost(req, res);
        break
    }
}

export default cors(handler as RequestHandler) 