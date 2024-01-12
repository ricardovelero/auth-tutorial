"use client";

import { logout } from "@/actions/logout";

type LogoutButtonProps = {
  children?: React.ReactNode;
};

export function LogOutButton({ children }: LogoutButtonProps) {
  const handleClick = () => {
    logout();
  };

  return (
    <span onClick={handleClick} className='cursor-pointer'>
      {children}
    </span>
  );
}
