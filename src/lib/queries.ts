import { Subscriber } from '@prisma/client';
import prisma from './db';

export async function createSubscriber(
  email: string,
  token: string
): Promise<Subscriber | null> {
  return prisma.subscriber.create({
    data: { email, token },
  });
}

export async function getOneSubscriberByToken(
  token: string
): Promise<Subscriber | null> {
  return prisma.subscriber.findFirst({
    where: {
      token,
    },
  });
}

export async function updateSubscriberToVerified(
  xata_id: string
): Promise<Subscriber> {
  return await prisma.subscriber.update({
    where: {
      xata_id,
    },
    data: {
      verified: true,
    },
  });
}

export async function getOneSubscriberByEmail(
  email: string
): Promise<Subscriber | null> {
  return await prisma.subscriber.findFirst({
    where: {
      email,
    },
  });
}
