let data = [
{
    name: "Yaseera",
    age : "19"
},
{
    name: "Alia",
    age : "20"
},
{
    name: "John",
    age : "29"
},
{
    name: "Pinky",
    age : "28"
},
{
    name: "Sarah",
    age : "30"
},
{
    name: "Prem",
    age : "23"
}
];
const info = document.querySelector("#info");
    let details = data.map(function(item){
      return  '<div> '+item.name+ '</div>'
    })
    info.innerHTML = details.join(" \n");