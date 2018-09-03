import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
const weather_api_key = "86eae949ea711177ed555d11bcf11db5";
const openweatherapiurl = "api.openweathermap.org/data/2.5/weather?q=";
class App extends Component {
  constructor()
  {
    super();
    this.state ={
      cityName :" ",
      getWeatherClicked : false,
      weatherid:"",
      weatherdata:"",
      tempmain :"",
      visibility:"",
      wind:"",
      sys:"",
      clouds:"",
      weatherjson:{}
    }
    this.handleChange = this.handleChange.bind(this);
  }
handleChange = (event,value)=>{
  this.setState({cityName:value});
}

/* getaxiosConfig (){
 return{
 }
} */
getweather = () =>{
  alert(this.state.cityName);
  //let config = this.getaxiosConfig();
  this.setState({getWeatherClicked:true});
  let base_url = openweatherapiurl +this.state.cityName+'&type=accurate&APPID='+weather_api_key;
   axios.get(`api.openweathermap.org/data/2.5/weather?q=london&mode=json&APPID=86eae949ea711177ed555d11bcf11db5`)
  .then(resjson => {
    alert(JSON.stringify(resjson));
    this.setState(
      {
        weatherjson :resjson
      }
    );
  }).catch(function(error){
    console.log(error);
  });
}

  render() {
    const allstyles ={
      textWidth :{
        fontsize:'24px'
      }
    }
    return (
      <div className="App">
      <br/><br/><br/>    
      <MuiThemeProvider>
        <TextField
          id="city"
          label = "Enter City Name"
          className={allstyles.textWidth}
          value={this.state.cityName}
          onChange={this.handleChange}
          margin="normal"
          floatingLabelText="Enter City Name"
          floatingLabelFixed={true}
        />
        <br/><br/>
       <RaisedButton
        label="Get Weather"
        primary={true}        
        onClick={() => {
            this.getweather();
          }}
       /> 
       <br/><br/> {JSON.stringify(this.state.weatherjson)} 
       </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
