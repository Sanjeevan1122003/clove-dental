document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".hero-scrollable-track");
    track.innerHTML = track.innerHTML + track.innerHTML;
});

document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.clove-faqs-question');

    questions.forEach((question, index) => {
        question.addEventListener('click', function () {
            const questionNumber = index + 1;

            const plusIcon = document.getElementById(`faqsPlus${questionNumber}`);
            const minusIcon = document.getElementById(`faqsMinus${questionNumber}`);
            const answer = document.getElementById(`ans-container${questionNumber}`);
            const image = document.getElementById(`coveImage${questionNumber}`);

            document.querySelectorAll('.clove-faqs-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            document.querySelectorAll('.clove-image').forEach(img => {
                img.style.display = 'none';
            });
            document.querySelectorAll('[id^="faqsPlus"]').forEach(plus => {
                plus.style.display = 'block';
            });
            document.querySelectorAll('[id^="faqsMinus"]').forEach(minus => {
                minus.style.display = 'none';
            });

            if (answer.style.display === 'none') {
                plusIcon.style.display = 'none';
                minusIcon.style.display = 'block';
                answer.style.display = 'block';
                image.style.display = 'block';
            } else {
                plusIcon.style.display = 'block';
                minusIcon.style.display = 'none';
                answer.style.display = 'none';
                image.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');

            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
            });
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.classList.remove('active');
            });
            
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
});
