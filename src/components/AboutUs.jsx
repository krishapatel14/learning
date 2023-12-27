import React from 'react'
import { Link } from 'react-router-dom'

export const AboutUs = () => {
  return (
    <div>AboutUs
        <ul>
            <li>
                <Link to="/aboutus/company">AboutCompany</Link>
            </li>
            <li>
                <Link to="/aboutus/country">AboutCountry</Link>
            </li>
        </ul>
    </div>
  )
}
