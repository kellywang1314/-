/* 将json字符串'{"a": 1, "b": "str", "c":[2, 3], "d":{"e": 4}}'
转化为如下格式：
{
    "a": 1,
    "b": "str",
    "c": [
        2,
        3
    ],
    "d": {
        "e": 4
    }
} */

function JsonParse(str){
    let obj = JSON.parse(str)
    let s = ''
    s+="{\n"+solve(obj,1)+"}"
    function solve(obj,tab){
        let temp = ''
        if(Array.isArray(obj)){
            tab++
            for(let i in obj){
                temp+=addEmpty(tab)+i+',\n'
            }
        }else{
            for(let i in obj){
                tmp+=addEmpty(tab)    
                if(typeof obj[i]!="object"){
                    if(typeof obj[i]=="string"){
                    tmp+='\"'+i+'\":\"'+obj[i]+'\"';
                    }else{
                        tmp+='\"'+i+'\":'+obj[i];
                    }
                }else if(Array.isArray(obj[i])){
                    tmp+='\"'+i+'\":'+"[\n"+solve(obj[i],tab)+addEmpty(tab)+"]";
                }else{
                    tmp+='\"'+i+'\":'+"{\n"+addEmpty(tab)+solve(obj[i],tab)+addEmpty(tab)+"}";
                }
                tmp+=",\n"
            }
        }
        return tmp;
    }
}

function addEmpty(tab){
    let tmp="";
    for(let i=0;i<tab;i++){
        tmp+="     ";
    }
    return tmp;
}