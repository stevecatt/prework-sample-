var i = 0; // Start point
       let images = [];
       const time = 3000;

       // Image List
       images[0] = {img : 'images/img_2161.jpg', caption : "First Contact"};

       images[1] = {img : 'images/img_0462.jpg', caption : "Damn I'm Cute"};
       images[2] = {img : 'images/img_0411.jpg', caption : "Dressed up"};

       images[3] = {img : 'images/img_0668.jpg', caption : "Thats My Perch"};
       images[4] = {img : 'images/img_0817.jpg', caption : "Bucket List"};

       images[5] = {img : 'images/img_2947.jpg', caption : "Seriously! the Tie Again"};
       images[6] = {img : 'images/img_0361.jpg', caption : "Yeh Christmas"};
       images[7] = {img : 'images/img_1838.jpg', caption : "Scary Cousin"};
       images[8] = {img : 'images/img_0966.jpg', caption : "I Sleep A Lot"};
       

       // Change Image

       //console.log(images[1].img);
       function changeImg(){
           document.slide.src = images[i].img;
           document.getElementById('caption').innerHTML = images[i].caption;

           if(i < images.length - 1){
               i++;
           } else {
               i = 0;
           }

           setTimeout("changeImg()", time);
       }

       window.onload = changeImg;