let submissionCount = 0;

function submitAttendance() {
    var confirmSubmission = confirm("Are you sure you want to submit the attendance? Once submitted, you cannot edit the attendance records.");

    if (confirmSubmission) {
        const columns = [
            'first-column', 'second-column', 'third-column', 'forth-column',
            'fifth-column', 'sixth-column', 'seventh-column', 'eighth-column',
            'ninth-column', 'tenth-column'
        ];

        if (submissionCount < columns.length) {
            disableColumn(columns[submissionCount]);
            submissionCount++;
        } else {
            alert("All columns have been submitted.");
        }

        alert("Attendance submitted successfully!");
    }
}

function disableColumn(columnClass) {
    var checkboxes = document.querySelectorAll(`#attendanceTable input.${columnClass}`);
    checkboxes.forEach(checkbox => {
        checkbox.disabled = true;
        checkbox.parentNode.classList.add('grayed-out');
    });
}

function addCheckboxEventListeners() {
    var checkboxes = document.querySelectorAll('#attendanceTable input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
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
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('adminstuff.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const teacherTable = doc.getElementById('teacherInfoTable');
            const teacherRows = teacherTable.querySelectorAll('tbody tr');

            const attendanceTableBody = document.querySelector('#attendanceTable tbody');
            attendanceTableBody.innerHTML = '';

            teacherRows.forEach(row => {
                const cells = row.getElementsByTagName('td');
                const teacherName = cells[0].innerText;
                const teacherId = cells[1].innerText;

                const tr = document.createElement('tr');
                const currentDate = new Date().toLocaleDateString();

                tr.innerHTML = `
                    <td>${teacherName}</td>
                    <td>${teacherId}</td>
                    <td><input type="checkbox" class="first-column"></td>
                    <td><input type="checkbox" class="second-column"></td>
                    <td><input type="checkbox" class="third-column"></td>
                    <td><input type="checkbox" class="forth-column"></td>
                    <td><input type="checkbox" class="fifth-column"></td>
                    <td><input type="checkbox" class="sixth-column"></td>
                    <td><input type="checkbox" class="seventh-column"></td>
                    <td><input type="checkbox" class="eighth-column"></td>
                    <td><input type="checkbox" class="ninth-column"></td>
                    <td><input type="checkbox" class="tenth-column"></td>
                `;
                attendanceTableBody.appendChild(tr);
            });

            
            addCheckboxEventListeners();
        })
        .catch(error => console.error('Error fetching teacher info:', error));
});
