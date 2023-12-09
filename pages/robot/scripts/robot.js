$(document).ready(function(){


    let answers = {
      'привет': 'И тебе привет!',
      'сколько тебе лет': '1000',
      'кто ты': 'Я Albol',
      'что это за планета': 'Это одна из самых отдаленных планет Галактики - Тея!',
      'что ты сдесь делаешь': 'Я хранитель планеты, оберегаю и защищаю ее!'
    };
  
 
    let have_answer = false;
  

    $('#send').click(function(){
  
      var text = $('#text').val();
      if(text != ''){
  
        for (var i in answers){
  
          if(i == text.toLowerCase().replace(/[.,!?]/g, '').trim() ){
            $('result').append('<p>' + answers[i] + '</p>');
  
            have_answer = true;

            break;
          }
        }
  
        if(!have_answer) $('result').append('<p>Я тебя не понимаю!</p>');
  
          have_answer = false;
  
          $('#text').val('').focus();
  
        }else $('result').append('<p>Не нужно пустых слов..</p>');
        
      
    });
  
  });