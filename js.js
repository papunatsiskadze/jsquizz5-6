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
var month = ["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"]
var day = ["ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი","კვირა"]

date = new Date();
var day = date.getDay();
var month = date.getMonth();
var message;

if (month<4){
    message = "ცივა"
}
else if (month>4 && month<9) {
    message = "ცხელა"
}
if (day>3 && month<9)