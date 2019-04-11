function checkbox(status="all")
{
    //status could be checked, unchecked and all
     status=status.toLowerCase();
    switch (status){
        case "all":{
            return $x('//input[@type="checkbox"');
        }
        case "checked":{
             return $x('//input[@type="checkbox" and @checked]');
        }
        case "unchecked":{
            return $x('//input[@type="checkbox" and not(@checked)]');
        }
        default:{
         return -1;
        }
    }
} 
function getInputFieldByUid(uid){
    return $x(`//input[@type="text" and contains(@id,"${uid}")]`)
}

function getInputFieldByDisplayText(text){
    let id=null;
    let is_present=null;
    let fields=null
    //findin the label fields for input
    try{
    fields=$x('//input[@type="text"]//parent::div//parent::div//parent::div[@class="WMFO"]//preceding-sibling::div[@class="WJFO WMEO"]//label');
    }catch(e){
        console.log("Something Fishyy!")
    }    
    for(let i=0;i<fields.length;i++){
       is_present =fields.textContent.toLowerCase().includes(text);
        if(is_present){
           let id= fields.getAttribute("for");
        }
    }
    //if we get a "for" atribute value from the label then we can select input field on the basis of its id
    reuturn (id) ? $x(`//input[@id='${id}']`) : null;
    

}




