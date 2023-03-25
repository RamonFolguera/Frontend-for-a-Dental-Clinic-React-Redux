

import { NavBar } from './components/NavBar/NavBar'
import { Body } from './layout/Body/Body'
import './App.css'
import { FooterTemplate } from './components/FooterTemplate/FooterTemplate'
import { NavbarSecond } from './components/NavbarSecond/NavbarSecond'


export const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <NavbarSecond/>
      <Body/>
      <FooterTemplate/>
    </div>
  )
}




