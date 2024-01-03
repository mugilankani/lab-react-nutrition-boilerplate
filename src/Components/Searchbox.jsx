import React, { Component } from 'react'



export default class Searchbox extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
            input : ""
           
        }
      }
      handleSubmit = (e) => {
        e.preventDefault()
        this.props.setValue(this.state.input)
        this.setState({
            input:""
        })
      }
    handleChange = ((e) => {
        this.setState({
            input : e.target.value
        })
      
    })
      
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="search">Search</label>
        <input type="text" id='search' value={this.state.input} onChange={this.handleChange}/>
        
      </form>
    )
  }
}
