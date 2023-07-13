import Link from 'next/link'
import Layout from '../components/Layout'
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
        <div className="text-cyan-100 h-1">test</div>
    </p>
  </Layout>
)

export default IndexPage
