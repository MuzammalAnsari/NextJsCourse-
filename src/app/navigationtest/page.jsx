"use client"

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function NavigationTestPage() {

    // CLIENT SIDE NAVIGATION
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    console.log(pathname)

    const q = searchParams.get("q")
    console.log(q)

    const handleClick = () => {
        console.log("clicked");
        router.push("/")
        // router.replace("/")
        // router.refresh()
        // router.back()
        // router.forward()

    }
    return (
        <div>
            <Link href='/' prefetch={false}>Click Here</Link>
            <button onClick={handleClick}>write and redirect</button>
        </div>
    )
}
