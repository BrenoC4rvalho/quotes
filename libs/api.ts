import prisma from "./prisma";

export default {
    
    getAllQuote: async () => {
        const quotes = await prisma.quote.findMany();
        return quotes;
    },

    uniqueQuote: async (id: number) => {
        const quote = await prisma.quote.findFirst({
            where: { id }
        })
        return quote;
    },

    addQuote: async (author: string, txt: string) => {
        const quote = await prisma.quote.create({
            data: { author, txt }
        })
        return quote;
    },

    deleteQuote: async (id: number) => {
        await prisma.quote.delete({
            where: { id }
        })
    },

    editQuote: async (id: number, author?: string, txt?: string) => {

        const data = await prisma.quote.findUnique({
            where: { id }
        })

        if(data) {
            if(author) data.author = author 
            if(txt) data.txt = txt
        
            const quote = await prisma.quote.update({
                where: { id },
                data  
            })

            return quote
        }
    }
}