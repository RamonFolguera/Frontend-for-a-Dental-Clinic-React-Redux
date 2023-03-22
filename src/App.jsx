

import { NavBar } from './components/NavBar/NavBar'
import { Body } from './layout/Body/Body'
import './App.css'
import { FooterTemplate } from './components/FooterTemplate/FooterTemplate'
export const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <Body/>
      <FooterTemplate/>
    </div>
  )
}




