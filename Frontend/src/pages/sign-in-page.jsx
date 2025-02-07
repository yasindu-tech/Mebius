import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {

  return (
    <main className="flex items-center justify-center min-h-screen px-6">
      <SignIn></SignIn>
    </main>
  );
}