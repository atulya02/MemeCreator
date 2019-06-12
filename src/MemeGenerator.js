import React, { Component } from 'react'
import './mystyle.css'
class MemeGenerator extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             topText: "",
             bottomText: "",
             randomImg: "http://i.imgflip.com/1bij.jpg",
             allMemeImage: ""
        }
    }
    handleChange(event){
        this.setState({
            [event.target.name] :event.target.value
        })
    }

    getRandomInt(max) {
        max = Math.floor(max);
        return Math.floor(Math.random() * max) ; //The maximum is exclusive and the minimum is inclusive
      }
    chooseRandomImg(){
        let length=this.state.allMemeImage.length;
        let imageIndex=this.getRandomInt(length-1);
        this.setState({
            randomImg:this.state.allMemeImage[imageIndex].url
        })
    }



    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response=>response.json())
        .then(response=>
            {
                const {memes}=response.data
                this.setState({
                    allMemeImage:memes
                })
            })
    }
    render() {        
        
        return (
            <div>
            <div className='meme-form'>
                <label className='labeltag'>
                <input
                className='inputClass'
                name='topText'
                placeholder='Enter Top Text'
                value={this.state.topText}
                onChange={this.handleChange.bind(this)}/>
                
                </label>
                <br/>

                <label className='labeltag'>               
                <input
                name='bottomText'
                className='inputClass'
                placeholder='Enter Bottom Text'
                value={this.state.bottomText}
                onChange={this.handleChange.bind(this)}/>
                
                </label>
                  <br/>
                <button className='submit' onClick={this.chooseRandomImg.bind(this)}>Next Template</button>
            </div>
            <div className='meme'>
            <h2 className='top'>{this.state.topText}</h2> 
                <img src={this.state.randomImg} alt=""></img>                              
                <h2 className='bottom'>{this.state.bottomText}</h2>

            </div>
            </div>
        )
    }
}

export default MemeGenerator
