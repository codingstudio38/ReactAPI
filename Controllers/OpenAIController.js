const OpenAI = require('openai');
async function CallAI(req, resp) {
    try {
        let { } = req.body;
        let { } = req.query;
        console.log(process.env.OPENAI_API_KEY);
        const openai = new OpenAI({
            baseURL: 'https://api.deepseek.com',
            apiKey: 'sk-835d528fddba4677abca9e570c848349'
        });
        // new OpenAI({
        //     apiKey: process.env.OPENAI_API_KEY,
        // });
        const completion = await openai.chat.completions.create({
            // model: "gpt-4o-mini",
            // store: true,
            // messages: [
            //     { role: 'user', content: 'write a haiku about ai' },
            // ],
            messages: [{ role: "system", content: "You are a helpful assistant." }],
            model: "deepseek-chat",
        });
        console.log(completion);
        resp.status(200).json({
            status: 200,
            message: 'success',
            result: completion
        });
    } catch (error) {
        return resp
            .status(500)
            .json({
                status: 500,
                message: error.message,
            });
    }
}



module.exports = { CallAI };