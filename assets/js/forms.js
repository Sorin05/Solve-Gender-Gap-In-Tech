const btnMentor = document.querySelector(".btn-mentor");
const btnStudent = document.querySelector(".btn-student");
const btnCloseMentor = document.querySelector('.btn-close-mentor');
const btnCloseStudent = document.querySelector('.btn-close-student');


btnMentor.addEventListener('click', function () {
    document.querySelector('.mentor-form').classList.remove('hidden');
})
btnStudent.addEventListener('click', function () {
    document.querySelector('.student-form').classList.remove('hidden');
})
btnCloseMentor.addEventListener('click', function () {
    document.querySelector('.mentor-form').classList.add('hidden')
})
btnCloseStudent.addEventListener('click', function () {
    document.querySelector('.student-form').classList.add('hidden')
})