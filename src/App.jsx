import styles from './App.module.css'
import { About } from './components/about/About'
import { Experiences } from './components/experiences/Experiences'
import { Hero } from './components/hero/Hero'
import { Navbar } from './components/navbar/Navbar'
import { Projects } from './components/projects/Projects'
import { Contact } from './components/contact/Contact'

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experiences/>
      <Projects/> 
      <Contact/>
    </div>
  )
}

export default App