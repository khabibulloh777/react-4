import React from 'react'
import './Bar.css'
import odma from './odam.png'
import { FiSave, FiList, FiPlus, FiUser, FiCoffee, FiFileText, FiTrendingUp, FiSettings } from 'react-icons/fi'
import { IconName, ImHome } from "react-icons/im";
import { Link } from 'react-router-dom'

function Bar() {

    return (
        <div className="Bar" >
            <button className="home"><Link to="/">  <FiList /></Link> </button>
            <button className="hehe"><Link to="/home"><ImHome /></Link> </button>
            <button className="plus"><Link to="/Plus"> <FiPlus /></Link></button>
            <button className="user"><Link to="/User"><FiUser /></Link></button>
            <button className="cofr"><Link to="/Coffee"> <FiCoffee /></Link></button>
            <button className="text"><Link to="/FileText"><FiFileText /></Link> </button>
            <button className="usish"><Link to="/TrendingUp"> <FiTrendingUp /></Link> </button>
            <div className="logo">
                <img className="odam" src={odma} alt="" />
            </div>
        </div>
    )
}

export default Bar
