let interst = 0;
function go()
{

    if(interst !=100)
    {
        interst++;
        document.getElementById('interest').innerHTML = interst + ' %';
        document.getElementById('progress').style.width = interst * 5 + 'px';

    }
    else
    {
        document.getElementById('interest').innerHTML = 'Загрузка завершена';
        document.getElementById('interest').style.margin = '15px 0 0 186px';
    }

 
}