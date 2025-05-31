import { Ghost } from "lucide-react"
import Link from "next/link"
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
    const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
        return (
            <Link href={href} className="transition-colors duration-200 text-gray-600 hover:text-emerald-400">
                {children}
            </Link>

        )
    }
    return (
        <nav className="container flex items-center justify-between px-8 py-4 mx-auto">
            <div className="flex lg:flex-1">
                <NavLink href="/" >
                    <span className="flex items-center gap-2 shrink-0"><Ghost className="hover:rotate-12 transform transition duration-200 ease-in-out" />
                        <span className="font-extrabold text-lg">
                            SpeakToBlog
                        </span>
                    </span>
                </NavLink>
            </div>
            <div className="flex lg:justify-center gap-2 lg:gap-12 lg:items-center">
                <NavLink href="/pricing">Pricing</NavLink>
                <SignedIn>
                    <NavLink href="/posts">Your Posts</NavLink>
                </SignedIn>
            </div>

            <div className="flex lg:justify-end lg:flex-1 gap-2">
                {/* profile */}
                <SignedIn>
                    <div className="flex gap-2 items-center">

                        <NavLink href="/dashboard">
                            Upload a video
                        </NavLink>
                    </div>

                    <UserButton />
                </SignedIn>

                <SignedOut>
                    <SignInButton>
                        <NavLink href="/sign-in">Sign In</NavLink>
                    </SignInButton>
                </SignedOut>
            </div>
        </nav>
    )
}

export default Header