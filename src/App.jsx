import './App.css'
import FoodBox from './Components/FoodBox'
import data from "./resources/FoodData"
import Searchbox from './Components/Searchbox'
import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       value : ""
    }
  }
  handleSeach = (input) => {
    this.setState({
      value :  input
    })
  }
  


  render() {

    return (
      <div className="App">
        < Searchbox setValue = {this.handleSeach} />



      {


        data.filter((food,ind) => {
          if(this.state.value == ""){
            return food
          }else if(((food.name).toLowerCase()).includes((this.state.value).toLowerCase()) ){
            return food
          }
        })
        .map((ele,ind) => {
          return < FoodBox item ={ele} key={ind} />
        })
      }
  
  
        
      </div>
    )
  }
}
