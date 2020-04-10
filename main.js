function moreBtn() {
    input1.style.display = "inline-block";
    btn.style.display = "inline-block";
    btn1.style.display = "inline-block";
    sn1.style.display = "inline-block";
}
function moreBtn1() {
    input2.style.display = "inline-block";
    btn1.style.display = "none";
    btn2.style.display = "inline-block";
    btn3.style.display = "inline-block";
    sn2.style.display = "inline-block";
}
function moreBtn2() {
    input3.style.display = "inline-block";
    btn3.style.display = "none";
    btn4.style.display = "inline-block";
    btn5.style.display = "inline-block";
    sn3.style.display = "inline-block";
}
function moreBtn3() {
    input4.style.display = "inline-block";
    btn5.style.display = "none";
    btn6.style.display = "inline-block";
    btn7.style.display = "inline-block";
    sn4.style.display = "inline-block";
}
function moreBtn4() {
    input5.style.display = "inline-block";
    btn7.style.display = "none";
    btn8.style.display = "inline-block";
    btn9.style.display = "inline-block";
    sn5.style.display = "inline-block";
}
function moreBtn5() {
    input6.style.display = "inline-block";
    btn9.style.display = "none";
    btn10.style.display = "inline-block";
    btn11.style.display = "inline-block";
    sn6.style.display = "inline-block";
}
function moreBtn6() {
    input7.style.display = "inline-block";
    btn11.style.display = "none";
    btn12.style.display = "inline-block";
    btn13.style.display = "inline-block";
    sn7.style.display = "inline-block";
}
function moreBtn7() {
    input8.style.display = "inline-block";
    btn13.style.display = "none";
    btn14.style.display = "inline-block";
    btn15.style.display = "inline-block";
    sn8.style.display = "inline-block";
}
function moreBtn8() {
    input9.style.display = "inline-block";
    btn15.style.display = "none";
    btn16.style.display = "inline-block";
    btn17.style.display = "inline-block";
    sn9.style.display = "inline-block";
}
function moreBtn9(){
    alert('Not available for more info contact the owner')
}

//Search Functions
function myFunction(){
    var page = document.getElementById("input").value;
    var src = document.getElementById("source").src;
    var x = src + "#toolbar=1&page=" + page;
    var s = document.getElementById("page").src = x;
    return s;
}
function myFunction1(){
    var page = document.getElementById("input1").value;
    var src = document.getElementById("source").src;
    var x = src + "#toolbar=1&page=" + page;
    var s = document.getElementById("page1").src = x;
    document.getElementById("hr").style.display="block";
    return s;
}
function myFunction2(){
    var page = document.getElementById("input2").value;
    var src = document.getElementById("source").src;
    var x = src + "#toolbar=1&page=" + page;
    var s = document.getElementById("page2").src = x;
    document.getElementById("hr1").style.display="block";
    return s;
}
function myFunction3(){
    var page = document.getElementById("input3").value;
    var src = document.getElementById("source").src;
    var x = src + "#toolbar=1&page=" + page;
    var s = document.getElementById("page3").src = x;
    document.getElementById("hr2").style.display="block";
    return s;
}
function myFunction4(){
    var page = document.getElementById("input4").value;
    var src = document.getElementById("source").src;
    var x = src + "#toolbar=1&page=" + page;
    var s = document.getElementById("page4").src = x;
    document.getElementById("hr3").style.display="block";
    return s;
}
function myFunction5(){
    var page = document.getElementById("input5").value;
    var src = document.getElementById("source").src;
    var x = src + "#toolbar=1&page=" + page;
    var s = document.getElementById("page5").src = x;
    document.getElementById("hr4").style.display="block";
    return s;
}
function myFunction6(){
    var page = document.getElementById("input6").value;
    var src = document.getElementById("source").src;
    var x = src + "#toolbar=1&page=" + page;
    var s = document.getElementById("page6").src = x;
    document.getElementById("hr5").style.display="block";
    return s;
}
function myFunction7(){
    var page = document.getElementById("input7").value;
    var src = document.getElementById("source").src;
    var x = src + "#toolbar=1&page=" + page;
    var s = document.getElementById("page7").src = x;
    document.getElementById("hr6").style.display="block";
    return s;
}
function myFunction8(){
    var page = document.getElementById("input8").value;
    var src = document.getElementById("source").src;
    var x = src + "#toolbar=1&page=" + page;
    var s = document.getElementById("page8").src = x;
    document.getElementById("hr7").style.display="block";
    return s;
}
function myFunction9(){
    var page = document.getElementById("input9").value;
    var src = document.getElementById("source").src;
    var x = src + "#toolbar=1&page=" + page;
    var s = document.getElementById("page9").src = x;
    document.getElementById("hr8").style.display="block";
    document.getElementById("hr9").style.display="block";
    return s;
}
function results1(){
    myFunction();
    myFunction1(); 
    spn();
    spn1(); 
    tab.style.display="block";
    result.style.display="block";
    main.style.display="none";
    search.style.display="none";
}
function results2(){
    myFunction();
    myFunction1(); 
    myFunction2();
    spn();
    spn1();
    spn2();
    tab.style.display="block";
    result.style.display="block";
    main.style.display="none";
    search.style.display="none";
}
function results3(){
    myFunction();
    myFunction1(); 
    myFunction2(); 
    myFunction3();
    spn();
    spn1();
    spn2();
    spn3(); 
    tab.style.display="block";
    result.style.display="block";
    main.style.display="none";
    search.style.display="none";
}
function results4(){
    myFunction();
    myFunction1(); 
    myFunction2(); 
    myFunction3(); 
    myFunction4();
    spn();
    spn1();
    spn2();
    spn3();
    spn4(); 
    tab.style.display="block";
    result.style.display="block";
    main.style.display="none";
    search.style.display="none";
}
function results5(){
    myFunction();
    myFunction1(); 
    myFunction2(); 
    myFunction3(); 
    myFunction4(); 
    myFunction5();
    spn();
    spn1();
    spn2();
    spn3();
    spn4(); 
    spn5(); 
    tab.style.display="block";
    result.style.display="block";
    main.style.display="none";
    search.style.display="none";
}
function results6(){
    myFunction();
    myFunction1(); 
    myFunction2(); 
    myFunction3(); 
    myFunction4(); 
    myFunction5(); 
    myFunction6();
    spn();
    spn1();
    spn2();
    spn3();
    spn4(); 
    spn5();
    spn6();
    tab.style.display="block";
    result.style.display="block";
    main.style.display="none";
    search.style.display="none";
}
function results7(){
    myFunction();
    myFunction1(); 
    myFunction2(); 
    myFunction3(); 
    myFunction4(); 
    myFunction5(); 
    myFunction6(); 
    myFunction7();
    spn();
    spn1();
    spn2();
    spn3();
    spn4(); 
    spn5();
    spn6();
    spn7(); 
    tab.style.display="block";
    result.style.display="block";
    main.style.display="none";
    search.style.display="none";
}
function results8(){
    myFunction();
    myFunction1(); 
    myFunction2(); 
    myFunction3(); 
    myFunction4(); 
    myFunction5(); 
    myFunction6(); 
    myFunction7(); 
    myFunction8();
    spn();
    spn1();
    spn2();
    spn3();
    spn4(); 
    spn5();
    spn6();
    spn7();
    spn8(); 
    tab.style.display="block";
    result.style.display="block";
    main.style.display="none";
    search.style.display="none";
}
function results9(){
    myFunction();
    myFunction1(); 
    myFunction2(); 
    myFunction3(); 
    myFunction4(); 
    myFunction5(); 
    myFunction6(); 
    myFunction7(); 
    myFunction8(); 
    myFunction9();
    spn();
    spn1();
    spn2();
    spn3();
    spn4(); 
    spn5();
    spn6();
    spn7();
    spn8();
    spn9(); 
    tab.style.display="block";
    result.style.display="block";
    main.style.display="none";
    search.style.display="none";
}
function back(){
    tab.style.display="none";
    result.style.display="none";
    main.style.display="block";
    search.style.display="block";
}
function spn(){
   var x = document.getElementById("input").value;
   var y = document.getElementById("sn").value;
   var z = '<p id="pc"><input type="checkbox" id="check"  onclick="myCheck()">Справка № <span>' + y + "</span> | Страница № <span>" + x +"</span></p>";
   var s = document.getElementById("sf").innerHTML = z;
   return s;
}
function spn1(){
   var x = document.getElementById("input1").value;
   var y = document.getElementById("sn1").value;
   var z = '<p id="pc1"><input type="checkbox" id="check1"  onclick="myCheck1()">Справка № <span>' + y + "</span> | Страница № <span>" + x +"</span></p>";
   var s = document.getElementById("sf1").innerHTML = z;
   return s;
}
function spn2(){
   var x = document.getElementById("input2").value;
   var y = document.getElementById("sn2").value;
   var z = '<p id="pc2"><input type="checkbox" id="check2"  onclick="myCheck2()">Справка № <span>' + y + "</span> | Страница № <span>" + x +"</span></p>";
   var s = document.getElementById("sf2").innerHTML = z;
   return s;
}
function spn3(){
   var x = document.getElementById("input3").value;
   var y = document.getElementById("sn3").value;
   var z = '<p id="pc3"><input type="checkbox" id="check3"  onclick="myCheck3()">Справка № <span>' + y + "</span> | Страница № <span>" + x +"</span></p>";
   var s = document.getElementById("sf3").innerHTML = z;
   return s;
}
function spn4(){
   var x = document.getElementById("input4").value;
   var y = document.getElementById("sn4").value;
   var z = '<p id="pc4"><input type="checkbox" id="check4"  onclick="myCheck4()">Справка № <span>' + y + "</span> | Страница № <span>" + x +"</span></p>";
   var s = document.getElementById("sf4").innerHTML = z;
   return s;
}
function spn5(){
   var x = document.getElementById("input5").value;
   var y = document.getElementById("sn5").value;
   var z = '<p id="pc5"><input type="checkbox" id="check5"  onclick="myCheck5()">Справка № <span>' + y + "</span> | Страница № <span>" + x +"</span></p>";
   var s = document.getElementById("sf5").innerHTML = z;
   return s;
}
function spn6(){
   var x = document.getElementById("input6").value;
   var y = document.getElementById("sn6").value;
   var z = '<p id="pc6"><input type="checkbox" id="check6"  onclick="myCheck6()">Справка № <span>' + y + "</span> | Страница № <span>" + x +"</span></p>";
   var s = document.getElementById("sf6").innerHTML = z;
   return s;
}
function spn7(){
   var x = document.getElementById("input7").value;
   var y = document.getElementById("sn7").value;
   var z = '<p id="pc7"><input type="checkbox" id="check7"  onclick="myCheck7()">Справка № <span>' + y + "</span> | Страница № <span>" + x +"</span></p>";
   var s = document.getElementById("sf7").innerHTML = z;
   return s;
}
function spn8(){
   var x = document.getElementById("input8").value;
   var y = document.getElementById("sn8").value;
   var z = '<p id="pc8"><input type="checkbox" id="check8"  onclick="myCheck8()">Справка № <span>' + y + "</span> | Страница № <span>" + x +"</span></p>";
   var s = document.getElementById("sf8").innerHTML = z;
   return s;
}
function spn9(){
   var x = document.getElementById("input9").value;
   var y = document.getElementById("sn9").value;
   var z = '<p id="pc9"><input type="checkbox" id="check9"  onclick="myCheck9()">Справка № <span>' + y + "</span> | Страница № <span>" + x +"</span></p>";
   var s = document.getElementById("sf9").innerHTML = z;
   return s;
}

function myCheck(){
    var a = document.getElementById("check");
    var b = document.getElementById("pc");
    if(a.checked == true){
        b.style.textDecoration = "line-through";
    }
    else{
        b.style.textDecoration = "none";
    }
}
function myCheck1(){
    var a = document.getElementById("check1");
    var b = document.getElementById("pc1");
    if(a.checked == true){
        b.style.textDecoration = "line-through";
    }
    else{
        b.style.textDecoration = "none";
    }
}
function myCheck2(){
    var a = document.getElementById("check2");
    var b = document.getElementById("pc2");
    if(a.checked == true){
        b.style.textDecoration = "line-through";
    }
    else{
        b.style.textDecoration = "none";
    }
}
function myCheck3(){
    var a = document.getElementById("check3");
    var b = document.getElementById("pc3");
    if(a.checked == true){
        b.style.textDecoration = "line-through";
    }
    else{
        b.style.textDecoration = "none";
    }
}
function myCheck4(){
    var a = document.getElementById("check4");
    var b = document.getElementById("pc4");
    if(a.checked == true){
        b.style.textDecoration = "line-through";
    }
    else{
        b.style.textDecoration = "none";
    }
}
function myCheck5(){
    var a = document.getElementById("check5");
    var b = document.getElementById("pc5");
    if(a.checked == true){
        b.style.textDecoration = "line-through";
    }
    else{
        b.style.textDecoration = "none";
    }
}
function myCheck6(){
    var a = document.getElementById("check6");
    var b = document.getElementById("pc6");
    if(a.checked == true){
        b.style.textDecoration = "line-through";
    }
    else{
        b.style.textDecoration = "none";
    }
}
function myCheck7(){
    var a = document.getElementById("check7");
    var b = document.getElementById("pc7");
    if(a.checked == true){
        b.style.textDecoration = "line-through";
    }
    else{
        b.style.textDecoration = "none";
    }
}
function myCheck8(){
    var a = document.getElementById("check8");
    var b = document.getElementById("pc8");
    if(a.checked == true){
        b.style.textDecoration = "line-through";
    }
    else{
        b.style.textDecoration = "none";
    }
}
function myCheck9(){
    var a = document.getElementById("check9");
    var b = document.getElementById("pc9");
    if(a.checked == true){
        b.style.textDecoration = "line-through";
    }
    else{
        b.style.textDecoration = "none";
    }
}