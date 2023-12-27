import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/aboutus">aboutus <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contactus">contactus</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/storage">storage</Link>
      </li>
      {/* <li class="nav-item">
        <Link class="nav-link" to="/weather">weather</Link>
      </li> */}
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo">api demo</Link>
      </li>
      {/* <li class="nav-item">
        <Link class="nav-link" to="/apidemo1">api demo1</Link>
      </li> */}
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo2">api demo2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/fetchuserdata">fetchuserdata</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/adduserdata">adduserdata</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/books">books</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/userbank">user bank</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/test">test</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/transaction">transaction </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/bankHeader">bankHeader</Link>
      </li>
    </ul>
    
  </div>
</nav>
  )
}
