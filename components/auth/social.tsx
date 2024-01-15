"use client";

import { GitHubLogoIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export function Social() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button
        size={"lg"}
        className='w-full'
        variant={"outline"}
        onClick={() => onClick("google")}
      >
        <LightningBoltIcon />
      </Button>
      <Button
        size={"lg"}
        className='w-full'
        variant={"outline"}
        onClick={() => onClick("github")}
      >
        <GitHubLogoIcon />
      </Button>
    </div>
  );
}
