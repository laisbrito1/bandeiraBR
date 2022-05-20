
    
        var tela = document.querySelector("canvas");
        var pincel = tela.getContext('2d');

        
        pincel.fillStyle='green'
        pincel.fillRect (0, 0, 600, 300);
        
        
        pincel.fillStyle ='yellow';
        pincel.beginPath();
        pincel.moveTo(300, 0);
        pincel.lineTo(600, 150);
        pincel.lineTo(0, 150);
        pincel.fill()

        
        pincel.fillStyle ='yellow';
        pincel.beginPath();
        pincel.moveTo(300, 300);
        pincel.lineTo(600, 150);
        pincel.lineTo(0, 150);
        pincel.fill()

        
        pincel.fillStyle ='blue';
        pincel.beginPath();
        pincel.arc(300, 150, 100, 0, 2*3.14);
        pincel.fill();



    
  
