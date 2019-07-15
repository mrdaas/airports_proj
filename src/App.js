import React,{Component} from "react"
import './App.css'
import axios from 'axios'
import Autosuggest from 'react-autosuggest';

import AirportGuide from "./component/AirportGuide"

import { makeTitleCase, makeAllCaps, replaceSpaceWithDashes} from './helper/Helper';

import {airports} from './data/airports';

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : airports.filter(lang =>
    lang.airportname.toLowerCase().slice(0, inputLength) === inputValue ||
    lang.city.toLowerCase().slice(0, inputLength) === inputValue ||
    lang.state.toLowerCase().slice(0, inputLength) === inputValue ||
    lang.airportcode.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => (
  `${makeTitleCase(suggestion.city)}, ${makeTitleCase(suggestion.state)} (${makeAllCaps(suggestion.airportcode)} - ${makeTitleCase(suggestion.airportname)})`
);

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {`${makeTitleCase(suggestion.city)}, ${makeTitleCase(suggestion.state)} (${makeAllCaps(suggestion.airportcode)} - ${makeTitleCase(suggestion.airportname)})`}
  </div>
);
    // Yakima, Washington (YKM - Yakima Air Terminal)

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            single_airport: [],
            value: '',
            suggestions: []
        };

    }



    onChange = (event, { newValue }) => {
      this.setState({
        value: newValue
      });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };


    onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) =>{
         //Here you do whatever you want with the values
         // /airports/alaska/fairbanks/fairbanks-international?lid=travel:info-AirportsGuides-Fairbanks&int=_AS_TRAVINFO_-prodID:AirportsGuides-Fairbanks
         console.log(suggestion.airportname); //For example alert the selected value

         // window.location.assign(`https://preview.alaskaair.com/content/airports/${suggestion.state}/${suggestion.city}/${replaceSpaceWithDashes(suggestion.airportname)}?lid=travel:info-AirportsGuides-${makeTitleCase(suggestion.city)}&int=_AS_TRAVINFO_-prodID:AirportsGuides-${makeTitleCase(suggestion.city)}`);
         window.location.assign(`http://localhost:3000/${replaceSpaceWithDashes(suggestion.airportname)}?lid=travel:info-AirportsGuides-${replaceSpaceWithDashes(makeTitleCase(suggestion.city))}&int=_AS_TRAVINFO_-prodID:AirportsGuides-${replaceSpaceWithDashes(makeTitleCase(suggestion.city))}`);
     };




    componentDidMount(){

      let mypath = window.location.href;
      let airportnamefromurl = mypath.substring(mypath.lastIndexOf('/') + 1);

      if(airportnamefromurl.includes('?')){
        airportnamefromurl = airportnamefromurl.substring(0, airportnamefromurl.indexOf("?"));
      }

      console.log(airportnamefromurl)

      airportnamefromurl = airportnamefromurl.replace(/-/g, ' ');

// https://sitecore2-cd-test-site-westcentralus.azurewebsites.net/api/v1/Airports/GetAllAirports?airportname=
      axios.get('https://www.alaskaair.com/api/v1/Airports/GetAllAirports?airportname='+airportnamefromurl)
      .then(res => {
        const mydata = res.data.airports;

        // const tempdata = mydata.map((item) => {
        //     if(item.airportcode !== "$name"){
        //       return {
        //         ...item
        //       }
        //     }
        // })

        this.setState({
            single_airport: mydata
        },() => console.log(this.state.single_airport))

      })
      .catch(function (error) {
        console.log(error);
      });



    }




  navigateToPage = (url) => {
    console.log(url);
  }




    render(){

        // const airport = airports[1]
        // console.log(airport);

        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
          placeholder: 'Search for airports...',
          value,
          onChange: this.onChange
        };


        return (
            <div>
            <div className="container">

              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                onSuggestionSelected={this.onSuggestionSelected}
                inputProps={inputProps}
              />


              {
                this.state.single_airport.map((airport) => {
                  if(airport.airportcode !== '$name'){
                    return(
                      <AirportGuide myairport={airport} />
                    )
                  }

                })
              }



              </div>


            </div>
        )
    }
}

export default App
