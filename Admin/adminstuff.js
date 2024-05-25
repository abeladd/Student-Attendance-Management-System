document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");

    
    var addButton = document.getElementById("addButton");

    
    addButton.onclick = function() {
        modal.style.display = "block";
    }

    
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    
    var modalAddButton = document.getElementById("modalAddButton");

    
    modalAddButton.onclick = function() {
        var modalTable = document.getElementById("modalTable");
        var modalCheckboxes = modalTable.querySelectorAll("input[type='checkbox']:checked");

        
        modalCheckboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                
                var teacherRow = checkbox.closest("tr");

              
                var teacherName = teacherRow.cells[0].innerText;
                var teacherID = teacherRow.cells[1].innerText;
                var teacherDept = teacherRow.cells[2].innerText;
                var teacherPhone = teacherRow.cells[3].innerText;
                var teacherSection = teacherRow.cells[4].innerText;

                
                var confirmAdd = confirm(`Are you sure you want to add the following teacher?\n\nName: ${teacherName}\nID: ${teacherID}\nDepartment: ${teacherDept}\nPhone: ${teacherPhone}\nSection: ${teacherSection}`);
                if (confirmAdd) {
                    
                    var newTeacherRow = teacherRow.cloneNode(true);

                    
                    document.querySelector("table tbody").appendChild(newTeacherRow);

                    
                    teacherRow.remove();

                    
                    alert(`Teacher ${teacherName} added to the teacher info.`);
                }
            }
        });

        
        modal.style.display = "none";
    };

    
    var removeButton = document.getElementById("removeButton");

    
    removeButton.onclick = function() {
        var mainTable = document.querySelector("table");
        var mainCheckboxes = mainTable.querySelectorAll("input[type='checkbox']:checked");

        if (mainCheckboxes.length === 0) {
            alert("No teachers selected for removal.");
            return;
        }

        
        var selectedTeachers = [];
        mainCheckboxes.forEach(function(checkbox) {
            var row = checkbox.closest("tr");
            var name = row.cells[0].innerText;
            var id = row.cells[1].innerText;
            selectedTeachers.push({ name: name, id: id });
        });

        
        var confirmationMessage = "Are you sure you want to remove the following teachers?\n\n";
        selectedTeachers.forEach(function(teacher) {
            confirmationMessage += `Name: ${teacher.name}, ID: ${teacher.id}\n`;
        });

        
        var confirmRemove = confirm(confirmationMessage);

        if (confirmRemove) {
            
            mainCheckboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    var row = checkbox.closest("tr");
                    var name = row.cells[0].innerText;
                    var id = row.cells[1].innerText;

                    
                    var newTeacherRow = row.cloneNode(true);

                    
                    var modalTable = document.getElementById("modalTable");
                    modalTable.querySelector("tbody").appendChild(newTeacherRow);

                    
                    alert(`Teacher ${name} (ID: ${id}) removed from teacher info and added back to the teacher database.`);
                    
                    
                    row.remove();
                }
            });
        }
    };

    
function populateTeacherDropdown() {
    var teacherDropdown = document.getElementById("teacherDropdown");
    teacherDropdown.innerHTML = ""; 

    
    var mainRows = document.querySelectorAll("table tbody tr");
    mainRows.forEach(function(row) {
        var name = row.cells[0].innerText;
        var id = row.cells[1].innerText;
        var option = document.createElement("option");
        option.value = id;
        option.text = `${name} (${id})`;
        teacherDropdown.appendChild(option);
    });
}


populateTeacherDropdown();


    
    var assignButton = document.getElementById("assignButton");

    
    assignButton.onclick = function() {
        var mainTable = document.querySelector("table");
        var mainRows = mainTable.querySelectorAll("tbody tr");

        if (mainRows.length === 0) {
            alert("No teachers available for assignment.");
            return;
        }

      
        var assignmentDropdown = document.getElementById("teacherDropdown");
        assignmentDropdown.innerHTML = ""; 

        mainRows.forEach(function(row) {
            var name = row.cells[0].innerText;
            var id = row.cells[1].innerText;
            var department = row.cells[2].innerText;

            var option = document.createElement("option");
            option.value = id;
            option.text = `${name} (${id}) - ${department}`;
            assignmentDropdown.appendChild(option);
        });

        
        var assignmentModal = document.getElementById("assignmentModal");
        assignmentModal.style.display = "block";
    };

    
    var assignConfirmBtn = document.getElementById("assignConfirmBtn");

    
    assignConfirmBtn.onclick = function() {
        var assignmentModal = document.getElementById("assignmentModal");
        assignmentModal.style.display = "none";

        
        var assignmentDropdown = document.getElementById("teacherDropdown");
        var selectedTeacherId = assignmentDropdown.value;
        
        console.log("Assigned teacher ID:", selectedTeacherId);

        
        var sectionDropdown = document.getElementById("sectionDropdown");
        var selectedSection = sectionDropdown.value;
        console.log("Selected section:", selectedSection);
    };
});
