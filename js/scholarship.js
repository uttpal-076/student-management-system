// function Select_Scholarship(){
//     let religion = document.forms["scholarshipschemes"]["religion"].value;
//     let annualincome = document.forms["scholarshipschemes"]["annualincome"].value;
//     let caste = document.forms["scholarshipschemes"]["caste"].value;
//     let department = document.forms["scholarshipschemes"]["department"].value;
//     var disability = document.querySelector('input[type=radio][name=disability]:checked');

//     var btn1_display = false;
//     if(department == "OBC, SEBC, VJNT & SBC Welfare Department"){
//         if (annualincome <= '150000' && caste == 'VJNT' && disability.value == 'no'){
//             document.getElementById("li1").style.display = "block";
//             btn1_display = true;
//         }
//         if (annualincome <= '800000' && caste == 'VJNT' && disability.value == 'no'){
//             document.getElementById("li2").style.display = "block";
//             btn1_display = true;
//         }
//         if (annualincome <= '100000' && caste == 'VJNT' && disability.value == 'no'){
//             document.getElementById("li3").style.display = "block";
//             btn1_display = true;
//         }
//         if (annualincome <= '100000' && caste == 'SBC' && disability.value == 'no'){
//             document.getElementById("li4").style.display = "block";
//             btn1_display = true;
//         }
//         if (caste == 'VJNT' && disability.value == 'no'){
//             document.getElementById("li5").style.display = "block";
//             btn1_display = true;
//         }
//         if (caste == 'SBC' && disability.value == 'no'){
//             document.getElementById("li6").style.display = "block";
//             btn1_display = true;
//         }
//         if (religion != 'Buddhist' && annualincome <= '150000' && caste == 'OBC' && disability.value == 'no'){
//             document.getElementById("li7").style.display = "block";
//             btn1_display = true;
//         }
//         if (religion != 'Buddhist' && annualincome <= '150000' && caste == 'VJNT' && disability.value == 'no'){
//             document.getElementById("li8").style.display = "block";
//             btn1_display = true;
//         }
//         if (religion != 'Buddhist' && annualincome <= '150000' && caste == 'SBC' && disability.value == 'no'){
//             document.getElementById("li9").style.display = "block";
//             btn1_display = true;
//         }
//         if (btn1_display == true){
//             document.getElementById("btn1").style.display = "block";
//         }
//     }else{
//             document.getElementById("li1").style.display = "none";
//             document.getElementById("li2").style.display = "none";
//             document.getElementById("li3").style.display = "none";
//             document.getElementById("li4").style.display = "none";
//             document.getElementById("li5").style.display = "none";
//             document.getElementById("li6").style.display = "none";
//             document.getElementById("li7").style.display = "none";
//             document.getElementById("li8").style.display = "none";
//             document.getElementById("li9").style.display = "none";
//             document.getElementById("btn1").style.display = "none";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var btn2_display = false;
//     if(department == "Social Justice and Special Assistance Department"){
//         if (religion == "Buddhist" && annualincome <= 250000 && caste == 'SC' && disability.value == 'no'){
//             document.getElementById("li10").style.display = "block";
//             btn2_display = true;
//         }
//         if (religion == 'Buddhist' && annualincome >= 250000 && caste == 'SC' && disability.value == 'no'){
//             document.getElementById("li11").style.display = "block";
//             btn2_display = true;
//         }
//         if (religion == 'Buddhist' && annualincome <= 250000 && caste == 'SC' && disability.value == 'no'){
//             document.getElementById("li12").style.display = "block";
//             btn2_display = true;
//         }
//         if (religion == 'Buddhist' && caste == 'SC' && disability.value == 'no'){
//             document.getElementById("li13").style.display = "block";
//             btn2_display = true;
//         }
//         if (caste == 'Any' && disability.value == 'yes'){
//             document.getElementById("li14").style.display = "block";
//             btn2_display = true;
//         }
//         if (religion == 'Buddhist' && annualincome <= '800000' && caste == 'SC' && disability.value == 'no'){
//             document.getElementById("li15").style.display = "block";
//             btn2_display = true;
//         }
//         if (btn2_display == true){
//             document.getElementById("btn2").style.display = "block";
//         }
//     }else{
//             document.getElementById("li10").style.display = "none";
//             document.getElementById("li11").style.display = "none";
//             document.getElementById("li12").style.display = "none";
//             document.getElementById("li13").style.display = "none";
//             document.getElementById("li14").style.display = "none";
//             document.getElementById("li15").style.display = "none";
//             document.getElementById("btn2").style.display = "none";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var btn3_display = false;
//     if(department == "Tribal Development Department"){
//         if (religion == 'Hindu' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
//             document.getElementById("li16").style.display = "block";
//             btn3_display = true;
//         }
//         if (religion == 'Sikh' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
//             document.getElementById("li17").style.display = "block";
//             btn3_display = true;
//         }
//         if (religion == 'Buddhist' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
//             document.getElementById("li18").style.display = "block";
//             btn3_display = true;
//         }
//         if (religion == 'Hindu' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
//             document.getElementById("li19").style.display = "block";
//             btn3_display = true;
//         }
//         if (religion == 'Sikh' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
//             document.getElementById("li20").style.display = "block";
//             btn3_display = true;
//         }
//         if (cell3_display == true){
//             document.getElementById("btn3").style.display = "block";
//         }
//     }else{
//             document.getElementById("li16").style.display = "none";
//             document.getElementById("li17").style.display = "none";
//             document.getElementById("li18").style.display = "none";
//             document.getElementById("li19").style.display = "none";
//             document.getElementById("li20").style.display = "none";
//             document.getElementById("btn3").style.display = "none";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var btn4_display = false;
//     if(department == "Directorate of Higher Education"){
//         if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//             document.getElementById("li21").style.display = "block";
//             btn4_display = true;
//         }
//         if (annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
//             document.getElementById("li22").style.display = "block";
//             btn4_display = true;
//         }
//         if (caste == 'General' && disability.value == 'no'){
//             document.getElementById("li23").style.display = "block";
//             btn4_display = true;
//         }
//         if (caste == 'General' && disability.value == 'no'){
//             document.getElementById("li24").style.display = "block";
//             btn4_display = true;
//         }
//         if (annualincome <= '75000' && caste == 'General' && disability.value == 'no'){
//             document.getElementById("li25").style.display = "block";
//             btn4_display = true;
//         }
//         if (caste == 'General' && disability.value == 'no'){
//             document.getElementById("li26").style.display = "block";
//             btn4_display = true;
//         }
//         if (caste == 'General' && disability.value == 'no'){
//             document.getElementById("li27").style.display = "block";
//             btn4_display = true;
//         }
//         if (caste == 'General' && disability.value == 'no'){
//             document.getElementById("li28").style.display = "block";
//             btn4_display = true;
//         }
//         if (caste == 'General' && disability.value == 'no'){
//             document.getElementById("li29").style.display = "block";
//             btn4_display = true;
//         }
//         if (caste == 'General' && disability.value == 'no'){
//             document.getElementById("li30").style.display = "block";
//             btn4_display = true;
//         }
//         if (caste == 'General' && disability.value == 'no'){
//             document.getElementById("li31").style.display = "block";
//             btn4_display = true;
//         }
//         if (caste == 'General' && disability.value == 'no'){
//             document.getElementById("li32").style.display = "block";
//             btn4_display = true;
//         }
//         if (caste == 'General' && disability.value == 'no'){
//             document.getElementById("li33").style.display = "block";
//             btn4_display = true;
//         }
//         if(btn4_display == true){
//             document.getElementById("btn4").style.display = "block";
//         }
//     }else{
//             document.getElementById("li21").style.display = "none";
//             document.getElementById("li22").style.display = "none";
//             document.getElementById("li23").style.display = "none";
//             document.getElementById("li24").style.display = "none";
//             document.getElementById("li25").style.display = "none";
//             document.getElementById("li26").style.display = "none";
//             document.getElementById("li27").style.display = "none";
//             document.getElementById("li28").style.display = "none";
//             document.getElementById("li29").style.display = "none";
//             document.getElementById("li30").style.display = "none";
//             document.getElementById("li31").style.display = "none";
//             document.getElementById("li32").style.display = "none";
//             document.getElementById("li33").style.display = "none";
//             document.getElementById("btn4").style.display = "none";
//     }
// //------------------------------------------------------------------------------------------------------------------------------------------

//     var btn5_display = false;
//     if(department == "Directorate of Technical Education"){
//         if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//             document.getElementById("li34").style.display = "block";
//             btn5_display = true;
//         }
//         if (annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
//             document.getElementById("li35").style.display = "block";
//             btn5_display = true;
//         }
//         if(btn5_display == true){
//             document.getElementById("btn5").style.display = "block";
//         }
//     }else{
//             document.getElementById("li34").style.display = "none";
//             document.getElementById("li35").style.display = "none";
//             document.getElementById("btn5").style.display = "none";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var btn6_display = false;
//     if(department == "School Education and Sports Department"){
//         if (disability.value == 'no'){
//             document.getElementById("li36").style.display = "block";
//             btn6_display = true;
//         }
//         if (disability.value == 'no'){
//             document.getElementById("li37").style.display = "block";
//             btn6_display = true;
//         }
//         if(btn6_display == true){
//             document.getElementById("btn6").style.display = "block";
//         }
//     }else{
//             document.getElementById("li36").style.display = "none";
//             document.getElementById("li37").style.display = "none";
//             document.getElementById("btn6").style.display = "none";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var btn7_display = false;
//     if(department == "Directorate of Medical Education and Research"){
//         if (annualincome <= '800000' && caste == 'EBC' && disability.value == 'no'){
//             document.getElementById("li38").style.display = "block";
//             btn7_display = true;
//         }
//         if ( annualincome <= '800000' && disability.value == 'no'){
//             document.getElementById("li39").style.display = "block";
//             btn7_display = true;
//         }
//         if (caste == 'OPEN' && disability.value == 'no'){
//             document.getElementById("li40").style.display = "block";
//             btn7_display = true;
        
//         }
//         if(btn7_display == true){
//             document.getElementById("btn7").style.display = "block";
//         }
//     }else{
//             document.getElementById("li38").style.display = "none";
//             document.getElementById("li39").style.display = "none";
//             document.getElementById("li40").style.display = "none";
//             document.getElementById("btn7").style.display = "none";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var btn8_display = false;
//     if(department == "Minority Development Department"){
//         if (annualincome <= '800000' && disability.value == 'no'){
//             document.getElementById("li41").style.display = "block";
//             btn8_display = true;
//         }
//         if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//             document.getElementById("li42").style.display = "block";
//             btn8_display = true;
//         }
//         if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//             document.getElementById("li43").style.display = "block";
//             btn8_display = true;
//         }
//         if(btn8_display == true){
//             document.getElementById("btn8").style.display = "block";
//         }
//     }else{
//             document.getElementById("li41").style.display = "none";
//             document.getElementById("li42").style.display = "none";
//             document.getElementById("li43").style.display = "none";
//             document.getElementById("btn8").style.display = "none";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var btn9_display = false;
//     if(department == "Directorate of Art"){
//         if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//             document.getElementById("li44").style.display = "block";
//             btn9_display = true;
//         }
//         if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//             document.getElementById("li45").style.display = "block";
//             btn9_display = true;
//         }
//         if(btn9_display == true){
//             document.getElementById("btn9").style.display = "block";
//         }
//     }else{
//             document.getElementById("li44").style.display = "none";
//             document.getElementById("li45").style.display = "none";
//             document.getElementById("btn9").style.display = "none";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var btn10_display = false;
//     if(department == "Mahatma Phule Krishi Vidyapeeth, Rahuri"){
//         if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//             document.getElementById("li46").style.display = "block";
//             btn10_display = true;
//         }
//         if (annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
//             document.getElementById("li47").style.display = "block";
//             btn10_display = true;
//         }
//         if(btn10_display == true){
//             document.getElementById("btn10").style.display = "block";
//         }
//     }else{
//             document.getElementById("li46").style.display = "none";
//             document.getElementById("li47").style.display = "none";
//             document.getElementById("btn10").style.display = "none";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var btn11_display = false;
//     if(department == "MAFSU Nagpur"){
//         if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//             document.getElementById("li48").style.display = "block";
//             btn11_display = true;
//         }
//         if (annualincome <= '600000' && caste == 'General' && disability.value == 'no'){
//             document.getElementById("li49").style.display = "block";
//             btn11_display = true;
//         }
//         if(btn11_display == true){
//             document.getElementById("btn11").style.display = "block";
//         }
//     }else{
//             document.getElementById("li48").style.display = "none";
//             document.getElementById("li49").style.display = "none";
//             document.getElementById("btn11").style.display = "none";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var btn12_display = false;
//     if(department == "Skill Development, Employement And Entrepreneurship Department"){
//         if (annualincome <= '800000' && caste == 'OPEN' && disability.value == 'no'){
//             document.getElementById("li50").style.display = "block";
//             btn12_display = true;
//         }
//         if(btn12_display == true){
//             document.getElementById("btn12").style.display = "block";
//         }
//     }else{
//             document.getElementById("li50").style.display = "none";
//             document.getElementById("btn12").style.display = "none";
//     }
// }

function Select_Scholarship(){
    let religion = document.forms["personaldetails"]["religion"].value;
    let annualincome = document.forms["scholarshipdetails"]["annualincome"].value;
    let caste = document.forms["scholarshipdetails"]["caste"].value;
    var disability = document.querySelector('input[type=radio][name=disability]:checked');

    var table = document.getElementById("table_scholarship");
    var row1 = table.insertRow(0);
    var cell1 = row1.insertCell(0);
    cell1.innerHTML = "Social Justice and Special Assistance Department" + "</br>";
    var cell1_display = false;
    
    var row2 = table.insertRow(1);
    var cell2 = row2.insertCell(0);
    if (religion == "Buddhist" && annualincome <= 250000 && caste == 'SC' && disability.value == 'no'){
        cell2.innerHTML =  "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA07C7E01997E4885\" target=\"_blank\">" + 
        "Government of India Post-Matric Scholarship" + "</a></br>";
        cell1_display = true;
    }
    if (religion == 'Buddhist' && annualincome >= 250000 && caste == 'SC' && disability.value == 'no'){
        cell2.innerHTML = cell2.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AE3B184954F87E9F7\" target=\"_blank\">" +  
        "Post-Matric Tuition Fee and Examination Fee (Freeship)" + "</a></br>";
        cell1_display = true;
    }
    if (religion == 'Buddhist' && annualincome <= 250000 && caste == 'SC' && disability.value == 'no'){
        cell2.innerHTML = cell2.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AB210B3E0B1AA642F\" target=\"_blank\">" + 
        "Maintenance Allowance for student Studying in professional courses" + "</a></br>";
        cell1_display = true;
    }
    if (religion == 'Buddhist' && caste == 'SC' && disability.value == 'no'){
        cell2.innerHTML = cell2.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A3160277BCF2AA7C6\" target=\"_blank\">" + 
        "Rajarshri Chhatrapati Shahu Maharaj Merit Scholarship" + "</a></br>";
        cell1_display = true;
    }
    if (caste == 'Any' && disability.value == 'yes'){
        cell2.innerHTML = cell2.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A054A8D0DAA702B64\" target=\"_blank\">" + 
        "Post-Matric Scholarship for persons with disability" + "</a></br>";
        cell1_display = true;
    }
    if (religion == 'Buddhist' && annualincome <= '800000' && caste == 'SC' && disability.value == 'no'){
        cell2.innerHTML = cell2.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD172C0AB7BCD9AB3\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the students belonging to Scheduled Caste category Students" + "</a></br>";
        cell1_display = true;
    }
    if (cell1_display == false){
       cell1.innerHTML="";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row3 = table.insertRow(2);
    var cell3 = row3.insertCell(0);
    cell3.innerHTML = "Tribal Development Department" + "</br>";
    var cell3_display = false;

    var row4 = table.insertRow(3);
    var cell4 = row4.insertCell(0);
    if (religion == 'Hindu' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A739268F02CEC37EC\" target=\"_blank\">" + 
        "Post Matric Scholarship Scheme (Government Of India )" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Sikh' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A739268F02CEC37EC\" target=\"_blank\">" + 
        "Post Matric Scholarship Scheme (Government Of India )" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Buddhist' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A739268F02CEC37EC\" target=\"_blank\">" + 
        "Post Matric Scholarship Scheme (Government Of India )" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Hindu' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFC085DBE43E82570\" target=\"_blank\">" + 
        "Tuition Fee &  Exam Fee for Tribal Students ( Freeship)" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Sikh' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFC085DBE43E82570\" target=\"_blank\">" + 
        "Tuition Fee &  Exam Fee for Tribal Students ( Freeship)" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Buddhist' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFC085DBE43E82570\" target=\"_blank\">" + 
        "Tuition Fee &  Exam Fee for Tribal Students ( Freeship)" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Hindu' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC6B28ED14CE96709\" target=\"_blank\">" + 
        "Vocational Education Fee Reimbursement" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Sikh' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC6B28ED14CE96709\" target=\"_blank\">" + 
        "Vocational Education Fee Reimbursement" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Buddhist' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC6B28ED14CE96709\" target=\"_blank\">" + 
        "Vocational Education Fee Reimbursement" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Hindu' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AADA109F73D48B5D5\" target=\"_blank\">" + 
        "Vocational Education Maintenance Allowance" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Sikh' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AADA109F73D48B5D5\" target=\"_blank\">" + 
        "Vocational Education Maintenance Allowance" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Buddhist' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AADA109F73D48B5D5\" target=\"_blank\">" + 
        "Vocational Education Maintenance Allowance" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Hindu' && annualincome <= '800000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A649D149EAF5F4A10\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Sikh' && annualincome <= '800000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A649D149EAF5F4A10\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Buddhist' && annualincome <= '800000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A649D149EAF5F4A10\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category" + "</a></br>";
        cell3_display = true;
    }
    if (cell3_display == false){
        cell3.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row5 = table.insertRow(4);
    var cell5 = row5.insertCell(0);
    cell5.innerHTML = "Directorate of Higher Education" + "</br>";
    var cell5_display = false;

    var row6 = table.insertRow(5);
    var cell6 = row6.insertCell(0);
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A2D3C3A162F4DE21D\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Scheme" + "</a></br>";
        cell5_display = true;
    }
    if (annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A2D3C3A162F4DE21D\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Scheme" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A974A58E65FA75F28\" target=\"_blank\">" + 
        "Assistance to Meritorious Students scholarship - Junior Level" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ADB0E651ACBFBD0AB\" target=\"_blank\">" + 
        "Education Concession to the Children of Ex-Servicemen" + "</a></br>";
        cell5_display = true;
    }
    if (annualincome <= '75000' && caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AB0BE07C3EC756406\" target=\"_blank\">" + 
        "Eklavya Scholarship" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC3C0DE50B5557546\" target=\"_blank\">" + 
        "State Government Open Merit Scholarship" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC3C0DE50B5557546\" target=\"_blank\">" + 
        "State Government Open Merit Scholarship" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A4BBDC0D4DC8452FB\" target=\"_blank\">" + 
        "Scholarship to Meritorious students possessing Mathematics /Physics" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AEC62CC61F6C26609\" target=\"_blank\">" + 
        "Government Vidyaniketan Scholarship" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A0D2D93F9CF99BD37\" target=\"_blank\">" + 
        "State Government Daxshina Adhichatra Scholarship" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA7F7B18C7EA3C817\" target=\"_blank\">" + 
        "Government Research Adhichatra" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A9A3C313414F8286F\" target=\"_blank\">" + 
        "Education Concession to the Children Freedom Fighter" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ABF4E10E281A07733\" target=\"_blank\">" + 
        "Jawaharlal Nehru University Scholarship" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A581B0F1DB8A46333\" target=\"_blank\">" + 
        "Assistance to Meritorious Students scholarship - Senior Level" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD7C4C238FF7FAB33\" target=\"_blank\">" + 
        "Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (DHE)" + "</a></br>";
        cell5_display = true;
    }
    if(cell5_display == false){
        cell5.innerHTML = "";
    }
//------------------------------------------------------------------------------------------------------------------------------------------

    var row7 = table.insertRow(6);
    var cell7 = row7.insertCell(0);
    cell7.innerHTML = "Directorate of Technical Education" + "</br>";
    var cell7_display = false;

    var row8 = table.insertRow(7);
    var cell8 = row8.insertCell(0);
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell8.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA54D7A32E4C3B30A\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
        cell7_display = true;
    }
    if (annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
        cell8.innerHTML = cell8.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA54D7A32E4C3B30A\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
        cell7_display = true;
    }
    if (annualincome <= '' && caste == 'General' && disability.value == 'no'){
        cell8.innerHTML = cell8.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1DB822FC15D61FEA\" target=\"_blank\">" + 
        "Dr Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna(DTE)" + "</a></br>";
        cell7_display = true;
    }
    if (annualincome <= '' && caste == 'SEBC' && disability.value == 'no'){
        cell8.innerHTML = cell8.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1DB822FC15D61FEA\" target=\"_blank\">" + 
        "Dr Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna(DTE)" + "</a></br>";
        cell7_display = true;
    }
    if(cell7_display == false){
        cell7.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row9 = table.insertRow(8);
    var cell9 = row9.insertCell(0);
    cell9.innerHTML = "School Education and Sports Department" + "</br>";
    var cell9_display = false;

    var row10 = table.insertRow(9);
    var cell10 = row10.insertCell(0);
    if (disability.value == 'no'){
        cell10.innerHTML = "<a style=\"color:blue\" href=\" \" target=\"_blank\">" + 
        "Open Merit Scholarships in Junior College" + "</a></br>";
        cell9_display = true;
    }
    if (disability.value == 'no'){
        cell10.innerHTML = cell10.innerHTML + "<a style=\"color:blue\" href=\" \" target=\"_blank\">" + 
        "Merit Scholarships for Economically Backward Class Students" + "</a></br>";
        cell9_display = true;
    }
    if(cell9_display == false){
        cell9.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row11 = table.insertRow(10);
    var cell11 = row11.insertCell(0);
    cell11.innerHTML = "OBC, SEBC, VJNT & SBC Welfare Department" + "</br>";
    var cell11_display = false;

    var row12 = table.insertRow(11);
    var cell12 = row12.insertCell(0);
    if (annualincome <= '150000' && caste == 'VJNT' && disability.value == 'no'){
        cell12.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD0CCA04E9F6D7EE4\" target=\"_blank\">" + 
        "Post Matric Scholarship to VJNT Students" + "</a></br>";
        cell11_display = true;
    }
    if (annualincome <= '800000' && caste == 'VJNT' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AF84D5DECD4CA9AB5\" target=\"_blank\">" + 
        "Tuition Fees and Examination Fees to VJNT Students" + "</a></br>";
        cell11_display = true;
    }
    if (annualincome <= '100000' && caste == 'VJNT' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A66AC4BAB6E4DB665\" target=\"_blank\">" + 
        "Payment of Maintenance Allowance to VJNT and SBC Students Studying in Professional Courses and Living in Hostel Attached to Professional Colleges" + "</a></br>";
        cell11_display = true;
    }
    if (annualincome <= '100000' && caste == 'SBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A66AC4BAB6E4DB665\" target=\"_blank\">" + 
        "Payment of Maintenance Allowance to VJNT and SBC Students Studying in Professional Courses and Living in Hostel Attached to Professional Colleges" + "</a></br>";
        cell11_display = true;
    }
    if (caste == 'VJNT' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AAB0ACBF92AD2F649\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship for students studying in 11th & 12th standard of VJNT & SBC category" + "</a></br>";
        cell11_display = true;
    }
    if (caste == 'SBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AAB0ACBF92AD2F649\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship for students studying in 11th & 12th standard of VJNT & SBC category" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '150000' && caste == 'OBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\" https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC54E5F6E794BD5C1\" target=\"_blank\">" + 
        "Post Matric Scholarship to OBC Students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '150000' && caste == 'VJNT' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC54E5F6E794BD5C1\" target=\"_blank\">" + 
        "Post Matric Scholarship to OBC Students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '150000' && caste == 'SBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC54E5F6E794BD5C1\" target=\"_blank\">" + 
        "Post Matric Scholarship to OBC Students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '150000' && caste == 'SBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AACF2205FD2FB060A\" target=\"_blank\">" + 
        "Post Matric Scholarship to SBC Students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'OBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\" \" target=\"_blank\">" + 
        "Tuition Fees and Examination Fees to OBC Students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'SBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A2406A5294F822FAC\" target=\"_blank\">" + 
        "Tuition Fees and Examination Fees to SBC Students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'OBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFFD85CFC9534EEE5\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFFD85CFC9534EEE5\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'VJNT' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFFD85CFC9534EEE5\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'SBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFFD85CFC9534EEE5\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students" + "</a></br>";
        cell11_display = true;
    }
    if(cell11_display == false){
        cell11.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row13 = table.insertRow(12);
    var cell13 = row13.insertCell(0);
    cell13.innerHTML = "Directorate of Medical Education and Research" + "</br>";
    var cell13_display = false;

    var row14 = table.insertRow(13);
    var cell14 = row14.insertCell(0);
    if (annualincome <= '800000' && caste == 'EBC' && disability.value == 'no'){
        cell14.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ADB3BC6C89611BF9A\" target=\"_blank\">" + 
        "Rajarshri Chhatrapati Shahu Maharaj Fee Reimbursement Scheme" + "</a></br>";
        cell13_display = true;
    }
    if ( annualincome <= '800000' && disability.value == 'no'){
        cell14.innerHTML = cell14.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA5337B52CE309785\" target=\"_blank\">" + 
        "Dr Panjabrao Deshmukh Hostel Maintenance Allowance" + "</a></br>";
        cell13_display = true;
    }
    if (caste == 'OPEN' && disability.value == 'no'){
        cell14.innerHTML = cell14.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A0789217992448C2E\" target=\"_blank\">" + 
        "Education Fee reimbursement for open category students affected due to SEBC and EWS reservation in medical and Dental colleges" + "</a></br>";
        cell13_display = true;
    
    }
    if(cell13_display == false){
        cell13.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row15 = table.insertRow(14);
    var cell15 = row15.insertCell(0);
    cell15.innerHTML = "Minority Development Department" + "</br>";
    var cell15_display = false;

    var row16 = table.insertRow(15);
    var cell16 = row16.insertCell(0);
    if (annualincome <= '800000' && disability.value == 'no'){
        cell16.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A78F1DC35C6E48797\" target=\"_blank\">" + 
        "State Minority Scholarship Part II (DHE)" + "</a></br>";
        cell15_display = true;
    }
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell16.innerHTML = cell16.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A10CD9E828AFD9209\" target=\"_blank\">" + 
        "Scholarship for students of minority communities pursuing Higher and Professional courses(DTE)" + "</a></br>";
        cell15_display = true;
    }
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell16.innerHTML = cell16.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A61FF7871E24FE19D\" target=\"_blank\">" + 
        "Scholarship for students of minority communities pursuing Higher and Professional courses(DMER)" + "</a></br>";
        cell15_display = true;
    }
    if(cell15_display == false){
        cell15.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row17 = table.insertRow(16);
    var cell17 = row17.insertCell(0);
    cell17.innerHTML = "Directorate of Art" + "</br>";
    var cell17_display = false;

    var row18 = table.insertRow(17);
    var cell18 = row18.insertCell(0);
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell18.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A4CECAB91C2B36920\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
        cell17_display = true;
    }
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell18.innerHTML = cell18.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFF59C835471DFEAE\" target=\"_blank\">" + 
        "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (DOA)" + "</a></br>";
        cell17_display = true;
    }
    if(cell17_display == false){
        cell17.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row19 = table.insertRow(18);
    var cell19 = row19.insertCell(0);
    cell19.innerHTML = "Mahatma Phule Krishi Vidyapeeth, Rahuri" + "</br>";
    var cell19_display = false;

    var row20 = table.insertRow(19);
    var cell20 = row20.insertCell(0);
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell20.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A50495B1E79CEAF71\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
        cell19_display = true;
    }
    if (annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
        cell20.innerHTML = cell20.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A50495B1E79CEAF71\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
        cell19_display = true;
    }
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell20.innerHTML = cell20.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD36E29BD04FB95F2\" target=\"_blank\">" + 
        "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (AGR)" + "</a></br>";
        cell19_display = true;
    }
    if (annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
        cell20.innerHTML = cell20.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD36E29BD04FB95F2\" target=\"_blank\">" + 
        "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (AGR)" + "</a></br>";
        cell19_display = true;
    }
    if(cell19_display == false){
        cell19.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row21 = table.insertRow(20);
    var cell21 = row21.insertCell(0);
    cell21.innerHTML = "MAFSU Nagpur" + "</br>";
    var cell21_display = false;

    var row22 = table.insertRow(21);
    var cell22 = row22.insertCell(0);
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell22.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA804BF8946610BEA\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
        cell21_display = true;
    }
    if (annualincome <= '600000' && caste == 'General' && disability.value == 'no'){
        cell22.innerHTML = cell22.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AE5A44C72C454E753\" target=\"_blank\">" + 
        "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (MAFSU)" + "</a></br>";
        cell21_display = true;
    }
    if(cell21_display == false){
        cell21.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row23 = table.insertRow(22);
    var cell23 = row23.insertCell(0);
    cell23.innerHTML = "Skill Development, Employement And Entrepreneurship Department" + "</br>";
    var cell23_display = false;

    var row24 = table.insertRow(23);
    var cell24 = row24.insertCell(0);
    if (annualincome <= '800000' && caste == 'OPEN' && disability.value == 'no'){
        cell24.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A6B32D7E54C4EFF76\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the students belonging to socially and educationally backward class and Open Category (Economically weaker section) students" + "</a></br>";
        cell23_display = true;
    }
    if (annualincome <= '800000' && caste == 'EWS' && disability.value == 'no'){
        cell24.innerHTML = cell24.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A6B32D7E54C4EFF76\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the students belonging to socially and educationally backward class and Open Category (Economically weaker section) students" + "</a></br>";
        cell23_display = true;
    }
    if(cell23_display == false){
        cell23.innerHTML = "";
    }
}

function Show_Select_Scholarship(){
    let religion = document.forms["show_personaldetails"]["show_religion"].value;
    let annualincome = document.forms["show_scholarshipdetails"]["show_annualincome"].value;
    let caste = document.forms["show_scholarshipdetails"]["show_caste"].value;
    var disability = document.querySelector('input[type=radio][name=show_disability]:checked');

    var table = document.getElementById("show_table_scholarship");
    var row1 = table.insertRow(0);
    var cell1 = row1.insertCell(0);
    cell1.innerHTML = "Social Justice and Special Assistance Department" + "</br>";
    var cell1_display = false;
    
    var row2 = table.insertRow(1);
    var cell2 = row2.insertCell(0);
    if (religion == "Buddhist" && annualincome <= 250000 && caste == 'SC' && disability.value == 'no'){
        cell2.innerHTML =  "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA07C7E01997E4885\" target=\"_blank\">" + 
        "Government of India Post-Matric Scholarship" + "</a></br>";
        cell1_display = true;
    }
    if (religion == 'Buddhist' && annualincome >= 250000 && caste == 'SC' && disability.value == 'no'){
        cell2.innerHTML = cell2.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AE3B184954F87E9F7\" target=\"_blank\">" +  
        "Post-Matric Tuition Fee and Examination Fee (Freeship)" + "</a></br>";
        cell1_display = true;
    }
    if (religion == 'Buddhist' && annualincome <= 250000 && caste == 'SC' && disability.value == 'no'){
        cell2.innerHTML = cell2.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AB210B3E0B1AA642F\" target=\"_blank\">" + 
        "Maintenance Allowance for student Studying in professional courses" + "</a></br>";
        cell1_display = true;
    }
    if (religion == 'Buddhist' && caste == 'SC' && disability.value == 'no'){
        cell2.innerHTML = cell2.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A3160277BCF2AA7C6\" target=\"_blank\">" + 
        "Rajarshri Chhatrapati Shahu Maharaj Merit Scholarship" + "</a></br>";
        cell1_display = true;
    }
    if (caste == 'Any' && disability.value == 'yes'){
        cell2.innerHTML = cell2.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A054A8D0DAA702B64\" target=\"_blank\">" + 
        "Post-Matric Scholarship for persons with disability" + "</a></br>";
        cell1_display = true;
    }
    if (religion == 'Buddhist' && annualincome <= '800000' && caste == 'SC' && disability.value == 'no'){
        cell2.innerHTML = cell2.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD172C0AB7BCD9AB3\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the students belonging to Scheduled Caste category Students" + "</a></br>";
        cell1_display = true;
    }
    if (cell1_display == false){
       cell1.innerHTML="";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row3 = table.insertRow(2);
    var cell3 = row3.insertCell(0);
    cell3.innerHTML = "Tribal Development Department" + "</br>";
    var cell3_display = false;

    var row4 = table.insertRow(3);
    var cell4 = row4.insertCell(0);
    if (religion == 'Hindu' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A739268F02CEC37EC\" target=\"_blank\">" + 
        "Post Matric Scholarship Scheme (Government Of India )" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Sikh' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A739268F02CEC37EC\" target=\"_blank\">" + 
        "Post Matric Scholarship Scheme (Government Of India )" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Buddhist' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A739268F02CEC37EC\" target=\"_blank\">" + 
        "Post Matric Scholarship Scheme (Government Of India )" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Hindu' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFC085DBE43E82570\" target=\"_blank\">" + 
        "Tuition Fee &  Exam Fee for Tribal Students ( Freeship)" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Sikh' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFC085DBE43E82570\" target=\"_blank\">" + 
        "Tuition Fee &  Exam Fee for Tribal Students ( Freeship)" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Buddhist' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFC085DBE43E82570\" target=\"_blank\">" + 
        "Tuition Fee &  Exam Fee for Tribal Students ( Freeship)" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Hindu' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC6B28ED14CE96709\" target=\"_blank\">" + 
        "Vocational Education Fee Reimbursement" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Sikh' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC6B28ED14CE96709\" target=\"_blank\">" + 
        "Vocational Education Fee Reimbursement" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Buddhist' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC6B28ED14CE96709\" target=\"_blank\">" + 
        "Vocational Education Fee Reimbursement" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Hindu' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AADA109F73D48B5D5\" target=\"_blank\">" + 
        "Vocational Education Maintenance Allowance" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Sikh' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AADA109F73D48B5D5\" target=\"_blank\">" + 
        "Vocational Education Maintenance Allowance" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Buddhist' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AADA109F73D48B5D5\" target=\"_blank\">" + 
        "Vocational Education Maintenance Allowance" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Hindu' && annualincome <= '800000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A649D149EAF5F4A10\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Sikh' && annualincome <= '800000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A649D149EAF5F4A10\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category" + "</a></br>";
        cell3_display = true;
    }
    if (religion == 'Buddhist' && annualincome <= '800000' && caste == 'ST' && disability.value == 'no'){
        cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A649D149EAF5F4A10\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category" + "</a></br>";
        cell3_display = true;
    }
    if (cell3_display == false){
        cell3.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row5 = table.insertRow(4);
    var cell5 = row5.insertCell(0);
    cell5.innerHTML = "Directorate of Higher Education" + "</br>";
    var cell5_display = false;

    var row6 = table.insertRow(5);
    var cell6 = row6.insertCell(0);
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A2D3C3A162F4DE21D\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Scheme" + "</a></br>";
        cell5_display = true;
    }
    if (annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A2D3C3A162F4DE21D\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Scheme" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A974A58E65FA75F28\" target=\"_blank\">" + 
        "Assistance to Meritorious Students scholarship - Junior Level" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ADB0E651ACBFBD0AB\" target=\"_blank\">" + 
        "Education Concession to the Children of Ex-Servicemen" + "</a></br>";
        cell5_display = true;
    }
    if (annualincome <= '75000' && caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AB0BE07C3EC756406\" target=\"_blank\">" + 
        "Eklavya Scholarship" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC3C0DE50B5557546\" target=\"_blank\">" + 
        "State Government Open Merit Scholarship" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC3C0DE50B5557546\" target=\"_blank\">" + 
        "State Government Open Merit Scholarship" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A4BBDC0D4DC8452FB\" target=\"_blank\">" + 
        "Scholarship to Meritorious students possessing Mathematics /Physics" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AEC62CC61F6C26609\" target=\"_blank\">" + 
        "Government Vidyaniketan Scholarship" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A0D2D93F9CF99BD37\" target=\"_blank\">" + 
        "State Government Daxshina Adhichatra Scholarship" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA7F7B18C7EA3C817\" target=\"_blank\">" + 
        "Government Research Adhichatra" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A9A3C313414F8286F\" target=\"_blank\">" + 
        "Education Concession to the Children Freedom Fighter" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ABF4E10E281A07733\" target=\"_blank\">" + 
        "Jawaharlal Nehru University Scholarship" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A581B0F1DB8A46333\" target=\"_blank\">" + 
        "Assistance to Meritorious Students scholarship - Senior Level" + "</a></br>";
        cell5_display = true;
    }
    if (caste == 'General' && disability.value == 'no'){
        cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD7C4C238FF7FAB33\" target=\"_blank\">" + 
        "Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (DHE)" + "</a></br>";
        cell5_display = true;
    }
    if(cell5_display == false){
        cell5.innerHTML = "";
    }
//------------------------------------------------------------------------------------------------------------------------------------------

    var row7 = table.insertRow(6);
    var cell7 = row7.insertCell(0);
    cell7.innerHTML = "Directorate of Technical Education" + "</br>";
    var cell7_display = false;

    var row8 = table.insertRow(7);
    var cell8 = row8.insertCell(0);
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell8.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA54D7A32E4C3B30A\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
        cell7_display = true;
    }
    if (annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
        cell8.innerHTML = cell8.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA54D7A32E4C3B30A\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
        cell7_display = true;
    }
    if (annualincome <= '' && caste == 'General' && disability.value == 'no'){
        cell8.innerHTML = cell8.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1DB822FC15D61FEA\" target=\"_blank\">" + 
        "Dr Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna(DTE)" + "</a></br>";
        cell7_display = true;
    }
    if (annualincome <= '' && caste == 'SEBC' && disability.value == 'no'){
        cell8.innerHTML = cell8.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1DB822FC15D61FEA\" target=\"_blank\">" + 
        "Dr Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna(DTE)" + "</a></br>";
        cell7_display = true;
    }
    if(cell7_display == false){
        cell7.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row9 = table.insertRow(8);
    var cell9 = row9.insertCell(0);
    cell9.innerHTML = "School Education and Sports Department" + "</br>";
    var cell9_display = false;

    var row10 = table.insertRow(9);
    var cell10 = row10.insertCell(0);
    if (disability.value == 'no'){
        cell10.innerHTML = "<a style=\"color:blue\" href=\" \" target=\"_blank\">" + 
        "Open Merit Scholarships in Junior College" + "</a></br>";
        cell9_display = true;
    }
    if (disability.value == 'no'){
        cell10.innerHTML = cell10.innerHTML + "<a style=\"color:blue\" href=\" \" target=\"_blank\">" + 
        "Merit Scholarships for Economically Backward Class Students" + "</a></br>";
        cell9_display = true;
    }
    if(cell9_display == false){
        cell9.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row11 = table.insertRow(10);
    var cell11 = row11.insertCell(0);
    cell11.innerHTML = "OBC, SEBC, VJNT & SBC Welfare Department" + "</br>";
    var cell11_display = false;

    var row12 = table.insertRow(11);
    var cell12 = row12.insertCell(0);
    if (annualincome <= '150000' && caste == 'VJNT' && disability.value == 'no'){
        cell12.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD0CCA04E9F6D7EE4\" target=\"_blank\">" + 
        "Post Matric Scholarship to VJNT Students" + "</a></br>";
        cell11_display = true;
    }
    if (annualincome <= '800000' && caste == 'VJNT' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AF84D5DECD4CA9AB5\" target=\"_blank\">" + 
        "Tuition Fees and Examination Fees to VJNT Students" + "</a></br>";
        cell11_display = true;
    }
    if (annualincome <= '100000' && caste == 'VJNT' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A66AC4BAB6E4DB665\" target=\"_blank\">" + 
        "Payment of Maintenance Allowance to VJNT and SBC Students Studying in Professional Courses and Living in Hostel Attached to Professional Colleges" + "</a></br>";
        cell11_display = true;
    }
    if (annualincome <= '100000' && caste == 'SBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A66AC4BAB6E4DB665\" target=\"_blank\">" + 
        "Payment of Maintenance Allowance to VJNT and SBC Students Studying in Professional Courses and Living in Hostel Attached to Professional Colleges" + "</a></br>";
        cell11_display = true;
    }
    if (caste == 'VJNT' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AAB0ACBF92AD2F649\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship for students studying in 11th & 12th standard of VJNT & SBC category" + "</a></br>";
        cell11_display = true;
    }
    if (caste == 'SBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AAB0ACBF92AD2F649\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship for students studying in 11th & 12th standard of VJNT & SBC category" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '150000' && caste == 'OBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\" https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC54E5F6E794BD5C1\" target=\"_blank\">" + 
        "Post Matric Scholarship to OBC Students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '150000' && caste == 'VJNT' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC54E5F6E794BD5C1\" target=\"_blank\">" + 
        "Post Matric Scholarship to OBC Students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '150000' && caste == 'SBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC54E5F6E794BD5C1\" target=\"_blank\">" + 
        "Post Matric Scholarship to OBC Students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '150000' && caste == 'SBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AACF2205FD2FB060A\" target=\"_blank\">" + 
        "Post Matric Scholarship to SBC Students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'OBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\" \" target=\"_blank\">" + 
        "Tuition Fees and Examination Fees to OBC Students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'SBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A2406A5294F822FAC\" target=\"_blank\">" + 
        "Tuition Fees and Examination Fees to SBC Students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'OBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFFD85CFC9534EEE5\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFFD85CFC9534EEE5\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'VJNT' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFFD85CFC9534EEE5\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students" + "</a></br>";
        cell11_display = true;
    }
    if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'SBC' && disability.value == 'no'){
        cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFFD85CFC9534EEE5\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students" + "</a></br>";
        cell11_display = true;
    }
    if(cell11_display == false){
        cell11.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row13 = table.insertRow(12);
    var cell13 = row13.insertCell(0);
    cell13.innerHTML = "Directorate of Medical Education and Research" + "</br>";
    var cell13_display = false;

    var row14 = table.insertRow(13);
    var cell14 = row14.insertCell(0);
    if (annualincome <= '800000' && caste == 'EBC' && disability.value == 'no'){
        cell14.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ADB3BC6C89611BF9A\" target=\"_blank\">" + 
        "Rajarshri Chhatrapati Shahu Maharaj Fee Reimbursement Scheme" + "</a></br>";
        cell13_display = true;
    }
    if ( annualincome <= '800000' && disability.value == 'no'){
        cell14.innerHTML = cell14.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA5337B52CE309785\" target=\"_blank\">" + 
        "Dr Panjabrao Deshmukh Hostel Maintenance Allowance" + "</a></br>";
        cell13_display = true;
    }
    if (caste == 'OPEN' && disability.value == 'no'){
        cell14.innerHTML = cell14.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A0789217992448C2E\" target=\"_blank\">" + 
        "Education Fee reimbursement for open category students affected due to SEBC and EWS reservation in medical and Dental colleges" + "</a></br>";
        cell13_display = true;
    }
    if(cell13_display == false){
        cell13.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row15 = table.insertRow(14);
    var cell15 = row15.insertCell(0);
    cell15.innerHTML = "Minority Development Department" + "</br>";
    var cell15_display = false;

    var row16 = table.insertRow(15);
    var cell16 = row16.insertCell(0);
    if (annualincome <= '800000' && disability.value == 'no'){
        cell16.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A78F1DC35C6E48797\" target=\"_blank\">" + 
        "State Minority Scholarship Part II (DHE)" + "</a></br>";
        cell15_display = true;
    }
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell16.innerHTML = cell16.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A10CD9E828AFD9209\" target=\"_blank\">" + 
        "Scholarship for students of minority communities pursuing Higher and Professional courses(DTE)" + "</a></br>";
        cell15_display = true;
    }
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell16.innerHTML = cell16.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A61FF7871E24FE19D\" target=\"_blank\">" + 
        "Scholarship for students of minority communities pursuing Higher and Professional courses(DMER)" + "</a></br>";
        cell15_display = true;
    }
    if(cell15_display == false){
        cell15.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row17 = table.insertRow(16);
    var cell17 = row17.insertCell(0);
    cell17.innerHTML = "Directorate of Art" + "</br>";
    var cell17_display = false;

    var row18 = table.insertRow(17);
    var cell18 = row18.insertCell(0);
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell18.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A4CECAB91C2B36920\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
        cell17_display = true;
    }
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell18.innerHTML = cell18.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFF59C835471DFEAE\" target=\"_blank\">" + 
        "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (DOA)" + "</a></br>";
        cell17_display = true;
    }
    if(cell17_display == false){
        cell17.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row19 = table.insertRow(18);
    var cell19 = row19.insertCell(0);
    cell19.innerHTML = "Mahatma Phule Krishi Vidyapeeth, Rahuri" + "</br>";
    var cell19_display = false;

    var row20 = table.insertRow(19);
    var cell20 = row20.insertCell(0);
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell20.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A50495B1E79CEAF71\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
        cell19_display = true;
    }
    if (annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
        cell20.innerHTML = cell20.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A50495B1E79CEAF71\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
        cell19_display = true;
    }
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell20.innerHTML = cell20.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD36E29BD04FB95F2\" target=\"_blank\">" + 
        "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (AGR)" + "</a></br>";
        cell19_display = true;
    }
    if (annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
        cell20.innerHTML = cell20.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD36E29BD04FB95F2\" target=\"_blank\">" + 
        "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (AGR)" + "</a></br>";
        cell19_display = true;
    }
    if(cell19_display == false){
        cell19.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row21 = table.insertRow(20);
    var cell21 = row21.insertCell(0);
    cell21.innerHTML = "MAFSU Nagpur" + "</br>";
    var cell21_display = false;

    var row22 = table.insertRow(21);
    var cell22 = row22.insertCell(0);
    if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
        cell22.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA804BF8946610BEA\" target=\"_blank\">" + 
        "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
        cell21_display = true;
    }
    if (annualincome <= '600000' && caste == 'General' && disability.value == 'no'){
        cell22.innerHTML = cell22.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AE5A44C72C454E753\" target=\"_blank\">" + 
        "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (MAFSU)" + "</a></br>";
        cell21_display = true;
    }
    if(cell21_display == false){
        cell21.innerHTML = "";
    }
    //------------------------------------------------------------------------------------------------------------------------------------------

    var row23 = table.insertRow(22);
    var cell23 = row23.insertCell(0);
    cell23.innerHTML = "Skill Development, Employement And Entrepreneurship Department" + "</br>";
    var cell23_display = false;

    var row24 = table.insertRow(23);
    var cell24 = row24.insertCell(0);
    if (annualincome <= '800000' && caste == 'OPEN' && disability.value == 'no'){
        cell24.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A6B32D7E54C4EFF76\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the students belonging to socially and educationally backward class and Open Category (Economically weaker section) students" + "</a></br>";
        cell23_display = true;
    }
    if (annualincome <= '800000' && caste == 'EWS' && disability.value == 'no'){
        cell24.innerHTML = cell24.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A6B32D7E54C4EFF76\" target=\"_blank\">" + 
        "Vocational Training Fee reimbursement for the students belonging to socially and educationally backward class and Open Category (Economically weaker section) students" + "</a></br>";
        cell23_display = true;
    }
    if(cell23_display == false){
        cell23.innerHTML = "";
    }
}

function Select_Scholarship_clear(){
    var table = document.getElementById("table_scholarship");
    table.innerHTML = "";   
}

function Show_Select_Scholarship_clear(){
    var table = document.getElementById("show_table_scholarship");
    table.innerHTML = "";   
}

function myCreateFunction() {
    var table = document.getElementById("table_scholarship");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
  }
  
  function myDeleteFunction() {
    document.getElementById("table_scholarship").deleteRow(0);
  }

//------------------------------------------------------------------------------------------------------
//     let religion = document.forms["personaldetails"]["religion"].value;
//     let annualincome = document.forms["scholarshipdetails"]["annualincome"].value;
//     let caste = document.forms["scholarshipdetails"]["caste"].value;
//     var disability = document.querySelector('input[type=radio][name=disability]:checked');

//     var table = document.getElementById("table_scholarship");
//     var row1 = table.insertRow(0);
//     var cell1 = row1.insertCell(0);
//     cell1.innerHTML = "Social Justice and Special Assistance Department" + "</br>";
//     var cell1_display = false;
    
//     var row2 = table.insertRow(1);
//     var cell2 = row2.insertCell(0);
//     if (religion == "Buddhist" && annualincome <= 250000 && caste == 'SC' && disability.value == 'no'){
//         cell2.innerHTML =  "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA07C7E01997E4885\" target=\"_blank\">" + 
//         "Government of India Post-Matric Scholarship" + "</a></br>";
//         cell1_display = true;
//     }
//     if (religion == 'Buddhist' && annualincome >= 250000 && caste == 'SC' && disability.value == 'no'){
//         cell2.innerHTML = cell2.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AE3B184954F87E9F7\" target=\"_blank\">" +  
//         "Post-Matric Tuition Fee and Examination Fee (Freeship)" + "</a></br>";
//         cell1_display = true;
//     }
//     if (religion == 'Buddhist' && annualincome <= 250000 && caste == 'SC' && disability.value == 'no'){
//         cell2.innerHTML = cell2.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AB210B3E0B1AA642F\" target=\"_blank\">" + 
//         "Maintenance Allowance for student Studying in professional courses" + "</a></br>";
//         cell1_display = true;
//     }
//     if (religion == 'Buddhist' && caste == 'SC' && disability.value == 'no'){
//         cell2.innerHTML = cell2.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A3160277BCF2AA7C6\" target=\"_blank\">" + 
//         "Rajarshri Chhatrapati Shahu Maharaj Merit Scholarship" + "</a></br>";
//         cell1_display = true;
//     }
//     if (religion == 'Any' && caste == 'Any' && disability.value == 'yes'){
//         cell2.innerHTML = cell2.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A054A8D0DAA702B64\" target=\"_blank\">" + 
//         "Post-Matric Scholarship for persons with disability" + "</a></br>";
//         cell1_display = true;
//     }
//     if (religion == 'Buddhist' && annualincome <= '800000' && caste == 'SC' && disability.value == 'no'){
//         cell2.innerHTML = cell2.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD172C0AB7BCD9AB3\" target=\"_blank\">" + 
//         "Vocational Training Fee reimbursement for the students belonging to Scheduled Caste category Students" + "</a></br>";
//         cell1_display = true;
//     }
//     if (cell1_display == false){
//        cell1.innerHTML="";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var row3 = table.insertRow(2);
//     var cell3 = row3.insertCell(0);
//     cell3.innerHTML = "Tribal Development Department" + "</br>";
//     var cell3_display = false;

//     var row4 = table.insertRow(3);
//     var cell4 = row4.insertCell(0);
//     if (religion == 'Hindu' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
//         cell4.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A739268F02CEC37EC\" target=\"_blank\">" + 
//         "Post Matric Scholarship Scheme (Government Of India )" + "</a></br>";
//         cell3_display = true;
//     }
//     if (religion == 'Sikh' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
//         cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A739268F02CEC37EC\" target=\"_blank\">" + 
//         "Post Matric Scholarship Scheme (Government Of India )" + "</a></br>";
//         cell3_display = true;
//     }
//     if (religion == 'Buddhist' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
//         cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A739268F02CEC37EC\" target=\"_blank\">" + 
//         "Post Matric Scholarship Scheme (Government Of India )" + "</a></br>";
//         cell3_display = true;
//     }
//     if (religion == 'Hindu' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
//         cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFC085DBE43E82570\" target=\"_blank\">" + 
//         "Tuition Fee &  Exam Fee for Tribal Students ( Freeship)" + "</a></br>";
//         cell3_display = true;
//     }
//     if (religion == 'Sikh' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
//         cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFC085DBE43E82570\" target=\"_blank\">" + 
//         "Tuition Fee &  Exam Fee for Tribal Students ( Freeship)" + "</a></br>";
//         cell3_display = true;
//     }
//     if (religion == 'Buddhist' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
//         cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFC085DBE43E82570\" target=\"_blank\">" + 
//         "Tuition Fee &  Exam Fee for Tribal Students ( Freeship)" + "</a></br>";
//         cell3_display = true;
//     }
//     if (religion == 'Hindu' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
//         cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC6B28ED14CE96709\" target=\"_blank\">" + 
//         "Vocational Education Fee Reimbursement" + "</a></br>";
//         cell3_display = true;
//     }
//     if (religion == 'Sikh' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
//         cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC6B28ED14CE96709\" target=\"_blank\">" + 
//         "Vocational Education Fee Reimbursement" + "</a></br>";
//         cell3_display = true;
//     }
//     if (religion == 'Buddhist' && annualincome > '250000' && caste == 'ST' && disability.value == 'no'){
//         cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC6B28ED14CE96709\" target=\"_blank\">" + 
//         "Vocational Education Fee Reimbursement" + "</a></br>";
//         cell3_display = true;
//     }
//     if (religion == 'Hindu' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
//         cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AADA109F73D48B5D5\" target=\"_blank\">" + 
//         "Vocational Education Maintenance Allowance" + "</a></br>";
//         cell3_display = true;
//     }
//     if (religion == 'Sikh' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
//         cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AADA109F73D48B5D5\" target=\"_blank\">" + 
//         "Vocational Education Maintenance Allowance" + "</a></br>";
//         cell3_display = true;
//     }
//     if (religion == 'Buddhist' && annualincome <= '250000' && caste == 'ST' && disability.value == 'no'){
//         cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AADA109F73D48B5D5\" target=\"_blank\">" + 
//         "Vocational Education Maintenance Allowance" + "</a></br>";
//         cell3_display = true;
//     }
//     if (religion == 'Hindu' && annualincome <= '800000' && caste == 'ST' && disability.value == 'no'){
//         cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A649D149EAF5F4A10\" target=\"_blank\">" + 
//         "Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category" + "</a></br>";
//         cell3_display = true;
//     }
//     if (religion == 'Sikh' && annualincome <= '800000' && caste == 'ST' && disability.value == 'no'){
//         cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A649D149EAF5F4A10\" target=\"_blank\">" + 
//         "Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category" + "</a></br>";
//         cell3_display = true;
//     }
//     if (religion == 'Buddhist' && annualincome <= '800000' && caste == 'ST' && disability.value == 'no'){
//         cell4.innerHTML = cell4.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A649D149EAF5F4A10\" target=\"_blank\">" + 
//         "Vocational Training Fee reimbursement for the students belonging to Scheduled Tribe Category" + "</a></br>";
//         cell3_display = true;
//     }
//     if (cell3_display == false){
//         cell3.innerHTML = "";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var row5 = table.insertRow(4);
//     var cell5 = row5.insertCell(0);
//     cell5.innerHTML = "Directorate of Higher Education" + "</br>";
//     var cell5_display = false;

//     var row6 = table.insertRow(5);
//     var cell6 = row6.insertCell(0);
//     if (religion == 'Any' && annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//         cell6.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A2D3C3A162F4DE21D\" target=\"_blank\">" + 
//         "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Scheme" + "</a></br>";
//         cell5_display = true;
//     }
//     if (religion == 'Any' && annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
//         cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A2D3C3A162F4DE21D\" target=\"_blank\">" + 
//         "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Scheme" + "</a></br>";
//         cell5_display = true;
//     }
//     if (religion == 'Any'  && caste == 'General' && disability.value == 'no'){
//         cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A974A58E65FA75F28\" target=\"_blank\">" + 
//         "Assistance to Meritorious Students scholarship - Junior Level" + "</a></br>";
//         cell5_display = true;
//     }
//     if (religion == 'Any' && caste == 'General' && disability.value == 'no'){
//         cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ADB0E651ACBFBD0AB\" target=\"_blank\">" + 
//         "Education Concession to the Children of Ex-Servicemen" + "</a></br>";
//         cell5_display = true;
//     }
//     if (religion == 'Any' && annualincome <= '75000' && caste == 'General' && disability.value == 'no'){
//         cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AB0BE07C3EC756406\" target=\"_blank\">" + 
//         "Eklavya Scholarship" + "</a></br>";
//         cell5_display = true;
//     }
//     if (religion == 'Any'  && caste == 'General' && disability.value == 'no'){
//         cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC3C0DE50B5557546\" target=\"_blank\">" + 
//         "State Government Open Merit Scholarship" + "</a></br>";
//         cell5_display = true;
//     }
//     if (religion == 'Any' && caste == 'General' && disability.value == 'no'){
//         cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC3C0DE50B5557546\" target=\"_blank\">" + 
//         "State Government Open Merit Scholarship" + "</a></br>";
//         cell5_display = true;
//     }
//     if (religion == 'Any' && caste == 'General' && disability.value == 'no'){
//         cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A4BBDC0D4DC8452FB\" target=\"_blank\">" + 
//         "Scholarship to Meritorious students possessing Mathematics /Physics" + "</a></br>";
//         cell5_display = true;
//     }
//     if (religion == 'Any' && caste == 'General' && disability.value == 'no'){
//         cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AEC62CC61F6C26609\" target=\"_blank\">" + 
//         "Government Vidyaniketan Scholarship" + "</a></br>";
//         cell5_display = true;
//     }
//     if (religion == 'Any' && caste == 'General' && disability.value == 'no'){
//         cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A0D2D93F9CF99BD37\" target=\"_blank\">" + 
//         "State Government Daxshina Adhichatra Scholarship" + "</a></br>";
//         cell5_display = true;
//     }
//     if (religion == 'Any' && caste == 'General' && disability.value == 'no'){
//         cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA7F7B18C7EA3C817\" target=\"_blank\">" + 
//         "Government Research Adhichatra" + "</a></br>";
//         cell5_display = true;
//     }
//     if (religion == 'Any' && caste == 'General' && disability.value == 'no'){
//         cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A9A3C313414F8286F\" target=\"_blank\">" + 
//         "Education Concession to the Children Freedom Fighter" + "</a></br>";
//         cell5_display = true;
//     }
//     if (religion == 'Any' && caste == 'General' && disability.value == 'no'){
//         cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ABF4E10E281A07733\" target=\"_blank\">" + 
//         "Jawaharlal Nehru University Scholarship" + "</a></br>";
//         cell5_display = true;
//     }
//     if (religion == 'Any' && caste == 'General' && disability.value == 'no'){
//         cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A581B0F1DB8A46333\" target=\"_blank\">" + 
//         "Assistance to Meritorious Students scholarship - Senior Level" + "</a></br>";
//         cell5_display = true;
//     }
//     if (religion == 'Any' && caste == 'General' && disability.value == 'no'){
//         cell6.innerHTML = cell6.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD7C4C238FF7FAB33\" target=\"_blank\">" + 
//         "Dr. Punjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (DHE)" + "</a></br>";
//         cell5_display = true;
//     }
//     if(cell5_display == false){
//         cell5.innerHTML = "";
//     }
// //------------------------------------------------------------------------------------------------------------------------------------------

//     var row7 = table.insertRow(6);
//     var cell7 = row7.insertCell(0);
//     cell7.innerHTML = "Directorate of Technical Education" + "</br>";
//     var cell7_display = false;

//     var row8 = table.insertRow(7);
//     var cell8 = row8.insertCell(0);
//     if (religion == 'Any' && annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//         cell8.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA54D7A32E4C3B30A\" target=\"_blank\">" + 
//         "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
//         cell7_display = true;
//     }
//     if (religion == 'Any' && annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
//         cell8.innerHTML = cell8.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA54D7A32E4C3B30A\" target=\"_blank\">" + 
//         "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
//         cell7_display = true;
//     }
//     if (religion == 'Any' && annualincome <= '' && caste == 'General' && disability.value == 'no'){
//         cell8.innerHTML = cell8.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1DB822FC15D61FEA\" target=\"_blank\">" + 
//         "Dr Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna(DTE)" + "</a></br>";
//         cell7_display = true;
//     }
//     if (religion == 'Any' && annualincome <= '' && caste == 'SEBC' && disability.value == 'no'){
//         cell8.innerHTML = cell8.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1DB822FC15D61FEA\" target=\"_blank\">" + 
//         "Dr Panjabrao Deshmukh Vastigruh Nirvah Bhatta Yojna(DTE)" + "</a></br>";
//         cell7_display = true;
//     }
//     if(cell7_display == false){
//         cell7.innerHTML = "";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var row9 = table.insertRow(8);
//     var cell9 = row9.insertCell(0);
//     cell9.innerHTML = "School Education and Sports Department" + "</br>";
//     var cell9_display = false;

//     var row10 = table.insertRow(9);
//     var cell10 = row10.insertCell(0);
//     if (religion == 'Any' && disability.value == 'no'){
//         cell10.innerHTML = "<a style=\"color:blue\" href=\" \" target=\"_blank\">" + 
//         "Open Merit Scholarships in Junior College" + "</a></br>";
//         cell9_display = true;
//     }
//     if (religion == 'Any' && disability.value == 'no'){
//         cell10.innerHTML = cell10.innerHTML + "<a style=\"color:blue\" href=\" \" target=\"_blank\">" + 
//         "Merit Scholarships for Economically Backward Class Students" + "</a></br>";
//         cell9_display = true;
//     }
//     if(cell9_display == false){
//         cell9.innerHTML = "";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var row11 = table.insertRow(0);
//     var cell11 = row11.insertCell(0);
//     cell11.innerHTML = "OBC, SEBC, VJNT & SBC Welfare Department" + "</br>";
//     var cell11_display = false;

//     var row12 = table.insertRow(0);
//     var cell12 = row12.insertCell(0);
//     if (religion == 'Any' && annualincome <= '150000' && caste == 'VJNT' && disability.value == 'no'){
//         cell12.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD0CCA04E9F6D7EE4\" target=\"_blank\">" + 
//         "Post Matric Scholarship to VJNT Students" + "</a></br>";
//         cell11_display = true;
//     }
//     if (religion == 'Any' && annualincome <= '800000' && caste == 'VJNT' && disability.value == 'no'){
//         cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AF84D5DECD4CA9AB5\" target=\"_blank\">" + 
//         "Tuition Fees and Examination Fees to VJNT Students" + "</a></br>";
//         cell11_display = true;
//     }
//     if (religion == 'Any' && annualincome <= '100000' && caste == 'VJNT' && disability.value == 'no'){
//         cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A66AC4BAB6E4DB665\" target=\"_blank\">" + 
//         "Payment of Maintenance Allowance to VJNT and SBC Students Studying in Professional Courses and Living in Hostel Attached to Professional Colleges" + "</a></br>";
//         cell11_display = true;
//     }
//     if (religion == 'Any' && annualincome <= '100000' && caste == 'SBC' && disability.value == 'no'){
//         cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A66AC4BAB6E4DB665\" target=\"_blank\">" + 
//         "Payment of Maintenance Allowance to VJNT and SBC Students Studying in Professional Courses and Living in Hostel Attached to Professional Colleges" + "</a></br>";
//         cell11_display = true;
//     }
//     if (religion == 'Any' && caste == 'VJNT' && disability.value == 'no'){
//         cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AAB0ACBF92AD2F649\" target=\"_blank\">" + 
//         "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship for students studying in 11th & 12th standard of VJNT & SBC category" + "</a></br>";
//         cell11_display = true;
//     }
//     if (religion == 'Any' && caste == 'SBC' && disability.value == 'no'){
//         cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AAB0ACBF92AD2F649\" target=\"_blank\">" + 
//         "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship for students studying in 11th & 12th standard of VJNT & SBC category" + "</a></br>";
//         cell11_display = true;
//     }
//     if (religion != 'Buddhist' && annualincome <= '150000' && caste == 'OBC' && disability.value == 'no'){
//         cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\" https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC54E5F6E794BD5C1" target=\"_blank\">" + 
//         "Post Matric Scholarship to OBC Students" + "</a></br>";
//         cell11_display = true;
//     }
//     if (religion != 'Buddhist' && annualincome <= '150000' && caste == 'VJNT' && disability.value == 'no'){
//         cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC54E5F6E794BD5C1\" target=\"_blank\">" + 
//         "Post Matric Scholarship to OBC Students" + "</a></br>";
//         cell11_display = true;
//     }
//     if (religion != 'Buddhist' && annualincome <= '150000' && caste == 'SBC' && disability.value == 'no'){
//         cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AC54E5F6E794BD5C1\" target=\"_blank\">" + 
//         "Post Matric Scholarship to OBC Students" + "</a></br>";
//         cell11_display = true;
//     }
//     if (religion != 'Buddhist' && annualincome <= '150000' && caste == 'SBC' && disability.value == 'no'){
//         cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AACF2205FD2FB060A\" target=\"_blank\">" + 
//         "Post Matric Scholarship to SBC Students" + "</a></br>";
//         cell11_display = true;
//     }
//     if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'OBC' && disability.value == 'no'){
//         cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\" \" target=\"_blank\">" + 
//         "Tuition Fees and Examination Fees to OBC Students" + "</a></br>";
//         cell11_display = true;
//     }
//     if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'SBC' && disability.value == 'no'){
//         cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A2406A5294F822FAC\" target=\"_blank\">" + 
//         "Tuition Fees and Examination Fees to SBC Students" + "</a></br>";
//         cell11_display = true;
//     }
//     if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'OBC' && disability.value == 'no'){
//         cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFFD85CFC9534EEE5\" target=\"_blank\">" + 
//         "Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students" + "</a></br>";
//         cell11_display = true;
//     }
//     if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
//         cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFFD85CFC9534EEE5\" target=\"_blank\">" + 
//         "Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students" + "</a></br>";
//         cell11_display = true;
//     }
//     if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'VJNT' && disability.value == 'no'){
//         cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFFD85CFC9534EEE5\" target=\"_blank\">" + 
//         "Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students" + "</a></br>";
//         cell11_display = true;
//     }
//     if (religion != 'Buddhist' && annualincome <= '800000' && caste == 'SBC' && disability.value == 'no'){
//         cell12.innerHTML = cell12.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFFD85CFC9534EEE5\" target=\"_blank\">" + 
//         "Vocational Training Fee reimbursement for the OBC, SEBC, VJNT & SBC Welfare Department students" + "</a></br>";
//         cell11_display = true;
//     }
//     if(cell11_display == false){
//         cell11.innerHTML = "";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var row13 = table.insertRow(0);
//     var cell13 = row13.insertCell(0);
//     cell13.innerHTML = "Directorate of Medical Education and Research" + "</br>";
//     var cell13_display = false;

//     var row14 = table.insertRow(0);
//     var cell14 = row14.insertCell(0);
//     if (religion == 'Any' && annualincome <= '800000' && caste == 'EBC' && disability.value == 'no'){
//         cell14.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ADB3BC6C89611BF9A\" target=\"_blank\">" + 
//         "Rajarshri Chhatrapati Shahu Maharaj Fee Reimbursement Scheme" + "</a></br>";
//         cell13_display = true;
//     }
//     if ( annualincome <= '800000' && disability.value == 'no'){
//         cell14.innerHTML = cell14.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA5337B52CE309785\" target=\"_blank\">" + 
//         "Dr Panjabrao Deshmukh Hostel Maintenance Allowance" + "</a></br>";
//         cell13_display = true;
//     }
//     if (caste == 'OPEN' && disability.value == 'no'){
//         cell14.innerHTML = cell14.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A0789217992448C2E\" target=\"_blank\">" + 
//         "Education Fee reimbursement for open category students affected due to SEBC and EWS reservation in medical and Dental colleges" + "</a></br>";
//         cell13_display = true;
//     }
//     if(cell13_display == false){
//         cell13.innerHTML = "";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var row15 = table.insertRow(0);
//     var cell15 = row15.insertCell(0);
//     cell15.innerHTML = "Minority Development Department" + "</br>";
//     var cell15_display = false;

//     var row16 = table.insertRow(0);
//     var cell16 = row16.insertCell(0);
//     if (annualincome <= '800000' && disability.value == 'no'){
//         cell16.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A78F1DC35C6E48797\" target=\"_blank\">" + 
//         "State Minority Scholarship Part II (DHE)" + "</a></br>";
//         cell15_display = true;
//     }
//     if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//         cell16.innerHTML = cell16.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A10CD9E828AFD9209\" target=\"_blank\">" + 
//         "Scholarship for students of minority communities pursuing Higher and Professional courses(DTE)" + "</a></br>";
//         cell15_display = true;
//     }
//     if (annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//         cell16.innerHTML = cell16.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A61FF7871E24FE19D\" target=\"_blank\">" + 
//         "Scholarship for students of minority communities pursuing Higher and Professional courses(DMER)" + "</a></br>";
//         cell15_display = true;
//     }
//     if(cell15_display == false){
//         cell16.innerHTML = "";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var row17 = table.insertRow(0);
//     var cell17 = row17.insertCell(0);
//     cell17.innerHTML = "Directorate of Art" + "</br>";
//     var cell17_display = false;

//     var row18 = table.insertRow(0);
//     var cell18 = row18.insertCell(0);
//     if (religion == 'Any' && annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//         cell18.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A4CECAB91C2B36920\" target=\"_blank\">" + 
//         "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
//         cell17_display = true;
//     }
//     if (religion == 'Any' && annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//         cell18.innerHTML = cell18.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AFF59C835471DFEAE\" target=\"_blank\">" + 
//         "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (DOA)" + "</a></br>";
//         cell17_display = true;
//     }
//     if(cell17_display == false){
//         cell18.innerHTML = "";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var row19 = table.insertRow(0);
//     var cell19 = row19.insertCell(0);
//     cell19.innerHTML = "Mahatma Phule Krishi Vidyapeeth, Rahuri" + "</br>";
//     var cell19_display = false;

//     var row20 = table.insertRow(0);
//     var cell20 = row20.insertCell(0);
//     if (religion == 'Any' && annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//         cell20.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A50495B1E79CEAF71\" target=\"_blank\">" + 
//         "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
//         cell19_display = true;
//     }
//     if (religion == 'Any' && annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
//         cell20.innerHTML = cell20.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A50495B1E79CEAF71\" target=\"_blank\">" + 
//         "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
//         cell19_display = true;
//     }
//     if (religion == 'Any' && annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//         cell20.innerHTML = cell20.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD36E29BD04FB95F2\" target=\"_blank\">" + 
//         "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (AGR)" + "</a></br>";
//         cell19_display = true;
//     }
//     if (religion == 'Any' && annualincome <= '800000' && caste == 'SEBC' && disability.value == 'no'){
//         cell20.innerHTML = cell20.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AD36E29BD04FB95F2\" target=\"_blank\">" + 
//         "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (AGR)" + "</a></br>";
//         cell19_display = true;
//     }
//     if(cell19_display == false){
//         cell20.innerHTML = "";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var row21 = table.insertRow(0);
//     var cell21 = row21.insertCell(0);
//     cell21.innerHTML = "MAFSU Nagpur" + "</br>";
//     var cell21_display = false;

//     var row22 = table.insertRow(0);
//     var cell22 = row22.insertCell(0);
//     if (religion == 'Any' && annualincome <= '800000' && caste == 'General' && disability.value == 'no'){
//         cell22.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AA804BF8946610BEA\" target=\"_blank\">" + 
//         "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna(EBC)" + "</a></br>";
//         cell21_display = true;
//     }
//     if (religion == 'Any' && annualincome <= '600000' && caste == 'General' && disability.value == 'no'){
//         cell22.innerHTML = cell22.innerHTML + "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51AE5A44C72C454E753\" target=\"_blank\">" + 
//         "Dr. Panjabrao Deshmukh Vasatigruh Nirvah Bhatta Yojna (MAFSU)" + "</a></br>";
//         cell21_display = true;
//     }
//     if(cell21_display == false){
//         cell22.innerHTML = "";
//     }
//     //------------------------------------------------------------------------------------------------------------------------------------------

//     var row23 = table.insertRow(0);
//     var cell23 = row23.insertCell(0);
//     cell23.innerHTML = "Skill Development, Employement And Entrepreneurship Department" + "</br>";
//     var cell23_display = false;

//     var row24 = table.insertRow(0);
//     var cell24 = row24.insertCell(0);
//     if (religion == 'Any' && annualincome <= '800000' && caste == 'OPEN' && disability.value == 'no'){
//         cell24.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A6B32D7E54C4EFF76\" target=\"_blank\">" + 
//         "Vocational Training Fee reimbursement for the students belonging to socially and educationally backward class and Open Category (Economically weaker section) students" + "</a></br>";
//         cell23_display = true;
//     }
//     if (religion == 'Any' && annualincome <= '800000' && caste == 'EWS' && disability.value == 'no'){
//         cell24.innerHTML = "<a style=\"color:blue\" href=\"https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A6B32D7E54C4EFF76\" target=\"_blank\">" + 
//         "Vocational Training Fee reimbursement for the students belonging to socially and educationally backward class and Open Category (Economically weaker section) students" + "</a></br>";
//         cell23_display = true;
//     }
//     if(cell23_display == false){
//         cell24.innerHTML = "";
//     }
