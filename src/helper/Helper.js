export function getAirportName(str){
  let airportname = str.substring(str.indexOf("-")+1, str.indexOf(")"))
  airportname = airportname.trim();
  return airportname;
}

export function getCode(str){
  let code = str.substring(str.indexOf("(")+1, str.indexOf("-")-1)
  code = code.trim();
  return code;
}


export function getState(str){
  let state = str.substring(str.indexOf(",")+1, str.indexOf("(")-1)
  state = state.trim();
  return state;
}


export function getCity(str){
  let city = str.substring(0, str.indexOf(","))
  city = city.trim();
  return city;
}





export function convertMinutesToHours(minutes){
  if(minutes >= 60){
    return minutes/60;
  }else{
    return minutes;
  }

}


export function makeTitleCase(str){
    const wordarray = ["mvp", "faq", "msu", "qa", "er", "bsu", "uaa", "um", "osu", "crj"];

    return str.replace(/\w\S*/g, function(txt){
        if(wordarray.indexOf(txt.toLowerCase()) > -1){
            return txt.toUpperCase();
        }else{
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    });
}


export function makeAllCaps(str){
    return str.replace(/\w\S*/g, function(txt){
        return txt.toUpperCase();
    });
}


export function replaceDashWithSpace(str){
  if(str.includes("-")){
    return str.replace(/-/g," ");
  }else{
    return str;
  }
}

export function replaceSpaceWithDashes(str){
   if(str.includes(" ")){
     return str.replace(/\s+/g, '-');
   }else{
     return str;
   }
}



export function seattleGateLocations(str){

   var index_of_horizon = str.indexOf('Horizon:')
   // var index_of_as_horizon = str.indexOf('Alaska and Horizon')

    var first_line = str.substr(0, index_of_horizon);
    var second_line = str.substr(index_of_horizon, 47);
    var third_line = str.substr(105, 70);

    return "<p>"+first_line +"<br />"+ second_line +"<br />"+third_line+"</p>";
    // return str.replace(/\w\S*/g, function(txt){
    //     return txt.toUpperCase();
    // });
}
