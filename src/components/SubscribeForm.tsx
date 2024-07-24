'use client';
import toast from 'react-hot-toast';
import { subscribe } from '@/actions/subscribe';
import SubscribeFormButton from './SubscribeFormButton';
import { useRouter } from 'next/navigation';

export default function SubscribeForm() {
  const router = useRouter();
  return (
    <form
      id="subscribe-form"
      className="w-96"
      action={async (formData) => {
        const { error } = await subscribe(formData);
        if (error) {
          console.error(error);
          return toast.error(error);
        }

        toast.success('Check your email to confirm.');
        router.push('/subscriber/pending');
      }}
    >
      <div className="relative h-11 md:h-16 ">
        <input
          type="email"
          name="email"
          placeholder="E-mail address"
          className="w-full rounded-md border border-white/[.67] bg-transparent p-3 pl-4  text-white md:h-[70px]  md:rounded-[16px] md:placeholder:text-white/[.47]"
        />
        <SubscribeFormButton />
      </div>
    </form>
  );
}
