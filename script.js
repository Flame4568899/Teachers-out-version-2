
document.addEventListener('DOMContentLoaded', function() {
    const teacherSelect = document.getElementById('teacherSelect');
    const votedList = document.getElementById('votedList');

    const teachers = ['Ms. Sally O’Brien', 'Ms. Sarah Ryan', 'Mr. Coleman Quinn', 'Ms. Zoe O’Keeffe', 'Ms. Julie O’Connor'];

    // Populate the select box with teachers
    teachers.forEach(teacher => {
        let option = document.createElement('option');
        option.value = teacher;
        option.textContent = teacher;
        teacherSelect.appendChild(option);
    });

    // Handle vote submission
    document.getElementById('voteForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedTeacher = teacherSelect.value;

        if (selectedTeacher) {
            let listItem = document.createElement('li');
            listItem.textContent = selectedTeacher;
            votedList.appendChild(listItem);

            // Remove the voted teacher from the select box
            teacherSelect.querySelector(`option[value="${selectedTeacher}"]`).remove();
        }
    });
});
