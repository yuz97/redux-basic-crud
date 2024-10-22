import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import JumbotronComponent from './components/JumbotronComponent'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import CreateUserContainer from './containers/CreateUserContainer'
import DetailUserContainer from './containers/DetailUserContainer'
import EditUserContainer from './containers/EditUserContainer'



export default class App extends Component {
  state = {
    title: "Belajar Redux basic ",
    // users: [
    //   { id: 1, name: "alif", address: "maros", age: 20 },
    //   { id: 2, name: "uni bakwan", address: "jawa timur", age: 32 },
    //   { id: 3, name: "kak gem", address: "medan", age: 33 },
    // ]
  }


  render() {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <HomeContainer />
      },
      {
        path: "/create",
        element: <CreateUserContainer />
      },
      {
        path: "/edit/:id",
        element: <EditUserContainer />
      },
      {
        path: "/show/:id",
        element: <DetailUserContainer />
      },
    ])

    return (
      <div>
        <NavbarComponent />
        {/* <JumbotronComponent title={this.state.title} /> */}
        <RouterProvider router={router} />
      </div>
    )
  }
}
