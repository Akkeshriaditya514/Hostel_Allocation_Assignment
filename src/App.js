import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Header from "./components/Header"
import ChooseGender from "./components/ChooseGender"
import {Route,Switch} from 'react-router-dom'
import ChooseHostel from "./components/ChooseHostel"
import ChooseHostelB from "./components/ChooseHostelB"
import ChooseRoom from "./components/ChooseRoom"



firebase.initializeApp({
  apiKey: "AIzaSyCe_RlbmP8BFf6uBOd21syb7o_D7eD2Wys",
  authDomain: "hostel-allocations.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false    
   }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
     
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
  

  render() {
    return (
      <div className="App">
        
        {this.state.isSignedIn ? (
          <div>
            <Header name={firebase.auth().currentUser.displayName}/>
            
          
            <Switch>
            <Route path="/" exact component={ChooseGender} />
            <Route path="/hostel" exact component={ChooseHostel} />
            <Route path="/hostelB" exact component={ChooseHostelB} />
            <Route path="/room" exact component={ChooseRoom} />
            
            </Switch>

           

          </div>
        ) : (
          
          <div> 
            <Header />
            <h1 className="size">Hostel Allocation</h1>
          <h6 className="size1">Please sign-in:</h6>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
          </div>
        )}
      </div>
    )
  }
}

export default App