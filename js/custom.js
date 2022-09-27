// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();

// nav menu 
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width")
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
}


// test js 1
// var isLoggedIn = user.getLocal('authStatus')|| '';

// if(isLoggedIn === 'true' || mbox.param('Authenticated') === 'true'){
//   return 'user Logged In';
// } else{
//   return 'user not Logged In';
// }



// // test js 2

// user.setLocal('authStatus','');
// var page = mbox.param('Authenticated');
// return page;