import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ACE</h1>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/packages">Packages</Link>
        </nav>
      </div>
    </header>
  )
}
