function displayHello() {
  var Department = document.getElementById("Department").value;
  var Section = document.getElementById("Section").value;
  var wrapper2 = document.getElementById("wrapper2");

  if (Department && Section) {
      wrapper2.innerHTML = '';
    
    
      var iframe = document.createElement("iframe");
      iframe.src = "teachercheckbox.html";
      iframe.width = "100%"; 
      iframe.height = "100%"; 
      iframe.border = 0;
      wrapper2.appendChild(iframe);
  } else {
      alert("Please enter both department and section.");
  }
}

function confirmLogout() {
  if (confirm("Make sure to submit things brfore logging off")) {
      window.location.href = "teacherlogin.html"; 
  }
}