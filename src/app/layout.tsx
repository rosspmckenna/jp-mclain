import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"JP McLain | Music Lessons & Recording",description:"Music lessons, vocal coaching, songwriting and recording services in Kansas City."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
