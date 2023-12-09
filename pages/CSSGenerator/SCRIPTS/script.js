let result = document.getElementById('result');
function changeText()
{
    let t = document.getElementById('mainText').value;
    result.textContent = t;
}

function changeTextSize()
{
    let textSize = document.querySelector('#textSize').value;
    result.style.cssText += "font-size: "+textSize+"px;";
}

function changeTextColor()
{
    let textColor = document.querySelector('#textColor').value;
    result.style.cssText += "color:  "+textColor+";";

}

function changeTextStyle()
{
    let textStyle = document.querySelector( '#textStyle' );
    let strTextStyle=''
    for (let i = 0; i < textStyle.options.length; i++)
    {
     let options = textStyle.options[i];
     if(options.selected)
     {
        if(options.value=="bolder")
            strTextStyle+= "font-weight:  " + options.value + ";";
        if(options.value=="italic")
            strTextStyle+= "font-style:  " + options.value + ";";
        if(options.value=="normal")
            strTextStyle+= "font-style:  " + options.value + ";";
        if(options.value=="underline")
            strTextStyle+= "text-decoration:  " + options.value + ";";

        }
    }   
    result.style.cssText += strTextStyle;
}

function changeTextFamily()
{
    let textfamily =document.querySelector('#textFamily');

    for (let i = 0; i < textfamily.options.length; i++) {
        let option = textfamily.options[i];
        if(option.selected) {
            result.style.cssText += "font-family: \"" + option.value + "\";";
        
        }

    }

}

function changeShadowClick()
{
    let check =document.querySelector('#shadowbox').checked;
    document.querySelector('#ShadowX').disabled =!check;
    document.querySelector('#ShadowY').disabled =!check;
    document.querySelector('#ShadowBlur').disabled =!check;
    document.querySelector('#ShadowColor').disabled =!check;
   
}

function changeShadow()
{
    let ShadowX = document.querySelector('ShadowX').value;
    let ShadowY = document.querySelector('ShadowY').value;
    let ShadowBlur = document.querySelector('ShadowBlur').value;
    let ShadowColor = document.querySelector('ShadowColor').value;
    if(ShadowX && ShadowY && ShadowBlur && ShadowColor)
        result.style.cssText +="text-shadow:"+ShadowX+"px "+ShadowY+"px "+ShadowBlur+"px "+ShadowColor+";"
}

function  getStyleLine()
{
    let code = document.querySelector('#code');
    code.textContent= result.style.cssText;

}



