import Link from "next/link";
import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger, DrawerClose, DrawerDescription, DrawerFooter, DrawerOverlay, DrawerPortal, DrawerTitle } from "../ui/drawer";
import CartDrawer from "../cart/cart-drawer";

export default function NavbarComponent() {
    return (
        <nav className="bg-neutral-primary  w-full z-20 top-0 start-0 border-b border-default">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">


                <a href="http://localhost:3000/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Flowbite</span>
                </a>

                <div className="flex justify-end flex-1 ">
                    <Button variant={"link"} >
                        <Link href="/">Home</Link>
                    </Button>
                    <Button variant={"link"} >
                        <Link href="/products">Products</Link>
                    </Button>

                    <CartDrawer />

                </div>

            </div>
        </nav>
    )
}
