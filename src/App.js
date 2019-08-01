import React,{Component} from "react"
import './App.css'
import axios from 'axios'
import Autosuggest from 'react-autosuggest';
import AirportGuide from "./component/AirportGuide"



import { makeTitleCase, makeAllCaps, replaceSpaceWithDashes, getState, getCity, getAirportName} from './helper/Helper';

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


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            single_airport: [],
            value: '',
            suggestions: [],
            mylink:'/content/airports',
            loading:true
        };

    }



    onChange = (event, { newValue }) => {

      let city = getCity(newValue)
      let state = getState(newValue)
      // let code = getCode(newValue)
      let name = getAirportName(newValue)

      let temp_link = `/content/airports/${replaceSpaceWithDashes(state).toLowerCase()}/${replaceSpaceWithDashes(city).toLowerCase()}/${replaceSpaceWithDashes(name).toLowerCase()}?lid=travel:info-AirportsGuides-${replaceSpaceWithDashes(makeTitleCase(city))}&int=_AS_TRAVINFO_-prodID:AirportsGuides-${replaceSpaceWithDashes(makeTitleCase(city))}`;

      this.setState({
        value: newValue,
        mylink: temp_link
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
       // console.log(suggestion.airportname); //For example alert the selected value
       let temp_link = `/content/airports/${replaceSpaceWithDashes(suggestion.state)}/${replaceSpaceWithDashes(suggestion.city)}/${replaceSpaceWithDashes(suggestion.airportname)}?lid=travel:info-AirportsGuides-${replaceSpaceWithDashes(makeTitleCase(suggestion.city))}&int=_AS_TRAVINFO_-prodID:AirportsGuides-${replaceSpaceWithDashes(makeTitleCase(suggestion.city))}`;
       // window.location.assign(`https://preview.alaskaair.com/content/airports/${suggestion.state}/${suggestion.city}/${replaceSpaceWithDashes(suggestion.airportname)}?lid=travel:info-AirportsGuides-${makeTitleCase(suggestion.city)}&int=_AS_TRAVINFO_-prodID:AirportsGuides-${makeTitleCase(suggestion.city)}`);
       this.setState({
         mylink: temp_link
       });

   };




    componentDidMount(){

      let mypath = window.location.href;
      let airportnamefromurl = mypath.substring(mypath.lastIndexOf('/') + 1);

      if(airportnamefromurl.includes('?')){
        airportnamefromurl = airportnamefromurl.substring(0, airportnamefromurl.indexOf("?"));
      }



      airportnamefromurl = airportnamefromurl.replace(/-/g, ' ');


// https://sitecore2-cd-test-site-westcentralus.azurewebsites.net/api/v1/Airports/GetAllAirports?airportname=
      axios.get(process.env.REACT_APP_MY_BASE_URL+airportnamefromurl)
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
            single_airport: mydata,
            loading:false
        })

      })
      .catch(function (error) {
        console.log(error);
      });



    }




    render(){

        // const airport = airports[1]
        // console.log(airport);

        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
          placeholder: 'Search for airports...',
          value,
          onChange: this.onChange,
          onKeyDown: (event, value) => {
            if (event.keyCode === 13 /* enter */ && !value /* or whatever variable you store the input content in */) {
              // Handle your onEnter logic
               window.location.assign(this.state.mylink)
              //alert(value)
            }
          }
        };


        return (
            <div>
                <div className="airport-search">

                <div className="row">
                  <div className="col-sm-8">
                    <div className="input-and-button">
                      <label htmlFor="search-airport" className="sr-only">Search airport:</label>

                      <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        onSuggestionSelected={this.onSuggestionSelected}
                        inputProps={inputProps}
                        className="form-control ui-autocomplete-input"
                        id="search-airport"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-and-button">
                      <a href={this.state.mylink} id="selectAirportBtn" className="btn btn-ghost-blue form-control">Select Airport</a>
                    </div>
                  </div>
                </div>

                {
                  this.state.loading ? (

                      <div className="load-spinner row text-center">
                        <img src="https://resource.alaskaair.net/-/media/B61CFC4462AA42E9936B8C0DEDEFC2C2" alt="spinner" />
                        <p>Loading airport data</p>
                      </div>

                  ) : (
                    <div></div>
                  )
                }


              {
                this.state.single_airport.map((airport) => {
                  if(airport.airportcode !== '$name'){
                    return(
                      <div key={airport.airportcode}>
                        <AirportGuide  myairport={airport} />
                      </div>
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
