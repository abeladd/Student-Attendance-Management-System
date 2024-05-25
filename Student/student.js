function confirmLogout() {
    if (confirm("Are you sure you want to log off?")) {
        window.location.href = "studentlogin.html"; 
    }
}


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

  function statBtn() {
    setActiveButton('statButton');
    loadIframe('studentstatus.html');
  }