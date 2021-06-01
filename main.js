var images = [
    "download (1).jpeg",
    "download (5).jpeg", 
    "download (4).jpeg" , 
    "download (2).jpeg", 
    "download (3).jpeg", 
    "download (7).jpeg",
    "download.png",
    "download (6).jpeg"
]; 
var names = [
    "Family Book",
    "Herve Lapnet", 
    "Massoh Gislaine", 
    "Pricilia", 
    "Steve", 
    "Miguel",
    "Dilane",
    "Eva"
]; 
var i = 0; 
function update() { 
    i++; 
    var numbers_of_family_member_in_array = 7;
    if(i > numbers_of_family_member_in_array ) 
    {
         i = 0;
        } 
        var updatedImage = images[i]; 
        var updatedName = names[i]; 
        document.getElementById("family_member_image").src = updatedImage; 
        document.getElementById("family_member_name").innerHTML = updatedName; 
    }