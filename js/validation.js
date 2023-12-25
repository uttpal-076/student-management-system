
// ------------Signup Details Valadation--------------------------------
const checkUsername_signup  = () => {
    let valid = false;
    let x = document.forms["signup"]["uname"].value;
    if (x == '') {
        const error = document.getElementById('small_un');
        error.textContent = "Username cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_un');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkEmail_signup  = () => {
    let valid = false;
    let x = document.forms["signup"]["email"].value;
    if (x == '') {
        const error = document.getElementById('small_em');
        error.textContent = "Email cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_em');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkPassword_signup  = () => {
    let valid = false;
    let x = document.forms["signup"]["psw"].value;
    if (x == '') {
        const error = document.getElementById('small_pa');
        error.textContent = "Password cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_pa');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkRepeatPassword_signup  = () => {
    let valid = false;
    let x = document.forms["signup"]["psw-repeat"].value;
    if (x == '') {
        const error = document.getElementById('small_par');
        error.textContent = "Repeat Password cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_par');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkPassword_RepeatPassword_signup  = () => {
    let valid = false;
    let text1 = document.forms["signup"]["psw"].value;
    let text2 = document.forms["signup"]["psw-repeat"].value;
    let x = text1.localeCompare(text2);

    if (text1 != '' && text2 !='') {
        if (x != 0) {
            const error = document.getElementById('small_par');
            error.textContent = "Password & Repeat Password are not same.";
        } 
        else {
            const error = document.getElementById('small_par');
            error.textContent = "";
            valid = true;
        }
    }
    return valid;
};

function Submits_Signup(){
    event.preventDefault();
    let isUsername_signup = checkUsername_signup();
    let isEmail_signup = checkEmail_signup();
    let isPassword_signup = checkPassword_signup();
    let isRepeatPassword_signup = checkRepeatPassword_signup();
    let isPassword_RepeatPassword_signup = checkPassword_RepeatPassword_signup();

    let isFormValid = isUsername_signup && isEmail_signup && isPassword_signup && isRepeatPassword_signup && isPassword_RepeatPassword_signup;

    // submit to the server if the form is valid
    if (isFormValid) {
        isExsist_User();
    }
}


// ------------Student Details Valadation--------------------------------
const checkUsername  = () => {
    let valid = false;
    let x = document.forms["personaldetails"]["username"].value;
    if (x == '') {
        const error = document.getElementById('small_u');
        error.textContent = "Name cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_u');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkMothername  = () => {
    let valid = false;
    let x = document.forms["personaldetails"]["mothername"].value;
    if (x == '') {
        const error = document.getElementById('small_m');
        error.textContent = "Mother name cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_m');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkFathername = () => {
    let valid = false;
    let x = document.forms["personaldetails"]["fathername"].value;
    if (x == '') {
        const error = document.getElementById('small_f');
        error.textContent = "Father name cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_f');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkDob = () => {
    let valid = false;
    let x = document.forms["personaldetails"]["dob"].value;
    if (x == '') {
        const error = document.getElementById('small_dob');
        error.textContent = "Date of birth cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_dob');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkAge = () => {
    let valid = false;
    let x = document.forms["personaldetails"]["age"].value;
    if (x == '') {
        const error = document.getElementById('small_age');
        error.textContent = "Age cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_age');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkGender = () => {
    let valid = false;
    let x = '';

    var ele = document.getElementsByName('gender');
 
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            x = ele[i].value;
    }

    if (x == '') {
        const error = document.getElementById('small_gender');
        error.textContent = "Select a gender.";
    } 
    else {
        const error = document.getElementById('small_gender');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    let x = document.forms["personaldetails"]["email"].value;
    if (x == '') {
        const error = document.getElementById('small_email');
        error.textContent = "Email cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_email');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkReligion = () => {
    let valid = false;
    let x = document.forms["personaldetails"]["religion"].value;
    if (x == 'Select Religion') {
        const error = document.getElementById('small_religion');
        error.textContent = "Religion cannot be blank.";
    }
    else {
        const error = document.getElementById('small_religion');
        valid = true;
    }
    return valid;
};

const checkFeespaid = () => {
    let valid = false;
    let x = document.forms["educationdetails"]["feespaid"].value;
    if (x == '') {
        const error = document.getElementById('small_feespaid');
        error.textContent = "Fees paid cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_feespaid');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkDegree = () => {
    let valid = false;
    let x = document.forms["educationdetails"]["deg"].value;
    if (x == 'Select Degree') {
        const error = document.getElementById('small_degree');
        error.textContent = "Please select a degree.";
    } 
    else {
        const error = document.getElementById('small_degree');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkBranch = () => {
    let valid = false;
    let x = document.forms["educationdetails"]["branch"].value;
    if (x == 'Select Branch') {
        const error = document.getElementById('small_branch');
        error.textContent = "Please select a branch.";
    } 
    else {
        const error = document.getElementById('small_branch');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkCurrentyear = () => {
    let valid = false;
    let x = document.forms["educationdetails"]["currentyear"].value;
    if (x == 'Select Year') {
        const error = document.getElementById('small_currentyear');
        error.textContent = "Please select a year.";
    } 
    else {
        const error = document.getElementById('small_currentyear');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkPassingyear = () => {
    let valid = false;
    let x = document.forms["educationdetails"]["passingyear"].value;
    if (x == '') {
        const error = document.getElementById('small_passingyera');
        error.textContent = "Passing year cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_passingyera');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkAdmissiontype = () => {
    let valid = false;
    let x = document.forms["educationdetails"]["admissiontype"].value;
    if (x == 'Select Admission Type') {
        const error = document.getElementById('small_admission');
        error.textContent = "Please select a admission type.";
    } 
    else {
        const error = document.getElementById('small_admission');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkTenthpercentage = () => {
    let valid = false;
    let x = document.forms["educationdetails"]["tenthpercentage"].value;
    if (x == '') {
        const error = document.getElementById('small_10th');
        error.textContent = "10th percentage cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_10th');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkTwelfthpercentage = () => {
    let valid = false;
    let x = document.forms["educationdetails"]["twelfthpercentage"].value;
    if (x == '') {
        const error = document.getElementById('small_12th');
        error.textContent = "12th percentage cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_12th');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkScholarshipallotted = () => {
    let valid = false;
    let x = '';

    var ele = document.getElementsByName('scholarshipallotted');
 
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            x = ele[i].value;
    }

    if (x == '') {
        const error = document.getElementById('small_scholarship');
        error.textContent = "Select Yes/No for scholarship allotted.";
    } 
    else {
        const error = document.getElementById('small_scholarship');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkGovernmentscholarship = () => {
    let valid = false;
    let x = '';

    var ele = document.getElementsByName('governmentscholarship');
 
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            x = ele[i].value;
    }

    if (x == '') {
        const error = document.getElementById('small_governmentscholarship');
        error.textContent = "Select Yes/No for government scholarship.";
    } 
    else {
        const error = document.getElementById('small_governmentscholarship');
        error.textContent = "";
        valid = true;
    }
    return valid;
};


const checkPrivatescholarship = () => {
    let valid = false;
    let x = '';

    var ele = document.getElementsByName('privatescholarship');
 
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            x = ele[i].value;
    }

    if (x == '') {
        const error = document.getElementById('small_privatescholarship');
        error.textContent = "Select Yes/No for government scholarship.";
    } 
    else {
        const error = document.getElementById('small_privatescholarship');
        error.textContent = "";
        valid = true;
    }
    return valid;
};


const checkFatheroccupation = () => {
    let valid = false;
    let x = document.forms["scholarshipdetails"]["fatheroccupation"].value;
    if (x == '') {
        const error = document.getElementById('small_fatheroccupation');
        error.textContent = "Father's occupation cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_fatheroccupation');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkAnnualincome = () => {
    let valid = false;
    let x = document.forms["scholarshipdetails"]["annualincome"].value;
    if (x == '') {
        const error = document.getElementById('small_annualincome');
        error.textContent = "Annual income cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_annualincome');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkCaste = () => {
    let valid = false;
    let x = document.forms["scholarshipdetails"]["caste"].value;
    if (x == 'Select Cast') {
        const error = document.getElementById('small_caste');
        error.textContent = "Caste cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_caste');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkdisability = () => {
    let valid = false;
    let x = '';

    var ele = document.getElementsByName('disability');
 
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            x = ele[i].value;
    }

    if (x == '') {
        const error = document.getElementById('small_disability');
        error.textContent = "Select Yes/No for disability.";
    } 
    else {
        const error = document.getElementById('small_disability');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

function Submits(){
    let isUsernameValid = checkUsername();
    let isMothername = checkMothername();
    let isFathername = checkFathername();
    let isDob = checkDob();
    let isAge = checkAge();
    let isGender = checkGender();
    let isEmail = checkEmail();
    let isFeespaid = checkFeespaid();
    let isDegree = checkDegree();
    let isBranch = checkBranch();
    let isCurrentyear = checkCurrentyear();
    let isPassingyear = checkPassingyear();
    let isAdmissiontype = checkAdmissiontype();
    let isTenthpercentage = checkTenthpercentage();
    let isTwelfthpercentage = checkTwelfthpercentage();
    let isScholarshipallotted = checkScholarshipallotted();
    let isGovernmentscholarship = checkGovernmentscholarship();
    let isPrivatescholarship = checkPrivatescholarship();
    let isFatheroccupation = checkFatheroccupation();
    let isAnnualincome = checkAnnualincome();
    let isReligion = checkReligion();
    let isCaste = checkCaste();
    let isdisability = checkdisability();

    let isFormValid = isUsernameValid && isMothername && isFathername && isDob;
                        isAge && isGender && isEmail && isFeespaid && isDegree && isBranch
                        isCurrentyear && isPassingyear && isAdmissiontype;
                        isTenthpercentage && isTwelfthpercentage && isScholarshipallotted && isPrivatescholarship;
                        isGovernmentscholarship && isFatheroccupation && isAnnualincome && isReligion && isCaste && isdisability;

    // submit to the server if the form is valid
    if (isFormValid) {
        Insert_StudentDetails(document.getElementById('user_name').textContent);
    }
}


//------------Contact Details Valadation--------------------------------
const checkFirstname  = () => {
    let valid = false;
    let x = document.forms["contactdetails"]["firstname"].value;
    if (x == '') {
        const error = document.getElementById('small_fn');
        error.textContent = "First Name cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_fn');
        error.textContent = "";
        valid = true;
    }
    return valid;
};


const checkLastname  = () => {
    let valid = false;
    let x = document.forms["contactdetails"]["lastname"].value;
    if (x == '') {
        const error = document.getElementById('small_ln');
        error.textContent = "Last name cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_ln');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkEmail_contact  = () => {
    let valid = false;
    let x = document.forms["contactdetails"]["email_contact"].value;
    if (x == '') {
        const error = document.getElementById('small_email_contact');
        error.textContent = "Email cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_email_contact');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkmessage_contact  = () => {
    let valid = false;
    let x = document.forms["contactdetails"]["message"].value;
    if (x == '') {
        const error = document.getElementById('small_message');
        error.textContent = "Message cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_message');
        error.textContent = "";
        valid = true;
    }
    return valid;
};


function Submits_Contact(){

    let isFirstname = checkFirstname();
    let isLastname = checkLastname();
    let isEmail_contact = checkEmail_contact();
    let ismessage_contact = checkmessage_contact();

    let isFormValid = isFirstname && isLastname && isEmail_contact && ismessage_contact;

    // submit to the server if the form is valid
    if (isFormValid) {
        Insert_ContactDetails();
    }
}


//------------Contact Details Valadation--------------------------------
const checkUsername_Login  = () => {
    let valid = false;
    let x = document.forms["main_login"]["uname_l"].value;

    if (x == '') {
        const error = document.getElementById('small_uname_login');
        error.textContent = "Username cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_uname_login');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

const checkPassword_Login  = () => {
    let valid = false;
    let x = document.forms["main_login"]["psw_l"].value;
    if (x == '') {
        const error = document.getElementById('small_psw_login');
        error.textContent = "Password cannot be blank.";
    } 
    else {
        const error = document.getElementById('small_psw_login');
        error.textContent = "";
        valid = true;
    }
    return valid;
};

function Login_u(){
    event.preventDefault();
    let isUsername_Login = checkUsername_Login();
    let isPassword_Login = checkPassword_Login();

    let isFormValid = isUsername_Login && isPassword_Login;

    // submit to the server if the form is valid
    if (isFormValid) {
        User_Login();
    }
}

//------------Other Functions--------------------------------
function Show_GovernmentScholarshipName() {
    document.getElementById("governmentscholarship_name").style.display = "block";
}

function Hide_GovernmentScholarshipName() {
    document.getElementById("governmentscholarship_name").style.display = "none";
}

function Show_PrivateScholarshipName() {
    document.getElementById("privatescholarship_name").style.display = "block";
}

function Hide_PrivateScholarshipName() {
    document.getElementById("privatescholarship_name").style.display = "none";
}

function HideFields(){
    document.getElementById("governmentscholarship_name").style.display = "none";
    document.getElementById("privatescholarship_name").style.display = "none";
    document.getElementById("download").style.display = "none";
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getUrlVars(){
    var user_name_log = getParameterByName('log_name');
    const text = document.getElementById('user_name');
    text.textContent = user_name_log;
}

function ShowSaved_UserDetails(){
    var user_name_log = getParameterByName('log_name');
    home_UserDetails(user_name_log);
}

function Show_QR_Code_UserDetails(){
    var user_name_log = getParameterByName('log_name');
    show_UserDetails(user_name_log);
}