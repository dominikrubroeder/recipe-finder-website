import {Logo} from "@/components/atoms/logo";
import {Button} from "@/components/atoms/button";
import Link from "next/link";

const navigationLinks = [{
    label: "Home",
    href: "/",
}, {
    label: "About",
    href: "/about",
}, {
    label: "Recipes",
    href: "/recipes",
}]

export function Header() {
    return <header className="border-b">
        <div className="flex items-center mx-auto max-w-container-lg p-4 gap-4 justify-between">
            <Logo/>

            <ul className="flex gap-4">
                {navigationLinks.map(link => <li key={link.label}>
                    <Link href={link.href} className="border-b-3 pb-1 border-primary">
                        {link.label}
                    </Link>
                </li>)}
            </ul>

            <Button>Browse recipes</Button>
        </div>
    </header>
}