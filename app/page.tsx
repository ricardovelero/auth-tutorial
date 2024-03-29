import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/login-button";
import { LockClosedIcon } from "@radix-ui/react-icons";
import { fontPoppins } from "@/lib/fonts";

export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      <div className='space-y-6 text-center'>
        <h1
          className={cn(
            "flex items-center justify-center text-6xl font-semibold text-white drop-shadow-md",
            fontPoppins.className
          )}
        >
          <LockClosedIcon className='h-11 w-11' />
          Auth
        </h1>
        <p className='text-white text-lg'>A simple authentication service</p>
        <div>
          <LoginButton mode='redirect' asChild>
            <Button variant='secondary' size='lg'>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
