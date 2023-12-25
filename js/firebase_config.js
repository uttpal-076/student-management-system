
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD88JItyGhHO_clXjLwP_FzZnlKrYLz3zQ",
    authDomain: "admission-info-c1981.firebaseapp.com",
    databaseURL: "https://admission-info-c1981-default-rtdb.firebaseio.com",
    projectId: "admission-info-c1981",
    storageBucket: "admission-info-c1981.appspot.com",
    messagingSenderId: "711293301226",
    appId: "1:711293301226:web:a6d176a6305ef54e6d0293"
  };

firebase.initializeApp(firebaseConfig);
database = firebase.database();
var ref = database.ref("QrBaseInfo");

function isExsist_User(){
    var playersRef = ref.child("Users/" + document.forms["signup"]["uname"].value);

    playersRef.on("value", function(snapshot) {
        if(snapshot.val() != null ){
            const error = document.getElementById('small_un');
            error.textContent = "Username already exsist.";
        }
        else
        {
            const error = document.getElementById('small_un');
            error.textContent = "";
            Insert_SignupDetails();
        }
    }, function (error) {
        console.log("Error: " + error.code);
    });
}

function Insert_SignupDetails() {
    var playersRef = ref.child("Users/" + document.forms["signup"]["uname"].value);

    playersRef.set({
        username: document.forms["signup"]["uname"].value,
        email: document.forms["signup"]["email"].value,
        password: document.forms["signup"]["psw"].value,
        r_password: document.forms["signup"]["psw-repeat"].value
     })
     .then(()=>{
        var page_url = "../pages/home.html?log_name=" + document.forms["signup"]["uname"].value;

        document.forms["signup"]['uname'].value = "";
        document.forms["signup"]['email'].value = "";
        document.forms["signup"]['psw'].value = "";
        document.forms["signup"]['psw-repeat'].value = "";

        const text1 = document.getElementById('small_un');
        text1.textContent = "";
        const text2 = document.getElementById('small_em');
        text2.textContent = "";
        const text3 = document.getElementById('small_pa');
        text3.textContent = "";
        const text4 = document.getElementById('small_par');
        text4.textContent = "";
        alert("Signup Successfully!");
        window.location.href = page_url;
    })
    .catch((error)=>{
        alert(error);
    });
}

function Insert_StudentDetails(loged_name) {
    var playersRef = ref.child("User_Details/" + loged_name);
    var selected_gender = document.querySelector('input[type=radio][name=gender]:checked');
    var selected_scholarshipallotted = document.querySelector('input[type=radio][name=scholarshipallotted]:checked');
    
    var selected_governmentscholarship = document.querySelector('input[type=radio][name=governmentscholarship]:checked');
    var gov_sch_name = "";
    if(selected_governmentscholarship.value == "yes"){
        gov_sch_name = document.forms["scholarshipdetails"]["governmentscholarshipname"].value;
    }else{
        gov_sch_name = "";
    }

    var selected_privatescholarship = document.querySelector('input[type=radio][name=privatescholarship]:checked');
    var piv_sch_name = "";
    if(selected_privatescholarship.value == "yes"){
        piv_sch_name = document.forms["scholarshipdetails"]["privatescholarshipname"].value;
    }else{
        piv_sch_name = "";
    }

    var selected_disability = document.querySelector('input[type=radio][name=disability]:checked');

    playersRef.set({
        username: document.forms["personaldetails"]["username"].value,
        mothername: document.forms["personaldetails"]["mothername"].value,
        fathername: document.forms["personaldetails"]["fathername"].value,
        dob:document. forms["personaldetails"]["dob"].value,
        age:document. forms["personaldetails"]["age"].value,
        gender: selected_gender.value,
        religion: document.forms["personaldetails"]["religion"].value,
        email:document. forms["personaldetails"]["email"].value,
        feespaid:document. forms["educationdetails"]["feespaid"].value,
        deg: document.forms["educationdetails"]["deg"].value,
        branch : document.forms["educationdetails"]["branch"].value,
        currentyear: document.forms["educationdetails"]["currentyear"].value,
        passingyear: document.forms["educationdetails"]["passingyear"].value,
        admissiontype: document.forms["educationdetails"]["admissiontype"].value,
        tenthpercentage: document.forms["educationdetails"]["tenthpercentage"].value,
        twelfthpercentage: document.forms["educationdetails"]["twelfthpercentage"].value,
        scholarshipallotted: selected_scholarshipallotted.value,
        governmentscholarship: selected_governmentscholarship.value,
        governmentscholarshipname: gov_sch_name,
        privatescholarship: selected_privatescholarship.value,
        privatescholarshipname: piv_sch_name,
        fatheroccupation: document.forms["scholarshipdetails"]["fatheroccupation"].value,
        annualincome: document.forms["scholarshipdetails"]["annualincome"].value,
        caste: document.forms["scholarshipdetails"]["caste"].value,
        disability: selected_disability.value
     })
     .then(()=>{
        //---------- Generate QR Code------------------------------------
        generate();

        document.forms["personaldetails"]["username"].value = "";
        document.forms["personaldetails"]["mothername"].value = "";
        document.forms["personaldetails"]["fathername"].value = "";
        document.forms["personaldetails"]["dob"].value = "";
        document.forms["personaldetails"]["age"].value = "";

        let radio_male = document.getElementById("male");
        radio_male.checked = false;
        let radio_female = document.getElementById("female");
        radio_female.checked = false;
        
        document.forms["personaldetails"]["email"].value = "";
        document.forms["educationdetails"]["feespaid"].value = "";
        document.forms["educationdetails"]["deg"].value = "";
        document.forms["educationdetails"]["branch"].value = "";
        document.forms["educationdetails"]["currentyear"].value = "";
        document.forms["educationdetails"]["passingyear"].value = "";
        document.forms["educationdetails"]["admissiontype"].value = "";
        document.forms["educationdetails"]["tenthpercentage"].value = "";
        document.forms["educationdetails"]["twelfthpercentage"].value = "";

        let radio_schyes = document.getElementById("scholarshipallotted_yes");
        radio_schyes.checked = false;
        let radio_schno = document.getElementById("scholarshipallotted_no");
        radio_schno.checked = false;

        let radio_govyes = document.getElementById("governmentscholarship_yes");
        radio_govyes.checked = false;
        let radio_govno = document.getElementById("governmentscholarship_no");
        radio_govno.checked = false;
        document.forms["scholarshipdetails"]["governmentscholarshipname"].value = "";

        let radio_pivyes = document.getElementById("privatescholarship_yes");
        radio_pivyes.checked = false;
        let radio_pivno = document.getElementById("privatescholarship_no");
        radio_pivno.checked = false;
        document.forms["scholarshipdetails"]["privatescholarshipname"].value = "";
        
        document.forms["scholarshipdetails"]["fatheroccupation"].value = "";
        document.forms["scholarshipdetails"]["annualincome"].value = "";
        document.forms["personaldetails"]["religion"].value = "";
        document.forms["scholarshipdetails"]["caste"].value = "";

        let radio_disyes = document.getElementById("disability_yes");
        radio_disyes.checked = false;
        let radio_disno = document.getElementById("disability_no");
        radio_disno.checked = false;
       
        const error1 = document.getElementById('small_u');
        error1.textContent = "";
        const error2 = document.getElementById('small_m');
        error2.textContent = "";
        const error3 = document.getElementById('small_f');
        error3.textContent = "";
        const error4 = document.getElementById('small_dob');
        error4.textContent = "";
        const error5 = document.getElementById('small_age');
        error5.textContent = "";
        const error6 = document.getElementById('small_gender');
        error6.textContent = "";
        const error7 = document.getElementById('small_email');
        error7.textContent = "";
        const error8 = document.getElementById('small_feespaid');
        error8.textContent = "";
        const error9 = document.getElementById('small_degree');
        error9.textContent = "";
        const error10 = document.getElementById('small_degree');
        error10.textContent = "";
        const error11 = document.getElementById('small_currentyear');
        error11.textContent = "";
        const error12 = document.getElementById('small_passingyera');
        error12.textContent = "";
        const error14 = document.getElementById('small_admission');
        error14.textContent = "";
        const error15 = document.getElementById('small_10th');
        error15.textContent = "";
        const error16 = document.getElementById('small_12th');
        error16.textContent = "";
		const error17 = document.getElementById('small_scholarship');
        error17.textContent = "";
		const error18 = document.getElementById('small_governmentscholarship');
        error18.textContent = "";
        const error19 = document.getElementById('small_privatescholarship');
        error19.textContent = "";
		const error20 = document.getElementById('small_fatheroccupation');
        error20.textContent = "";
        const error21 = document.getElementById('small_annualincome');
        error21.textContent = "";
        const error22 = document.getElementById('small_religion');
        error22.textContent = "";
        const error23 = document.getElementById('small_caste');
        error23.textContent = "";
        const error24 = document.getElementById('small_disability');
        error24.textContent = "";

        var table = document.getElementById("table_scholarship");
        table.innerHTML = "";   
        
        alert("Details Uploaded Successfully!");
        
    })
    .catch((error)=>{
        alert(error);
    });
}


function Insert_ContactDetails() {
    var playersRef = ref.child("ContactDetails");

    playersRef.push({
        firstname: document.forms["contactdetails"]["firstname"].value,
        lastname: document.forms["contactdetails"]["lastname"].value,
        email_contact: document.forms["contactdetails"]["email_contact"].value,
        message: document.forms["contactdetails"]["message"].value
     })
     .then(()=>{
        document.forms["contactdetails"]["firstname"].value = "";
        document.forms["contactdetails"]["lastname"].value = "";
        document.forms["contactdetails"]["email_contact"].value = "";
        document.forms["contactdetails"]["message"].value = "";

        const text1 = document.getElementById('small_fn');
        text1.textContent = "";
        const text2 = document.getElementById('small_ln');
        text2.textContent = "";
        const text3 = document.getElementById('small_email_contact');
        text3.textContent = "";
        const text4 = document.getElementById('small_message');
        text4.textContent = "";
        
        alert("Contact Uploaded Successfully!");
    })
    .catch((error)=>{
        alert(error);
    });
}

function User_Login(){
    var playersRef = ref.child("Users/" + document.forms["main_login"]["uname_l"].value);
    var page_url = "pages/home.html?log_name=" + document.forms["main_login"]["uname_l"].value;

    playersRef.on("value", function(snapshot) {
        if(snapshot.val() != null ){
            if(snapshot.val().username ==  document.forms["main_login"]["uname_l"].value){
                if(snapshot.val().password ==  document.forms["main_login"]["psw_l"].value){
                    document.forms["main_login"]["uname_l"].value = "";
                    document.forms["main_login"]["psw_l"].value = "";
                    const text1 = document.getElementById('small_uname_login');
                    text1.textContent = "";
                    const text2 = document.getElementById('small_psw_login');
                    text2.textContent = "";
                    window.location.href = page_url;
                }
                else{
                    const error = document.getElementById('small_uname_login');
                    error.textContent = "Password is incorrect.";
                }
            }
            else{
                const error = document.getElementById('small_psw_login');
                error.textContent = "Username is incorrect.";
            }
        }
        else
        {
            const error = document.getElementById('small_psw_login');
            error.textContent = "Username not found.";
        }
    }, function (error) {
        console.log("Error: " + error.code);
    })
}


function show_UserDetails(loged_name){
    var playersRef = ref.child("User_Details/" + loged_name);

    playersRef.on("value", function(snapshot) {
        if(snapshot.val() != null ){
            document.forms["show_personaldetails"]["show_username"].value = snapshot.val().username;
            document.forms["show_personaldetails"]["show_mothername"].value = snapshot.val().mothername;
            document.forms["show_personaldetails"]["show_fathername"].value = snapshot.val().fathername;
            document.forms["show_personaldetails"]["show_dob"].value = snapshot.val().dob;
            document.forms["show_personaldetails"]["show_age"].value = snapshot.val().age;
            if(snapshot.val().gender == "Male"){
                document.forms["show_personaldetails"]["show_male"].checked = true;
            }else{
                document.forms["show_personaldetails"]["show_female"].checked = true;
            }
            document.forms["show_personaldetails"]["show_email"].value = snapshot.val().email;
            document.forms["show_personaldetails"]["show_religion"].value = snapshot.val().religion;
            document.forms["show_educationdetails"]["show_deg"].value = snapshot.val().deg;
            document.forms["show_educationdetails"]["show_branch"].value = snapshot.val().branch;
            document.forms["show_educationdetails"]["show_currentyear"].value = snapshot.val().currentyear;
            document.forms["show_educationdetails"]["show_passingyear"].value = snapshot.val().passingyear;
            document.forms["show_educationdetails"]["show_admissiontype"].value = snapshot.val().admissiontype;
            document.forms["show_educationdetails"]["show_tenthpercentage"].value = snapshot.val().tenthpercentage;
            document.forms["show_educationdetails"]["show_twelfthpercentage"].value = snapshot.val().twelfthpercentage;
            document.forms["show_educationdetails"]["show_feespaid"].value = snapshot.val().feespaid;
            if(snapshot.val().scholarshipallotted == "yes"){
                document.forms["show_scholarshipdetails"]["show_scholarshipallotted_yes"].checked = true;
            }else{
                document.forms["show_scholarshipdetails"]["show_scholarshipallotted_no"].checked = true;
            }

            if(snapshot.val().governmentscholarship == "yes"){
                document.forms["show_scholarshipdetails"]["show_governmentscholarship_yes"].checked = true;
                document.getElementById("show_governmentscholarship_name").style.display = "block";
                document.forms["show_scholarshipdetails"]["show_governmentscholarshipname"].value = snapshot.val().governmentscholarshipname;
            }else{
                document.forms["show_scholarshipdetails"]["show_governmentscholarship_no"].checked = true;
                document.getElementById("show_governmentscholarship_name").style.display = "none";
            }

            if(snapshot.val().privatescholarship == "yes"){
                document.forms["show_scholarshipdetails"]["show_privatescholarship_yes"].checked = true;
                document.getElementById("show_privatescholarship_name").style.display = "block";
                document.forms["show_scholarshipdetails"]["show_privatescholarshipname"].value = snapshot.val().privatescholarshipname;
            }else{
                document.forms["show_scholarshipdetails"]["show_privatescholarship_no"].checked = true;
                document.getElementById("show_privatescholarship_name").style.display = "none";
            }
            document.forms["show_scholarshipdetails"]["show_fatheroccupation"].value = snapshot.val().fatheroccupation;
            document.forms["show_scholarshipdetails"]["show_annualincome"].value = snapshot.val().annualincome;
            document.forms["show_scholarshipdetails"]["show_caste"].value = snapshot.val().caste;
            if(snapshot.val().scholarshipallotted == "yes"){
                document.forms["show_scholarshipdetails"]["show_disability_yes"].checked = true;
            }else{
                document.forms["show_scholarshipdetails"]["show_disability_no"].checked = true;
            }

            Show_Select_Scholarship();
        }
    }, function (error) {
        console.log("Error: " + error.code);
    });
}

function home_UserDetails(loged_name){
    var playersRef = ref.child("User_Details/" + loged_name);

    playersRef.on("value", function(snapshot) {
        if(snapshot.val() != null ){
            document.forms["personaldetails"]["username"].value = snapshot.val().username;
            document.forms["personaldetails"]["mothername"].value = snapshot.val().mothername;
            document.forms["personaldetails"]["fathername"].value = snapshot.val().fathername;
            document.forms["personaldetails"]["dob"].value = snapshot.val().dob;
            document.forms["personaldetails"]["age"].value = snapshot.val().age;
            if(snapshot.val().gender == "Male"){
                document.forms["personaldetails"]["male"].checked = true;
            }else{
                document.forms["personaldetails"]["female"].checked = true;
            }
            document.forms["personaldetails"]["religion"].value = snapshot.val().religion;
            document.forms["personaldetails"]["email"].value = snapshot.val().email;
            document.forms["educationdetails"]["feespaid"].value = snapshot.val().feespaid;
            document.forms["educationdetails"]["deg"].value = snapshot.val().deg;
            document.forms["educationdetails"]["branch"].value = snapshot.val().branch;
            document.forms["educationdetails"]["currentyear"].value = snapshot.val().currentyear;
            document.forms["educationdetails"]["passingyear"].value = snapshot.val().passingyear;
            document.forms["educationdetails"]["admissiontype"].value = snapshot.val().admissiontype;
            document.forms["educationdetails"]["tenthpercentage"].value = snapshot.val().tenthpercentage;
            document.forms["educationdetails"]["twelfthpercentage"].value = snapshot.val().twelfthpercentage;
            if(snapshot.val().scholarshipallotted == "yes"){
                document.forms["scholarshipdetails"]["scholarshipallotted_yes"].checked = true;
            }else{
                document.forms["scholarshipdetails"]["scholarshipallotted_no"].checked = true;
            }

            if(snapshot.val().governmentscholarship == "yes"){
                document.forms["scholarshipdetails"]["governmentscholarship_yes"].checked = true;
                document.getElementById("governmentscholarship_name").style.display = "block";
                document.forms["scholarshipdetails"]["governmentscholarshipname"].value = snapshot.val().governmentscholarshipname;
            }else{
                document.forms["scholarshipdetails"]["governmentscholarship_no"].checked = true;
                document.getElementById("governmentscholarship_name").style.display = "none";
            }

            if(snapshot.val().privatescholarship == "yes"){
                document.forms["scholarshipdetails"]["privatescholarship_yes"].checked = true;
                document.getElementById("privatescholarship_name").style.display = "block";
                document.forms["scholarshipdetails"]["privatescholarshipname"].value = snapshot.val().privatescholarshipname;
            }else{
                document.forms["scholarshipdetails"]["privatescholarship_no"].checked = true;
                document.getElementById("privatescholarship_name").style.display = "none";
            }
            document.forms["scholarshipdetails"]["fatheroccupation"].value = snapshot.val().fatheroccupation;
            document.forms["scholarshipdetails"]["annualincome"].value = snapshot.val().annualincome;
            document.forms["scholarshipdetails"]["caste"].value = snapshot.val().caste;
            if(snapshot.val().disability == "yes"){
                document.forms["scholarshipdetails"]["disability_yes"].checked = true;
            }else{
                document.forms["scholarshipdetails"]["disability_no"].checked = true;
            }

            Select_Scholarship();
        }
    }, function (error) {
        console.log("Error: " + error.code);
    });
}