const btnMentor = document.querySelector(".btn-mentor");
const btnStudent = document.querySelector(".btn-student");
const btnClose = document.querySelector('.btn-close');


btnMentor.addEventListener('click', function () {
    document.querySelector('.mentor-form').classList.remove('hidden');
})
btnStudent.addEventListener('click', function () {
    document.querySelector('.student-form').classList.remove('hidden');
})
btnClose.addEventListener('click', function () {
    if (!document.querySelector('.mentor-form').classList.contains('hidden')) {
        document.querySelector('.mentor-form').classList.add('hidden');
    }
    if (!document.querySelector('.student-form').classList.contains('hidden')) {
        document.querySelector('.student-form').classList.add('hidden');
    }
})