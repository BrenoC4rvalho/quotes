import { NextApiHandler } from "next";
import { RequestHandler } from "next/dist/server/next";

import api from "../../libs/api";

import Cors from "micro-cors";

const cors = Cors();

const handlerGet: NextApiHandler = async (req, res) => {
    const { id } = req.query;
    const quote = await api.uniqueQuote(parseInt(id as string))
    res.json(quote)
}

const handlerDelete: NextApiHandler = async (req, res) => {
    const { id } = req.query;
    await api.deleteQuote(parseInt(id as string))
    res.json({delete: true});
}

const handlerPut: NextApiHandler = async (req, res) => {
    const { id } = req.query;
    const { author, txt } = req.body;

    const quote = await api.editQuote(parseInt(id as string), author, txt)

    res.json(quote)

}

const handler: NextApiHandler = async (req, res) => {
    switch(req.method) {
        case 'GET':
            await handlerGet(req, res);
        break
        case 'DELETE':
            await handlerDelete(req, res);
        break
        case 'PUT':
            await handlerPut(req, res);
        break
    }
}

export default cors(handler as RequestHandler)