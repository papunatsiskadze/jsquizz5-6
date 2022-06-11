// quizz 5

// var fruit = ["ვაშლი","მსხალი","ატამი"];
// fruit.pop();
// fruit.pop();
// fruit.pop();
// fruit.push("ატამი");
// fruit.push("მსხალი");
// fruit.push("ვაშლი");
// console.log(fruit);


// quizz 6
// var month = ["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"]
// var day = ["ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი","კვირა"]

// date = new Date();
// var day = date.getDay();
// var month = date.getMonth();

// if (month<4){
//     welcome = "ცივა";
// }
// else if (month>4 && month<9) {
//     welcome = "ცხელა";
// }
// if (day>3 && month<4){
//     welcome= "წავედით სათხილამუროდ ანდ საგუნდაოდ";
// }
// else if (day>3 && month<9){
//     welcome="წავედით ზღვაზე";
// }

// document.write(welcome + month + day);


// quizz 7
var button = document.getElementById("btnid"),
    count=0;
    button.onClick= function () {
        count +=1;
        button.innerHTML= "click" + count;
    };
