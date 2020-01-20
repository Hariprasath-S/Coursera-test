(function() {
    
    // get references to select list and display text box
    var maths = document.getElementById('maths');
    var dld = document.getElementById('dld');
    var ece = document.getElementById('ece');
    var oops = document.getElementById('oops');
    var dsa = document.getElementById('dsa');
    var mpmc = document.getElementById('mpmc');
    var dldl = document.getElementById('dldlab');
    var dsal = document.getElementById('dsalab');

    var cr1 = document.getElementById('credits1');
    var cr2 = document.getElementById('credits2');
    var cr3 = document.getElementById('credits3');
    var cr4 = document.getElementById('credits4');
    var cr5 = document.getElementById('credits5');
    var cr6 = document.getElementById('credits6');
    var cr7 = document.getElementById('credits7');
    var cr8 = document.getElementById('credits8');

    var el1 = document.getElementById('display1');
    var el2 = document.getElementById('display2');
    var el3 = document.getElementById('display3');
    var el4 = document.getElementById('display4');
    var el5 = document.getElementById('display5');
    var el6 = document.getElementById('display6');
    var el7 = document.getElementById('display7');
    var el8 = document.getElementById('display8');


    

    var total = document.getElementById("total");
    var gradeMapping = [10,9,8,7,6];

    


    /*function getSelectedOption(sel) {
        var opt;
        for ( var i = 0, len = sel.options.length; i < len; i++ ) {
            opt = sel.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }*/

    // assign onclick handlers to the buttons
    /*document.getElementById('showVal').onclick = function () {
        el.value = sel.value;    
    }
    
    document.getElementById('showTxt').onclick = function () {
        // access text property of selected option
        el.value = sel.options[sel.selectedIndex].text;
    }*/

    document.getElementById('doLoop1').onclick = function () {
        //var opt = getSelectedOption(sel);
        cr1.value = gradeMapping[maths.selectedIndex];
        el1.value = 4 * cr1.value;
    }
    document.getElementById('doLoop2').onclick = function () {
        //var opt = getSelectedOption(sel);
        cr2.value = gradeMapping[dld.selectedIndex];
        el2.value = 3 * cr2.value;
    }
    document.getElementById('doLoop3').onclick = function () {
        //var opt = getSelectedOption(sel);
        cr3.value = gradeMapping[ece.selectedIndex];
        el3.value = 3 * cr3.value;
    }
    document.getElementById('doLoop4').onclick = function () {
        //var opt = getSelectedOption(sel);
        cr4.value = gradeMapping[mpmc.selectedIndex];
        el4.value = 4 * cr4.value;
    }
    document.getElementById('doLoop5').onclick = function () {
        //var opt = getSelectedOption(sel);
        cr5.value = gradeMapping[dsa.selectedIndex];
        el5.value = 3 * cr5.value;
    }
    document.getElementById('doLoop6').onclick = function () {
        //var opt = getSelectedOption(sel);
        cr6.value = gradeMapping[oops.selectedIndex];
        el6.value = 3 * cr6.value;
    }
    document.getElementById('doLoop7').onclick = function () {
        //var opt = getSelectedOption(sel);
        cr7.value = gradeMapping[dldl.selectedIndex];
        el7.value = 1.5 * cr7.value;
    }
    document.getElementById('doLoop8').onclick = function () {
        //var opt = getSelectedOption(sel);
        cr8.value = gradeMapping[dsal.selectedIndex];
        el8.value = 1.5 * cr8.value;
    }
    document.getElementById('Submit').onclick = function ()     {
    
    var sum = math.sum(el1.value, el2.value , el3.value , el4.value , el5.value , el6.value , el7.value , el8.value);
    total.value=sum;
    var avg = document.getElementById("gpa");
    if(el1.value === "NaN"){
        var alert=document.getElementById("alert");
        alert.style.display = 'block';
        alert.innerHTML = "No GPA"; 
    }
        
    if(sum >= 138) {
        avg.value = math.round(sum/23 , 4);
        var alert=document.getElementById("alert");
        alert.style.display = 'block';
        alert.innerHTML = "Your GPA is " + avg.value;

    }
    else{
        var alert=document.getElementById("alert");
        alert.style.display = 'block';
        alert.innerHTML = "No GPA"; 
    }
    
}


////////////////////////////////







}());