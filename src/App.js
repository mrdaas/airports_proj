import React,{Component} from "react"
import AirportGuide from "./comp/AirportGuide"
import axios from 'axios'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            myairports: []
        }
    }

    componentDidMount(){
      // fetch('https://sitecore2-cd-test-site-westcentralus.azurewebsites.net/api/v1/Airports/GetAllAirports')
      // .then(response => response.json())
      // .then(response => {
      //     this.setState({
      //         data: response.airports
      //     }, () => console.log(this.state.data))
      // })

      axios.get('https://sitecore2-cd-test-site-westcentralus.azurewebsites.net/api/v1/Airports/GetAllAirports')
      .then(res => {
        const mydata = res.data.airports;
        this.setState({
            myairports: mydata
        }, () => console.log(this.state.myairports))
      })
      .catch(function (error) {
        console.log(error);
      });

    }


    render(){


        return (
            <div>

            <ul>
            {
              this.state.myairports.map((airport) => {
                if(airport.airportcode !== '$name'){
                  return(
                    <li key={airport.airportcode}>{airport.airportcode}</li>
                  )
                }

              })
            }
            </ul>


                    <AirportGuide />
                {/* {this.state.data.map(item => {
                        return (
                            <AirportGuide myitems = {item} />
                        )
                    })} */}


            </div>
        )
    }
}

export default App
