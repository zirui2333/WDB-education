

document.getElementById('add_row').addEventListener('click',function(){
    const table = document.getElementById('course_table');
    const row = table.insertRow();
    row.innerHTML = `
        <td><input type="checkbox" class="GPA_input check_mark" unchecked></td>
        <td><input type="text" class="GPA_input" placeholder="Course"></td>
        <td>
                    <select class="GPA_input grade_input">
                        <option value="" selected disabled>--</option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="B-">B-</option>
                        <option value="C+">C+</option>
                        <option value="C">C</option>
                        <option value="C-">C-</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                    </select>
                </td>
        <td><input type="number" class="GPA_input credit_input"></td>
        <td><button class="GPA_input delete">&times;</button></td>
    `;
});


document.getElementById('course_table').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        const row = event.target.closest('tr');
        row.remove();
    }
});


const letter_grade_points = {
    "A+": 4.0,
    "A" : 4.0,
    "A-": 3.7,
    "B+": 3.5,
    "B" : 3.0,
    "B-": 2.7,
    "C+": 2.5,
    "C" : 2.0,
    "C-": 1.7,
    "D" : 1.0,
    "F" : 0.0
};


document.getElementById('calculate').addEventListener('click', function(){
    const grades = document.querySelectorAll('.grade_input');
    const credits = document.querySelectorAll('.credit_input');
    const marks = document.querySelectorAll('.check_mark');

    let grades_total = 0;
    let credits_total = 0;
    const GPA_board = document.getElementById('gpa_output');

    for(let i = 0; i < grades.length; ++i){
        const grade = grades[i].value;
        const credit = parseFloat(credits[i].value);
        const mark = marks[i].checked;
        
        if(mark){
            if (isNaN(credit) || credit < 0) {
                GPA_board.innerHTML = `
                    <p>
                        Wrong format!<br>
                        Please ensure that the grade is valid and capitalized.<br>
                        Credit hours must be a non-negative number. <br><br>

                        The accepted grades are {A, B+, B, C+, C, D, F}
                    </p>
                `; 
                return;
            }
            grades_total += letter_grade_points[grade] * credit;
            credits_total += credit;
        }
    }

    const GPA = grades_total / credits_total;
    GPA_board.innerHTML = `Your calculated GPA is ${GPA.toFixed(2)}` ; 
});


document.getElementById('reset').addEventListener('click', function(){
    location.reload();
});

document.getElementById('credit_input').addEventListener('input', function(event){
    const credit = event.target.value;

    const last_digit = credit % 10;
    
    if(last_digit < 0 || last_digit > 5){
        event.target.value = Math.round(credit / 10);
    }else{
        event.target.value = last_digit;
    }
});
