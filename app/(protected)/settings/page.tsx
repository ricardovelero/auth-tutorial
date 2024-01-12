"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
// import { signOut, useSession } from "next-auth/react";
// import { useSession } from "next-auth/react";

export default function SettingsPage() {
  // const session = useSession();
  const user = useCurrentUser();

  const handleclick = () => {
    logout();
    // signOut();
  };

  return (
    <div className='bg-white p-10 rounded-xl'>
      {/* <p>{JSON.stringify(session)}</p> */}
      {/* <p>{JSON.stringify(user)}</p> */}
      <button onClick={handleclick} type='submit'>
        Sign out
      </button>
    </div>
  );
}
