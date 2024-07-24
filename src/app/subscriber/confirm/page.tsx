import {
  getOneSubscriberByToken,
  updateSubscriberToVerified,
} from '@/lib/queries';

interface ConfirmSubscriberPageProps {
  searchParams: {
    token: string | undefined;
  };
}

export default async function ConfirmSubscriberPage({
  searchParams,
}: ConfirmSubscriberPageProps) {
  const token = searchParams.token;

  if (!token) {
    throw new Error('No token was passed');
  }

  const subscriber = await getOneSubscriberByToken(token);

  if (!subscriber) {
    throw new Error('Could not find subscriber');
  }

  if (!subscriber.verified) {
    await updateSubscriberToVerified(subscriber.xata_id);
  }

  const { email } = subscriber;

  return (
    <>
      <p className="text-xl mb-4">{email}</p>
      <h1 className="mb-10  font-semibold tracking-tight text-4xl">
        Verified! ✅
      </h1>
    </>
  );
}
