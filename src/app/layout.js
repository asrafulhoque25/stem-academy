"use client"
// import { Inter } from "next/font/google";
import { motion, useScroll } from "framer-motion";
import { Poppins } from "next/font/google";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});


export default function RootLayout({ children }) {
     const { scrollYProgress } = useScroll();


    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className={poppins.className}>
                <motion.div className="fixed top-0 left-0 right-0 z-50 h-2 origin-left bg-yellow-400" style={{ scaleX: scrollYProgress }} />
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    );
}
