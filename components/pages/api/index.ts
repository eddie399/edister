import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const jobs = await prisma.job.findMany();
    return res.status(200).json(jobs);


    
  } else if (req.method === 'POST') {
    const { title, location, description, salary } = req.body;
    const job = await prisma.job.create({
      data: { title, location, description, salary: Number(salary) },
    });
    return res.status(201).json(job);
  }
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}