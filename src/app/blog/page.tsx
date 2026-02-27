// src/app/blog/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
    title: "Blog | Versori Digital",
    description:
        "Tips, estrategias y tendencias de marketing, branding y desarrollo web para que tu marca crezca.",
};

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <main>
                <BlogHero />
                <BlogGrid />
            </main>
            <Footer />
        </>
    );
}
