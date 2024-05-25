let submissionCount = 0;

function submitAttendance() {
    
    var confirmSubmission = confirm("Are you sure you want to submit the attendance? Once submitted, you cannot edit the attendance records.");
    
    if (confirmSubmission) {
        
        var activityLog = {
            timestamp: new Date().toISOString(),
            action: "Attendance submitted",
            submissionCount: submissionCount
        };

        
        saveActivityLog(activityLog);

        if (submissionCount === 0) {
          
            disableColumn('first-column');
        } else if (submissionCount === 1) {
            disableColumn('second-column');
        } else if (submissionCount === 2) {
            disableColumn('third-column');
        } else if (submissionCount === 3) {
            disableColumn('fourth-column');
        } else if (submissionCount === 4) {
            disableColumn('fifth-column');
        } else if (submissionCount === 5) {
            
            disableColumn('sixth-column');
        } else if (submissionCount === 6) {
        
            disableColumn('seventh-column');
        } else if (submissionCount === 7) {
        
            disableColumn('eighth-column');
        } else if (submissionCount === 8) {
            
            disableColumn('ninth-column');
        } else {
            
            disableColumn('tenth-column');
        }
        
        submissionCount++;

        
        document.getElementById('submitbtn').disabled = false;
        
        alert("Attendance submitted successfully!");
    }
}

function disableColumn(columnClass) {
    var checkboxes = document.querySelectorAll(`#attendanceTable input.${columnClass}`);
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].disabled = true;
        checkboxes[i].parentNode.classList.add('grayed-out');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('#attendanceTable input[type="checkbox"]');
    
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {
            this.style.backgroundColor = 'green';
            this.style.borderColor = 'green';
            this.style.boxShadow = '0 0 0 1px green';
        });

        checkbox.addEventListener('dblclick', function() {
            this.style.backgroundColor = 'red';
            this.style.borderColor = 'red';
            this.style.boxShadow = '0 0 0 1px red';
        });
    });
});
