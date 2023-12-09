let maxRandomNum;
let randomNum;

let img_array = [
        'IMG/1.jpg',
        'IMG/2.jpg',
        'IMG/3.jpg',
        'IMG/4.jpg',
        'IMG/5.jpg',
        'IMG/6.jpg',
        'IMG/7.jpg',
        'IMG/8.jpg',
        'IMG/9.jpg',
        'IMG/10.jpg',
    ];
maxRandomNum = img_array.length - 1;

function getImg()
{
    randomNum = Math.round((Math.random() * (maxRandomNum - 0) + 0));
    document.querySelector("#result").innerHTML = '<img src="' + img_array[randomNum] + '">';

}
