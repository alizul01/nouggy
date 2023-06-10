"use client"
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion"; // Untuk animasi
import { Atma } from "next/font/google";
import Link from "next/link";

export const atma = Atma({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "500"
})
export default function maintenancePage() {
  return (
    <section className={atma.className}>
      <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
        <img src="/img/nouggy-1.jpg" alt="nouggy-img-1" className="absolute h-full w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 bg-white/75">
          <h1 className="text-6xl font-bold text-[#4d4c16]">Coming Soon</h1>
          <motion.img
            src="/logo.png"
            alt="Logo"
            className="h-44"
            animate={{ y: ["-10px", "10px", "-10px"] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <div className="flex space-x-4">
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
