
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
    return str.replace(/-/g," ");
}

export function replaceSpaceWithDashes(str){
    return str.replace(/\s+/g, '-');
}



export function seattleGateLocations(str){

   var index_of_horizon = str.indexOf('Horizon:')
   var index_of_as_horizon = str.indexOf('Alaska and Horizon')

    var first_line = str.substr(0, index_of_horizon);
    var second_line = str.substr(index_of_horizon, 47);
    var third_line = str.substr(105, 70);

    return "<p>"+first_line +"<br />"+ second_line +"<br />"+third_line+"</p>";
    // return str.replace(/\w\S*/g, function(txt){
    //     return txt.toUpperCase();
    // });
}
