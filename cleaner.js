const subs = ["3160003", "3161605", "3161606", "3161608", "3161611", "3161612"];

let temp = document.querySelectorAll("tbody tr");
var elems = [];
var cleaner = [];
for (var i = 14; i < temp.length; i++) {
  elems.push(temp[i]);
}

elems.forEach((each) => {
  var temp2 = each.querySelectorAll("span");

  var temp3 = temp2[0].innerHTML;
  if (!subs.includes(temp3)) {
    each.style.display = "none";
  } else {
    if (cleaner.includes(temp3)) {
      each.style.display = "none";
    } else {
      cleaner.push(temp3);
    }
  }
});
