var i = 0; // Start point
        let images = [];
        const time = 3000;
    
        // Image List
        images[0] = 'images/img_2161.jpg';
    
        images[1] = 'images/img_0462.jpg';
        
        images[2] = 'images/img_0662.jpg';
        images[3] = 'images/img_0668.jpg'; 
        images[4] = 'images/img_0817.jpg';
       
        images[5] = 'images/img_2947.jpg';
        images[6] = 'images/img_0361.jpg';
        images[7] = 'images/img_1838.jpg';
        images[8] = 'images/img_0966.jpg';
        images[9] = 'images/img_0411.jpg';
    
        // Change Image
        function changeImg(){
            document.slide.src = images[i];
    
            if(i < images.length - 1){
                i++;
            } else {
                i = 0;
            }
    
            setTimeout("changeImg()", time);
        }
    
        window.onload = changeImg;
        