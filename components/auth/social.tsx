"use client";

import { GitHubLogoIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export function Social() {
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button
        size={"lg"}
        className='w-full'
        variant={"outline"}
        onClick={() => {}}
      >
        <LightningBoltIcon />
      </Button>
      <Button
        size={"lg"}
        className='w-full'
        variant={"outline"}
        onClick={() => {}}
      >
        <GitHubLogoIcon />
      </Button>
    </div>
  );
}
