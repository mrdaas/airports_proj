import React,{Component} from "react"
import './App.css'
import axios from 'axios'
import Autosuggest from 'react-autosuggest';

import AirportGuide from "./component/AirportGuide"


import {products} from './data/airports';

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : products.filter(lang =>
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
  `${suggestion.city}, ${suggestion.state} (${suggestion.airportcode} - ${suggestion.airportname})`
);

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {`${suggestion.city}, ${suggestion.state} (${suggestion.airportcode} - ${suggestion.airportname})`}
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





    componentDidMount(){

      let mypath = window.location.href;
      let airportnamefromurl = mypath.substring(mypath.lastIndexOf('/') + 1);
      airportnamefromurl = airportnamefromurl.replace(/-/g, ' ');

      axios.get('https://sitecore2-cd-test-site-westcentralus.azurewebsites.net/api/v1/Airports/GetAllAirports?airportname='+airportnamefromurl)
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

        // const product = products[1]
        // console.log(product);

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
