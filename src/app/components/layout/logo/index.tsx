import Link from "next/link"

const Logo = () => {
  return (
    <>
        <Link href="/" className="text-2xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
            CD<span className="text-primary">.</span>
        </Link>
    </>
  )
}

export default Logo