import './App.css';
import React, { Component } from 'react';
import Header from './Components/header/Header'
import Navigation from './Components/navigation/Navigation';
import Cards from './Components/cards/Cards';
import 'tachyons'

class App extends Component {

  constructor(){
    super();
    this.state = {
      color : false,
      next : '',
      route : 'easy'
    }
  }

  
  onRouteChange = (route) => {
    if(this.state.route !== route)
    {
      this.setState({route: route},() => this.refreshPage())
    }
    
    
  }

  
  getRandomRgb = () => {
   var num = Math.round(0xffffff * Math.random());
   var r = num >> 16;
   var g = num >> 8 & 255;
   var b = num & 255;
   return 'rgb(' +   r + ', ' + g + ', ' + b + ')';
  }

  onClicklistener=(data)=>{
    this.setState({next: data})
    if(data===this.ans)
    {
      this.setState({color:true})
    }
  }



  refreshPage = ()=>{
    console.log(this.state.route)
    this.col1 = this.getRandomRgb();
    this.col2 = this.getRandomRgb();
    this.col3 = this.getRandomRgb();
    this.col4 = this.getRandomRgb();
    this.col5 = this.getRandomRgb();
    this.col6 = this.getRandomRgb();
    
    if(this.state.route === 'easy')
    {
        this.rand = Math.floor(Math.random()*3);
        this.ans = this.rand ? this.rand === 1 ? this.col2 : this.col3 : this.col1 ;
    }
    else
    {
      this.rand = Math.floor(Math.random()*6);
      switch(this.rand)
      {
        case 0:
          this.ans = this.col1;
          break
        case 1:
          this.ans = this.col2;
          break
        case 2:
          this.ans = this.col3;
          break
        case 3:
          this.ans = this.col4;
          break
        case 4:
          this.ans = this.col5;
          break
        case 5:
          this.ans = this.col6;
          break
      }
    }
    this.setState({color: false})

  }

  kachra = 1;

  


  // compareColor=()=>{
  //   if(ans===this.state.)
  // }
//  { console.log(this.state.color)}

  render(){
    if(this.kachra){
      this.refreshPage() 
      this.kachra = 0;
    }

    if(this.state.next===this.col1){
      this.col1 = 'rgb(' + 43 + ', ' + 40 + ', ' + 40 + ')';
    }
    else if(this.state.next===this.col2){
      this.col2 = 'rgb(' + 43 + ', ' + 40 + ', ' + 40 + ')';
    }
    else if(this.state.next===this.col3){
      this.col3 = 'rgb(' + 43 + ', ' + 40 + ', ' + 40 + ')';
    }
    else if(this.state.next===this.col4){
      this.col4 = 'rgb(' + 43 + ', ' + 40 + ', ' + 40 + ')';
    }
    else if(this.state.next===this.col5){
      this.col5 = 'rgb(' + 43 + ', ' + 40 + ', ' + 40 + ')';
    }
    else if(this.state.next===this.col6){
      this.col6 = 'rgb(' + 43 + ', ' + 40 + ', ' + 40 + ')';
    }
    return(
      <div className='grid'>
        
          <Header getRandomRgb = {this.ans}/>

          <Navigation refreshPage={this.refreshPage} onRouteChange = {this.onRouteChange}/>
       
          { this.state.route === 'easy' ?
             
              this.state.color? 
              (
                <div className='grid3'>
                  <Cards c_card= {this.ans} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                  <Cards c_card= {this.ans} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                  <Cards c_card= {this.ans} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                </div>
              )
              :
              (
                  (
                    <div className='grid3'>
                        <Cards c_card= {this.col1} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                        <Cards c_card= {this.col2} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                        <Cards c_card= {this.col3} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                    </div>
                  )
              )
            
            :
            this.state.color? 
              (
                <div className='grid3'>
                  <Cards c_card= {this.ans} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                  <Cards c_card= {this.ans} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                  <Cards c_card= {this.ans} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                  <Cards c_card= {this.ans} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                  <Cards c_card= {this.ans} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                  <Cards c_card= {this.ans} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                </div>
              )
              :
              (
                <div className='grid3'>
                    <Cards c_card= {this.col1} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                    <Cards c_card= {this.col2} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                    <Cards c_card= {this.col3} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                    <Cards c_card= {this.col4} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                    <Cards c_card= {this.col5} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                    <Cards c_card= {this.col6} rand = {this.rand} onClicklistener={this.onClicklistener}/>
                </div>  
              )
          }
          

      </div>
    )
  }
}

export default App;

