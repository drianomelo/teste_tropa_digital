"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.replace("/login");
    }
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex min-h-screen">
      <Sidebar user={user} />
      <main className="flex-1 bg-[#f8f8f8]">
        <Header user={user} />
        {children}
      </main>
    </div>
  );
}
