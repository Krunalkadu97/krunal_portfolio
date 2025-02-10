// /* eslint-disable @typescript-eslint/no-unused-vars */
// // import { EmailTemplate } from '../../../components/EmailTemplate';
// import type { NextApiRequest, NextApiResponse } from 'next';

// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL || 'krunalkadu97@gmail.com';

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   const body = req.body;
//   const {email, subject, message} = body;
//   try {
//     const { data, error } = await resend.emails.send({
//       from: fromEmail,
//       to: [email],
//       subject: subject,
//       react:(
//         <>
//         <h1>{subject}</h1>
//         <p>Thank you for contacting us!</p>
//         <p>New message submiteed</p>
//         <p>{message}</p>
//         </>
//       ),
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
