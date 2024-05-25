function setActiveButton(buttonId) {
  
  var buttons = document.querySelectorAll('.button');
  buttons.forEach(function(button) {
    button.classList.remove('active');
  });

  
  var activeButton = document.getElementById(buttonId);
  activeButton.classList.add('active');
}

function loadIframe(iframeSrc) {
  var wrapper2 = document.getElementById("wrapper2");
  
  wrapper2.innerHTML = '';

  var iframe = document.createElement("iframe");
  iframe.src = iframeSrc; 
  iframe.width = "100%"; 
  iframe.height = "100%"; 
  wrapper2.appendChild(iframe);
}

function assignBtn() {
  setActiveButton('assignButton');
  loadIframe('adminstuff.html');
}

function registerbtn() {
  setActiveButton('registerButton');
  loadIframe('adminassign.html');
}

function teacherattendaceBtn() {
  setActiveButton('teacherAttendanceButton');
  loadIframe('admincheckbox.html');
}

function confirmLogout() {
  if (confirm("Make sure to submit things before logging off")) {
    window.location.href = "adminlogin.html";
  }
}
