import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import DbRev from "../components/DbRev";

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/db/:streak" element={<DbRev />} />
          </Routes>
        </div>
      </Router>

    </div>
  )
}
