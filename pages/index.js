import Head from 'next/head'
import { SearchBox } from '../components/SearchBox'

export default function Home() {
  return (
    <div>
      <head>
        <title> Weather App - Next.js</title>
      </head>

      <div className="home">
        <div className="container">
          <SearchBox />
          {/* */}
        </div>
      </div>
    </div>
  )
}
