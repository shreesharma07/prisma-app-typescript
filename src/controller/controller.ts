// ! // Importing Modules //
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

// @ // Creating Prisma Connection //
const prisma = new PrismaClient();

export async function getUser(req: Request, res: Response) {
  const query: object = req.query ?? {};
  const users = await prisma.user.findMany(query);
  res.status(200).json(users);
}

export async function getUsers(req: Request, res: Response) {
  const id: unknown = req.params.id;
  const users = await prisma.user.findUnique({ where: { id: Number(id) } });
  res.status(200).json(users);
}

export async function createUser(req: Request, res: Response) {
  const reqBody: object =
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      city: req.body.phone,
    } ?? {};

  // const users = await prisma.user.create({ data: reqBody })
  res.status(200).json([]);
}
