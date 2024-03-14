"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function Nav() {
  const isUserLoggedIn = true;

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assests/images/logo.svg"
          alt="Prompter"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logi_text">Prompter</p>
      </Link>
    </nav>
  );
}

export default Nav;
