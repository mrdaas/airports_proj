import React,{Component} from "react"
import AirportGuide from "./comp/AirportGuide"


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch('https://www.alaskaair.com/api/v1/AirportsLite/GetAllAirportsLite')
        .then(response => response.json())
        .then(response => {
            this.setState({
                data: response.data
            }, () => console.log(this.state))
        })
      }


    render(){


        return (
            <div>

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



