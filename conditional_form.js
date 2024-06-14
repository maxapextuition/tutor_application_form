var currentStept = 0;
var stepst = document.getElementsByClassName('stept');
var progressBar = document.querySelector('.progres-bar-t');

function showStept(steptIndex) {
  for (var i = 0; i < stepst.length; i++) {
    if (i === steptIndex) {
      stepst[i].classList.add('activet');
    } else {
      stepst[i].classList.remove('activet');
    }
  }
  
  var progress = ((steptIndex + 1) / stepst.length) * 100;
  progressBar.style.width = progress + '%';
}

function nextStept() {  
if (currentStept === 1) {
var isValid = tvalidateStep2();
if (!isValid) {
  return;
}
} 
else if (currentStept === 2) {
var isValid = tvalidateStep3();
if (!isValid) {
  return;
}
} 

else if (currentStept === 3) {
var isValid = ttvalidateStep4();
if (!isValid) {
  return;
}
} 

else if (currentStept === 4) {
var isValid = tvalidateStep5();
if (!isValid) {
  return;
}
} 


if (currentStept < stepst.length - 1) {
currentStept++;
showStept(currentStept);
}
}

function previousStept() {
  if (currentStept > 0) {
    currentStept--;
    showStept(currentStept);
  }
}

showStept(currentStept);
</script>

  <script>
     
    
    const checkboxContainers = document.querySelectorAll('.w-checkbox.checkbox-field-3');
    
    checkboxContainers.forEach(function(container) {
      const checkbox = container.querySelector('input[type="checkbox"]');
      const label = container.querySelector('.checkbox-label');
    
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          container.style.backgroundColor = '#CCFFD7';
          container.style.borderColor = '#82e3af';
          label.style.color = '#000';
        } else {
          container.style.backgroundColor = '#09f';
          container.style.borderColor = '#09f';
          label.style.color = '#fff';
        }
      });
    });
    

</script>

<script>
function filterFormData(formData) {
  const filteredData = {};

  for (const [fieldName, fieldValue] of Object.entries(formData)) {
    if (fieldValue && fieldValue !== "false") {
      filteredData[fieldName] = fieldValue;
    }
  }

  return filteredData;
}
</script>
<script>

var highschoolcertificate = document.getElementById('highschoolcertificate'); 
var tqualification = document.getElementById('tqualification'); 
var OtherQualificationdiv = document.getElementById('OtherQualificationdiv');
var vceSubjects = document.getElementById('vceSubjects');
var ibSubjects = document.getElementById('ibSubjects');
var hscSubjects = document.getElementById('hscSubjects');
var qceSubjects = document.getElementById('qceSubjects');
var saceSubjects = document.getElementById('saceSubjects');
var waceSubjects = document.getElementById('waceSubjects');
var othersubjects = document.getElementById('othersubjects');  
var vceSelectedSubjectsTable = document.getElementById('vceSelectedSubjectsTable');   
var ibSelectedSubjectsTable = document.getElementById('ibSelectedSubjectsTable');
var hscSelectedSubjectsTable = document.getElementById('hscSelectedSubjectsTable');
var qceSelectedSubjectsTable = document.getElementById('qceSelectedSubjectsTable');
var saceSelectedSubjectsTable = document.getElementById('saceSelectedSubjectsTable');
var waceSelectedSubjectsTable = document.getElementById('waceSelectedSubjectsTable');
var howdidyouhearaboutapeex = document.getElementById('How-did-you-hear-about-Apex');
var howyouhearrefreldiv = document.getElementById('howyouhearrefreldiv');
var howyouhearotherdiv = document.getElementById('howyouhearotherdiv');
var doyouhavewwccno = document.getElementById('doyouhavewwccno');
var doyouhavewwccradiono = document.getElementById('No');
var doyouhavewwccradioyes = document.getElementById('Yes-2');
var doyouhavewwccradionot = document.getElementById('No-but-willing-to-apply-2');


tqualification.addEventListener('change', function() {
if (tqualification.value === 'Other') {
 OtherQualificationdiv.style.display = 'block';
}  else {
 OtherQualificationdiv.style.display = 'none';
}
 });

// Qual Condtion
highschoolcertificate.addEventListener('change', function() {
    if (highschoolcertificate.value === 'VCE') {
        vceSubjects.style.display = 'block';
        vceSelectedSubjectsTable.style.display = 'block';
        ibSubjects.style.display = 'none';
        ibSelectedSubjectsTable.style.display = 'none';
        hscSubjects.style.display = 'none';
        hscSelectedSubjectsTable.style.display = 'none';
        qceSubjects.style.display = 'none'
        qceSelectedSubjectsTable.style.display = 'none';
        saceSubjects.style.display = 'none'
        saceSelectedSubjectsTable.style.display = 'none';
        waceSubjects.style.display = 'none'
        waceSelectedSubjectsTable.style.display = 'none';
				othersubjects.style.display = 'none';
    } else if (highschoolcertificate.value === 'IB') {
        vceSubjects.style.display = 'none';
        vceSelectedSubjectsTable.style.display = 'none';
        ibSubjects.style.display = 'block';
        ibSelectedSubjectsTable.style.display = 'block';
        hscSubjects.style.display = 'none'; // Hide HSC subjects
        hscSelectedSubjectsTable.style.display = 'none'; // Hide HSC table
        qceSubjects.style.display = 'none'
        qceSelectedSubjectsTable.style.display = 'none';
        saceSubjects.style.display = 'none'
        saceSelectedSubjectsTable.style.display = 'none';
        waceSubjects.style.display = 'none'
        waceSelectedSubjectsTable.style.display = 'none';
        othersubjects.style.display = 'none';
    } else if (highschoolcertificate.value === 'HSC') {
        vceSubjects.style.display = 'none';
        vceSelectedSubjectsTable.style.display = 'none';
        ibSubjects.style.display = 'none';
        ibSelectedSubjectsTable.style.display = 'none';
        hscSubjects.style.display = 'block';
        hscSelectedSubjectsTable.style.display = 'block';
				qceSubjects.style.display = 'none'
        qceSelectedSubjectsTable.style.display = 'none';
        saceSubjects.style.display = 'none'
        saceSelectedSubjectsTable.style.display = 'none';
        waceSubjects.style.display = 'none'
        waceSelectedSubjectsTable.style.display = 'none';
				othersubjects.style.display = 'none';
    } else if (highschoolcertificate.value === 'QCE') {
        vceSubjects.style.display = 'none';
        vceSelectedSubjectsTable.style.display = 'none';
        ibSubjects.style.display = 'none';
        ibSelectedSubjectsTable.style.display = 'none';
        hscSubjects.style.display = 'none';
        hscSelectedSubjectsTable.style.display = 'none';
        othersubjects.style.display = 'none';
        qceSubjects.style.display = 'block'
        qceSelectedSubjectsTable.style.display = 'block';
        saceSubjects.style.display = 'none'
        saceSelectedSubjectsTable.style.display = 'none';
        waceSubjects.style.display = 'none'
        waceSelectedSubjectsTable.style.display = 'none';
        othersubjects.style.display = 'none';
     } else if (highschoolcertificate.value === 'SACE') {
        vceSubjects.style.display = 'none';
        vceSelectedSubjectsTable.style.display = 'none';
        ibSubjects.style.display = 'none';
        ibSelectedSubjectsTable.style.display = 'none';
        hscSubjects.style.display = 'none';
        hscSelectedSubjectsTable.style.display = 'none';
        qceSubjects.style.display = 'none'
        qceSelectedSubjectsTable.style.display = 'none';
        saceSubjects.style.display = 'block'
        saceSelectedSubjectsTable.style.display = 'block';
        waceSubjects.style.display = 'none'
        waceSelectedSubjectsTable.style.display = 'none';
        othersubjects.style.display = 'none';
     } else if (highschoolcertificate.value === 'WACE') {
        vceSubjects.style.display = 'none';
        vceSelectedSubjectsTable.style.display = 'none';
        ibSubjects.style.display = 'none';
        ibSelectedSubjectsTable.style.display = 'none';
        hscSubjects.style.display = 'none';
        hscSelectedSubjectsTable.style.display = 'none';
        qceSubjects.style.display = 'none'
        qceSelectedSubjectsTable.style.display = 'none';
        saceSubjects.style.display = 'none'
        saceSelectedSubjectsTable.style.display = 'none';
        waceSubjects.style.display = 'block'
        waceSelectedSubjectsTable.style.display = 'block';
        othersubjects.style.display = 'none';
    } else if (highschoolcertificate.value === 'Other') {
        vceSubjects.style.display = 'none';
        vceSelectedSubjectsTable.style.display = 'none';
        ibSubjects.style.display = 'none';
        ibSelectedSubjectsTable.style.display = 'none';
        hscSubjects.style.display = 'none';
        hscSelectedSubjectsTable.style.display = 'none';
        qceSubjects.style.display = 'none'
        qceSelectedSubjectsTable.style.display = 'none';
        saceSubjects.style.display = 'none'
        saceSelectedSubjectsTable.style.display = 'none';
        waceSubjects.style.display = 'none'
        waceSelectedSubjectsTable.style.display = 'none';
        othersubjects.style.display = 'block';
    }
});

function toggleSubject(checkbox) {
    var selectedSubjectsBody;
    var subjectName = checkbox.dataset.name;
    var subjectTextOnly = subjectName.replace(/\d+/g, ''); 
    var tableBody;

    if (checkbox.closest("#vceSubjects")) {
        selectedSubjectsBody = document.getElementById("vceSelectedSubjectsBody");
        tableBody = document.getElementById("vceSelectedSubjectsTable");
    } else if (checkbox.closest("#ibSubjects")) {
        selectedSubjectsBody = document.getElementById("ibSelectedSubjectsBody");
        tableBody = document.getElementById("ibSelectedSubjectsTable");
    } else if (checkbox.closest("#hscSubjects")) {
        selectedSubjectsBody = document.getElementById("hscSelectedSubjectsBody");
        tableBody = document.getElementById("hscSelectedSubjectsTable");
    } else if (checkbox.closest("#qceSubjects")) { // New condition
        selectedSubjectsBody = document.getElementById("qceSelectedSubjectsBody");
        tableBody = document.getElementById("qceSelectedSubjectsTable");
    } else if (checkbox.closest("#saceSubjects")) { // New condition
        selectedSubjectsBody = document.getElementById("saceSelectedSubjectsBody");
        tableBody = document.getElementById("saceSelectedSubjectsTable");
    } else if (checkbox.closest("#waceSubjects")) { // New condition
        selectedSubjectsBody = document.getElementById("waceSelectedSubjectsBody");
        tableBody = document.getElementById("waceSelectedSubjectsTable");
    } else {
        return;
    }

if (!checkbox.checked) {
  var rows = selectedSubjectsBody.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (row.firstChild.textContent === subjectTextOnly) {
      row.remove();
      break;
    }
  }
  return; 
}

if (checkbox.checked) {
  var row = document.createElement("tr");
var subjectParagraph = document.createElement("p");
subjectParagraph.textContent = subjectTextOnly; 

      var subjectCell = document.createElement("td");
    subjectCell.appendChild(subjectParagraph);
    row.appendChild(subjectCell);

  var scoreInput = document.createElement("input");
  scoreInput.type = "text";
  scoreInput.name = subjectName + "Score";
  scoreInput.placeholder = "Enter your score";
  scoreInput.classList.add("validatescore");
  var scoreCell = document.createElement("td");
  scoreCell.appendChild(scoreInput);
  row.appendChild(scoreCell);

 if (tableBody === document.getElementById("ibSelectedSubjectsTable")) {
  var yearLevelCell = document.createElement("td");
  var yearLevelLabel = document.createElement("label");

  var slRadio = document.createElement("input");
  slRadio.type = "radio";
  slRadio.name = subjectName + "SubjectLevel";
  slRadio.value = "SL";
  slRadio.dataset.validate = "true"
  yearLevelLabel.appendChild(slRadio);
  yearLevelLabel.appendChild(document.createTextNode("SL"));

  // HL Radio Button
  var hlRadio = document.createElement("input");
  hlRadio.type = "radio";
  hlRadio.name = subjectName + "SubjectLevel";
  hlRadio.value = "HL";
  hlRadio.dataset.validate = "true";
  yearLevelLabel.appendChild(hlRadio);
  yearLevelLabel.appendChild(document.createTextNode("HL"));

  yearLevelCell.appendChild(yearLevelLabel);
  row.appendChild(yearLevelCell);
}

  selectedSubjectsBody.appendChild(row);
}
}


var checkboxes = document.querySelectorAll('#vceSubjects input[type="checkbox"], #ibSubjects input[type="checkbox"], #hscSubjects input[type="checkbox"], #qceSubjects input[type="checkbox"],#saceSubjects input[type="checkbox"],#waceSubjects input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        toggleSubject(this);
    });
});

document.getElementById("vceSubjects").addEventListener("click", function () {
document.getElementById("vceSelectedSubjectsTable").style.display = "block";
document.getElementById("ibSelectedSubjectsTable").style.display = "none";
document.getElementById("hscSelectedSubjectsTable").style.display = "none";
document.getElementById("qceSelectedSubjectsTable").style.display = "none";
document.getElementById("saceSelectedSubjectsTable").style.display = "none";
document.getElementById("waceSelectedSubjectsTable").style.display = "none";
});

document.getElementById("ibSubjects").addEventListener("click", function () {
document.getElementById("vceSelectedSubjectsTable").style.display = "none";
document.getElementById("ibSelectedSubjectsTable").style.display = "block";
document.getElementById("hscSelectedSubjectsTable").style.display = "none";
document.getElementById("qceSelectedSubjectsTable").style.display = "none";
document.getElementById("saceSelectedSubjectsTable").style.display = "none";
document.getElementById("waceSelectedSubjectsTable").style.display = "none";
});

document.getElementById("hscSubjects").addEventListener("click", function () {
document.getElementById("vceSelectedSubjectsTable").style.display = "none";
document.getElementById("ibSelectedSubjectsTable").style.display = "none";
document.getElementById("hscSelectedSubjectsTable").style.display = "block";
document.getElementById("qceSelectedSubjectsTable").style.display = "none";
document.getElementById("saceSelectedSubjectsTable").style.display = "none";
document.getElementById("waceSelectedSubjectsTable").style.display = "none";
});

document.getElementById("qceSubjects").addEventListener("click", function () {
    document.getElementById("vceSelectedSubjectsTable").style.display = "none";
    document.getElementById("ibSelectedSubjectsTable").style.display = "none";
    document.getElementById("hscSelectedSubjectsTable").style.display = "none";
    document.getElementById("qceSelectedSubjectsTable").style.display = "block";
    document.getElementById("saceSelectedSubjectsTable").style.display = "none";
document.getElementById("waceSelectedSubjectsTable").style.display = "none";
});

document.getElementById("saceSubjects").addEventListener("click", function () {
    document.getElementById("vceSelectedSubjectsTable").style.display = "none";
    document.getElementById("ibSelectedSubjectsTable").style.display = "none";
    document.getElementById("hscSelectedSubjectsTable").style.display = "none";
    document.getElementById("qceSelectedSubjectsTable").style.display = "none";
    document.getElementById("saceSelectedSubjectsTable").style.display = "block";
document.getElementById("waceSelectedSubjectsTable").style.display = "none";
});
document.getElementById("waceSubjects").addEventListener("click", function () {
    document.getElementById("vceSelectedSubjectsTable").style.display = "none";
    document.getElementById("ibSelectedSubjectsTable").style.display = "none";
    document.getElementById("hscSelectedSubjectsTable").style.display = "none";
    document.getElementById("qceSelectedSubjectsTable").style.display = "none";
    document.getElementById("saceSelectedSubjectsTable").style.display = "none";
document.getElementById("waceSelectedSubjectsTable").style.display = "block";
});

howdidyouhearaboutapeex.addEventListener('change', function() {
if (howdidyouhearaboutapeex.value === 'Referral') {
 howyouhearrefreldiv.style.display = 'block';
howyouhearotherdiv.style.display = 'none';

} else if (howdidyouhearaboutapeex.value === 'Others') {
 howyouhearotherdiv.style.display = 'block';
 howyouhearrefreldiv.style.display = 'none';
}

else {
 howyouhearotherdiv.style.display = 'none';
 howyouhearrefreldiv.style.display = 'none';
}
});     

doyouhavewwccradiono.addEventListener('change', function() {
if (doyouhavewwccradiono.checked) {
doyouhavewwccno.style.display = 'block';
}  
});


doyouhavewwccradioyes.addEventListener('change', function() {
if (doyouhavewwccradioyes.checked){
 doyouhavewwccno.style.display = 'none';
}
});

doyouhavewwccradionot.addEventListener('change', function() {
if (doyouhavewwccradionot.checked){
doyouhavewwccno.style.display = 'none';
}
});
  </script>
  

 <script>window.onload=function(){var anchors=document.getElementsByTagName('*');for(var i=0;i<anchors.length;i++){var anchor=anchors[i];anchor.onclick=function(){code=this.getAttribute('whenClicked');eval(code)}}}
function tvalidateStep2(){var step5ErrorselectMessage=document.getElementById('step5ErrorselectMessage');var step5ErrorfilloutMessage=document.getElementById('step5ErrorfilloutMessage');var step5ErrorvalidemailMessage=document.getElementById('step5ErrorvalidemailMessage');const OtherQualificationdiv=document.getElementById('OtherQualificationdiv');const howyouhearrefreldiv=document.getElementById('howyouhearrefreldiv');const howyouhearotherdiv=document.getElementById('howyouhearotherdiv');step5ErrorselectMessage.style.display='none';step5ErrorfilloutMessage.style.display='none';step5ErrorvalidemailMessage.style.display='none';var textfield=document.getElementById('Tutor-Name');var textValue=textfield.value.trim();if(textValue===''){step5ErrorfilloutMessage.style.display='block';return!1}
var emailField=document.getElementById('Tutor-Email');var emailValue=emailField.value.trim();if(emailValue===''){step5ErrorfilloutMessage.style.display='block';return!1}else{var emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!emailRegex.test(emailValue)){step5ErrorvalidemailMessage.style.display='block';return!1}}
var phoneField=document.getElementById('Tutor-Mobile');var phoneValue=phoneField.value.trim();if(phoneValue===''){step5ErrorfilloutMessage.style.display='block';return!1}
var highschoolcrtField=document.getElementById('highschoolcertificate');var highschoolcrtValue=highschoolcrtField.value.trim();if(highschoolcrtValue===''){step5ErrorfilloutMessage.style.display='block';return!1}
var highschoolField=document.getElementById('High-School');var highschoolValue=highschoolField.value.trim();if(highschoolValue===''){step5ErrorfilloutMessage.style.display='block';return!1}
var AttarField=document.getElementById('ATAR');var AttarValue=AttarField.value.trim();if(AttarValue===''){step5ErrorfilloutMessage.style.display='block';return!1}
var QualificationField=document.getElementById('University-Degree');var QualificationValue=QualificationField.value.trim();if(QualificationValue===''){step5ErrorfilloutMessage.style.display='block';return!1}
var QualificationField=document.getElementById('SelectGraduatingClass');var QualificationValue=QualificationField.value.trim();if(QualificationValue===''){step5ErrorselectMessage.style.display='block';return!1}
var QualificationField=document.getElementById('tqualification');var QualificationValue=QualificationField.value.trim();if(QualificationValue===''){step5ErrorselectMessage.style.display='block';return!1}
var QualificationField=document.getElementById('How-did-you-hear-about-Apex');var QualificationValue=QualificationField.value.trim();if(QualificationValue===''){step5ErrorselectMessage.style.display='block';return!1}
var textFieldpname=document.getElementById('How-did-you-hear-about-Apex-Other');var isHiddenpnamedivVisible=howyouhearotherdiv.style.display==='block';if(isHiddenpnamedivVisible){var textpnamedValue=textFieldpname.value.trim();if(textpnamedValue===''){step5ErrorfilloutMessage.style.display='block';return!1}}
var textFieldpmobile=document.getElementById('How-did-you-hear-about-Apex-Referral');var isHiddenpmobiledivVisible=howyouhearrefreldiv.style.display==='block';if(isHiddenpmobiledivVisible){var textpmobileValue=textFieldpmobile.value.trim();if(textpmobileValue===''){step5ErrorfilloutMessage.style.display='block';return!1}}
var emailFieldpemail=document.getElementById('Other-Qualification-3');var isHiddenpemaildivVisible=OtherQualificationdiv.style.display==='block';if(isHiddenpemaildivVisible){var textpemailValue=emailFieldpemail.value.trim();if(textpemailValue===''){step5ErrorfilloutMessage.style.display='block';return!1}}
return!0}
function tvalidateStep3(){var errorFileUploadMessage=document.getElementById('step3ErrorfileUploadMessage');errorFileUploadMessage.style.display='none';var fileUploadField=document.getElementById('CV');if(!fileUploadField.files||fileUploadField.files.length===0){errorFileUploadMessage.style.display='block';return!1}
var fileUploadField=document.getElementById('transcript');if(!fileUploadField.files||fileUploadField.files.length===0){errorFileUploadMessage.style.display='block';return!1}
return!0}
function ttvalidateStep4(){var step4ErrorfilloutMessagee=document.getElementById('step4ErrorfilloutMessage');step4ErrorfilloutMessagee.style.display='none';var step4ErrorradioMessagee=document.getElementById('step4ErrorradioMessage');step4ErrorradioMessagee.style.display='none';var farwilling=document.getElementById('How-far-are-you-willing-to-travel-3');var farwillingValue=farwilling.value.trim();if(farwillingValue===''){step4ErrorfilloutMessagee.style.display='block';return!1}
var studentwilling=document.getElementById('Number-of-students');var studentwillingValue=studentwilling.value.trim();if(studentwillingValue===''){step4ErrorfilloutMessagee.style.display='block';return!1}
var tutorsuburb=document.getElementById('Tutor-Suburb');var tutorsuburbValue=farwilling.value.trim();if(farwillingValue===''){step4ErrorfilloutMessagee.style.display='block';return!1}
var wwccyes=document.getElementById('Yes-2');var Nowilling=document.getElementById('No-but-willing-to-apply-2');var nowwcc=document.getElementById('No');if(!wwccyes.checked&&!Nowilling.checked&&!nowwcc.checked){step4ErrorfilloutMessagee.style.display='block';return!1}
var accyes=document.getElementById('Yes');var accno=document.getElementById('No-2');if(!accyes.checked&&!accno.checked){step4ErrorradioMessagee.style.display='block';return!1}
return!0}
function tvalidateStep5() {
  const vceSubjects = document.getElementById('vceSubjects');
  const ibSubjects = document.getElementById('ibSubjects');
  const qceSubjects = document.getElementById('qceSubjects');
  const saceSubjects = document.getElementById('saceSubjects');
  const waceSubjects = document.getElementById('waceSubjects');
  const othersubjects = document.getElementById('othersubjects');
  const tuttorothersubjects = document.getElementById('tuttorothersubjects');
  const ibradio = document.getElementById('ibradio');
  const ibchecbox = document.getElementById('ibchecbox');
  const VceSubjectsscore = document.getElementById('VceSubjectsscore');
  const VceSubjectschecbox = document.getElementById('VceSubjectschecbox');
  
  tuttorothersubjects.style.display = 'none';
  ibradio.style.display = 'none';
  ibchecbox.style.display = 'none';
  VceSubjectsscore.style.display = 'none';
  VceSubjectschecbox.style.display = 'none';
  
  var checkboxes = [];
  if (vceSubjects.style.display === 'block') {
    checkboxes = vceSubjects.querySelectorAll('input[type="checkbox"]');
  } else if (ibSubjects.style.display === 'block') {
    checkboxes = ibSubjects.querySelectorAll('input[type="checkbox"]');
  } else if (qceSubjects.style.display === 'block') {
    checkboxes = qceSubjects.querySelectorAll('input[type="checkbox"]');
  } else if (saceSubjects.style.display === 'block') {
    checkboxes = saceSubjects.querySelectorAll('input[type="checkbox"]');
  } else if (waceSubjects.style.display === 'block') {
    checkboxes = waceSubjects.querySelectorAll('input[type="checkbox"]');
  }
  
  if ((vceSubjects.style.display === 'block' || ibSubjects.style.display === 'block' || qceSubjects.style.display === 'block' || saceSubjects.style.display === 'block' || waceSubjects.style.display === 'block') && checkboxes.length > 0) {
    var isChecked = Array.from(checkboxes).some(function(checkbox) {
      return checkbox.checked;
    });
    if (!isChecked) {
      if (vceSubjects.style.display === 'none' && ibSubjects.style.display === 'none' && qceSubjects.style.display === 'none' && saceSubjects.style.display === 'none' && waceSubjects.style.display === 'none') {
        VceSubjectschecbox.style.display = 'none';
      } else {
        VceSubjectschecbox.style.display = 'block';
      }
      return false;
    }
  }
  
  if (othersubjects.style.display === 'block') {
    const tutorOtherSubjectField = document.getElementById('Tutor-Other-Subject');
    if (tutorOtherSubjectField.value.trim() === '') {
      tuttorothersubjects.style.display = 'block';
      return false;
    }
  }
  
  var subjectvalid = document.querySelectorAll('.validatescore');
  for (var i = 0; i < subjectvalid.length; i++) {
    var inputsubjects = subjectvalid[i];
    if (inputsubjects.value.trim() === '') {
      VceSubjectsscore.style.display = 'block';
      return false;
    }
  }
  
  function isRadioGroupValid(radioGroup) {
    var radioInputs = radioGroup.querySelectorAll('input[type="radio"]');
    return Array.from(radioInputs).some(function(radio) {
      return radio.checked;
    });
  }
  
  var radioGroups = document.querySelectorAll('input[type="radio"][data-validate="true"]');
  var isRadioValid = Array.from(radioGroups).every(function(radio) {
    var groupName = radio.name;
    var group = document.querySelectorAll('input[name="' + groupName + '"]');
    return isRadioGroupValid(group[0].parentNode);
  });
  
  if (!isRadioValid) {
    ibradio.style.display = 'block';
    return false;
  }
  
  return true;
}
