"use client";

import { useEffect } from "react";
import { auth } from "@/lib/firebase";

export default function TestFirebase() {
  useEffect(() => {
    console.log("Firebase Auth instance:", auth);
  }, []);

  return <div className="p-4">Firebase Auth initialized (check console)</div>;
}
