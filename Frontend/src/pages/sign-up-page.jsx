"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  

  return (
    <main className="flex items-center justify-center min-h-screen px-6">
      <SignUp></SignUp>
    </main>
  );
}