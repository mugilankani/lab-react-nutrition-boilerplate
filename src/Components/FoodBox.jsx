import React, { Component } from 'react'


export default class FoodBox extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        quantity: 1,
        input: 1
         
      }
    }
    handleQuantity = () => {
        this.setState({
            quantity : this.state.input,
            input : 1
        })
    }
    
  render() {
    const{img,name,cal} = this.props.item
    return (
        
        <div className="box">
            <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                <img src={img}/>
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                <p>
                    <strong>{name}</strong> <br />
                    <small>{cal}</small>
                </p>
                </div>
            </div>
            <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                        <input value={this.state.input} onChange={(e) => {
                            this.setState({
                                input : e.target.value
                            })
                        }} className="input" type="number"  />
                    </div>
                    <div className="control">
                        <button onClick={this.handleQuantity} className="button is-info">
                        +
                        </button>
                    </div>
                </div>
            </div>
            <div className='resetCalore'>
                <div>
                    {this.state.quantity +" "+ name} = {this.state.quantity * cal} cal
                </div>
                <div>
                    <button className='ResetBtn'>
                        Reset
                    </button>
                </div>
            </div>
            </article>
      </div>
    )
  }
}
