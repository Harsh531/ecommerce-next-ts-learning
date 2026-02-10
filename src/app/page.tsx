import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-black dark:text-white font-sans">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <Image src="/next.svg" alt="Logo" width={40} height={12} className="dark:invert" />
            <h1 className="text-2xl font-semibold">E-Commerce Demo</h1>
          </div>
          <nav>
            <Link href="/products" className="px-4 py-2 bg-blue-600 text-white rounded-md">Products</Link>
          </nav>
        </header>

        <section className="text-center py-20">
          <h2 className="text-3xl font-bold mb-4">Welcome to the Store</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-6">
            Browse sample products and add them to your cart. This is a minimal homepage.
          </p>
          <Link href="/products" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md">Browse Products</Link>
        </section>

        <footer className="mt-16 text-center text-sm text-zinc-500">Built with Next.js & Tailwind</footer>
      </div>
    </main>
  );
}
