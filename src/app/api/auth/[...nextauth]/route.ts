export { GET, POST } from '@/libs/next-auth';
export const runtime = 'edge'; // optional

// Define your configuration in a separate variable and pass it to NextAuth()
// This way we can also 'export const config' for use later

// export async function get(url: string, params: Map<string, string>) {
//     // fetch(url);
// }

// import OpenAI from 'openai'
// import { OpenAIStream, StreamingTextResponse } from 'ai'

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// })

// export const runtime = 'edge'

// export async function POST(req: Request) {
//   const { messages } = await req.json()
//   const response = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo',
//     stream: true,
//     messages,
//   })

//   const stream = OpenAIStream(response)

//   return new StreamingTextResponse(stream)
// }
