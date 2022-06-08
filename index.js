$( document ).ready(function() {

   var url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c9479145834a44feaf7a52adec669518";

   $.get(url,(response)=>{
       
       for(i=0;i<response.articles.length;i++){
       var html=`<div class="projcard projcard-red">
       
       <div class="projcard-innerbox">
           <img class="projcard-img" src="${response.articles[i].urlToImage}" />
           <div class="projcard-textbox">
               <div class="projcard-title">${response.articles[i].title}</div>
               <div class="projcard-subtitle">${response.articles[i].author}</div>
               <div class="projcard-bar"></div>
               <div class="projcard-description">${response.articles[i].content}</div>
               <div class="projcard-tagbox">
                   <span class="projcard-tag">${response.articles[i].publishedAt}</span>
                   <span class="projcard-tag">${response.articles[i].source.name}</span>
              
                   
               </div>
               <a class="url" href="${response.articles[i].url}">Read more</a>
           </div>
          
       </div>
   </div>
   `;
   
   $("#newsbox").append(html);
       }
   });


   function filternews(query){
       let html = "";
    const url = "https://newsapi.org/v2/everything?q="+query+"&apiKey=c9479145834a44feaf7a52adec669518";
    $.get(url,(response)=>{
       
       
        for(i=0;i<response.articles.length;i++){

         html +=`
         <div class="projcard projcard-red">
        
        <div class="projcard-innerbox">
            <img class="projcard-img" src="${response.articles[i].urlToImage}" />
            <div class="projcard-textbox">
                <div class="projcard-title">${response.articles[i].title}</div>
                <div class="projcard-subtitle">${response.articles[i].author}</div>
                <div class="projcard-bar"></div>
                <div class="projcard-description">${response.articles[i].content}</div>
                <div class="projcard-tagbox">
                    <span class="projcard-tag">${response.articles[i].publishedAt}</span>
                    <span class="projcard-tag">${response.articles[i].source.name}</span>
               
                    
                </div>
                <a class="url" href="${response.articles[i].url}">Read more</a>
            </div>
           
        </div>
    </div>
    `;
    
    $("#filternews").html(html);
        }
    });
}

function capitalize(str) {
    strVal = '';
    str = str.split(' ');
    for (var chr = 0; chr < str.length; chr++) {
      strVal += str[chr].substring(0, 1).toUpperCase() + str[chr].substring(1, str[chr].length) + ' '
    }
    return strVal
  }

  $('.logo').click(function() {
    location.reload();
});

   $("#tech").click(function(){
filternews("tech");
$( "h1" ).html( "Tech News" )
  $("#newsbox").hide();
  $("#filternews").show();
  });

  $("#business").click(function(){
    filternews("Business");
    $( "h1" ).html( "Business News" )
      $("#newsbox").hide();
      $("#filternews").show();
      });
    

      $("#food").click(function(){
        filternews("food");
        $( "h1" ).html( "Food News" )
          $("#newsbox").hide();
          $("#filternews").show();
          });
        
               $('#search-data').keypress(function(event){
                var keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == '13'){
                    const userinput =  $( "#search-data" ).val();
                             filternews(userinput);
                                 $( "h1" ).html( capitalize(userinput)+" News" )
                                   $("#newsbox").hide();
                                   $("#filternews").show();
                }
              });

 $("#submit").click(function(){
           const userinput =  $( "#search-data" ).val();
        filternews(userinput);
            $( "h1" ).html( capitalize(userinput)+" News" )
              $("#newsbox").hide();
              $("#filternews").show();
              });

    });



