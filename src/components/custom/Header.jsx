import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex items-center justify-between px-5 py-3 shadow-md">
      <div className="logoContainer flex items-center justify-start gap-2">
        <img src="/logo.svg" alt="logo" width={45} height={45} />
        <p className="text-3xl font-bold">Quick CV</p>
      </div>
      {isSignedIn ? (
        <div className="flex items-center justify-center gap-3">
          <Link to={"/dashboard"}>
            <Button>Dashboard</Button>
          </Link>

          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
