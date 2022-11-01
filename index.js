
let saturdayFun = function(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(work= "go to the office"){
    return `This Monday, I will ${work}.`
}

let wrapAdjective = function(result = "*"){ 
  return function special(emphatic="a hard worker"){
    return `You are ${result}${emphatic}${result}!`
  }
}

