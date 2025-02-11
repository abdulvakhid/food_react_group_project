import React from 'react'
import "./maincardheader.scss"
import {NavLink} from "react-router-dom";
// import down from "../../../assets/images/Mask.svg"

export const Maincardheader = () => {
  return (
    <div className='maincard-header'>
        <ul className='maincard-header-list'>
            <li className='maincard-header-item '>
                <NavLink className='maincard-header-link active' to="">Hot Dishes</NavLink>
            </li>
            <li className='maincard-header-item '>
                <NavLink className='maincard-header-link' to="">Cold Dishes</NavLink>
            </li>
            <li className='maincard-header-item '>
                <NavLink className='maincard-header-link' to="">Soup</NavLink>
            </li>
            <li className='maincard-header-item '>
                <NavLink className='maincard-header-link' to="">Grill</NavLink>
            </li>
            <li className='maincard-header-item '>
                <NavLink className='maincard-header-link' to="">Appetizer</NavLink>
            </li>
            <li className='maincard-header-item '>
                <NavLink className='maincard-header-link' to="">Dessert</NavLink>
            </li>
        </ul>

        <div className='mainheader-content'>
            <h3 className='mainheader-title'>Choose Dishes</h3>
            <select class="mainheader-select"  aria-label="select">
                <option selected>Dine In</option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
            </select>
        </div>
    </div>
  )
}
