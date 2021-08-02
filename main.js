var images=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://cdn.imgbin.com/10/11/24/imgbin-brother-stock-photography-others-Lizy12jCWmfJK1qh64JcJ4vBe.jpg","https://en.pimg.jp/041/126/914/1/41126914.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg"];

var names=["Family Book","Rishit Rath","Tapasi Rath","Rajit Rath","Rajanikant Rath"];

var i = 0;
function update()
{
i++;
var numbers_of_family_member_in_array = 5
if(i > numbers_of_family_member_in_array )
{
i = 0;
}
var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("family member_image").src = updatedImage;
document.getElementById("family member_name").innerHTML = updatedName;
}
