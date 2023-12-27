import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"


const NotFoundPage = () => {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push("/")
    }, 3000)
  }, [router])

  return (
    <div className="not-found">
      <h1>OOOOOOOPs...</h1>
      <h2>This page cannot be found.</h2>
      <p>Go back to <Link href="/">Home Page</Link></p>
    </div>
  )
}

export default NotFoundPage