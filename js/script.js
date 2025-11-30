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

            // Close all other FAQ items
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
            });
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.classList.remove('active');
            });

            // Open clicked item if it wasn't already active
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
});

// @media (max-width: 768px) {
//     body {
//         margin: 0;
//         padding: 0;
//         overflow-x: hidden;
//         max-width: 100vw;
//     }

//     .desktop-content {
//         display: none;
//     }

//     .mobile-content {
//         display: block;
//     }

//     .navigation-bar {
//         width: 100%;
//         height: 80px;
//         background-color: #FFF9F4;
//         padding-top: 100px;
//     }

//     .nav-bar-container {
//         width: 100%;
//         height: 100%;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//     }

//     .button-container {
//         display: inline;
//     }

//     .logo-container {
//         width: 101px;
//         height: 41px;
//         margin-left: 16px;
//     }

//     .logo-container img {
//         width: 100%;
//         height: 100%;
//         object-fit: contain;
//     }

//     .appointment-button {
//         display: none;
//     }

//     .phone-number-button {
//         width: 154px;
//         height: 38px;
//         border-radius: 70px;
//         border-width: 1px;
//         border: 1px solid #462512;
//         background-color: #FFFFFF;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         font-family: "Figtree", sans-serif;
//         font-weight: 600;
//         font-size: 16px;
//         line-height: 100%;
//         color: #1A1A1A;
//         cursor: pointer;
//         margin-right: -28px;
//     }

//     .bg-image {
//         background-image: url("");
//         background-size: cover;
//         background-position: center;
//         margin-top: -100px;
//     }

//     .hero-section {
//         width: 390px;
//         height: 394px;
//         display: flex;
//         flex-direction: column;
//         background-color: #ffffff;
//         background-image: url("../images/empty-stomatology-orthodontist-bright-office-room-with-nobody-it 1.jpg");
//         background-size: cover;
//         background-position: center;
//     }

//     .hero-banner {
//         width: 390px;
//         height: 394px;
//         display: flex;
//         flex-direction: column;
//         align-items: start;
//         background: rgba(255, 255, 255, 0.5) 100%;
//         backdrop-filter: blur(0.5px);
//     }

//     .hero-banner-top-left {
//         width: 100%;
//         height: 45px;
//         display: flex;
//         justify-content: flex-end;
//         margin-bottom: 40px;
//     }

//     .hero-banner-details-container {
//         width: 390px;
//         height: 265px;
//         padding: 10px 16px;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-evenly;
//         background: linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
//         backdrop-filter: blur(10px)
//     }

//     .hero-banner-details-name {
//         display: none;
//     }

//     .hero-banner-details-name-mobile {
//         font-family: "Figtree", sans-serif;
//         font-weight: 800;
//         font-size: 16px;
//         line-height: 110%;
//         letter-spacing: 0%;
//         color: #303030;
//         display: block;
//         margin-top: -1px;
//     }

//     .hero-banner-details-name-mobile span {
//         font-family: "Figtree", sans-serif;
//         font-weight: 800;
//         font-size: 16px;
//         line-height: 110%;
//         letter-spacing: 0%;
//         color: #EA7D28;
//     }

//     .hero-banner-details-loaction {
//         display: none;
//     }

//     .hero-banner-details-loaction-mobile {
//         display: block;
//         font-family: "Figtree", sans-serif;
//         font-weight: 600;
//         font-style: SemiBold;
//         font-size: 16px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: rgba(78, 78, 78, 1);
//         margin-top: -30px;
//     }

//     .appointment-button-mobile {
//         width: 225px;
//         height: 38px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         border-radius: 50px;
//         border-width: 1px;
//         background: #F8943F;
//         color: #ffffff;
//         border: 1px solid #DE6F0D;
//         margin-top: -30px;
//     }

//     .hero-banner-image {
//         width: 410px;
//         height: 520px;
//         margin-top: -370px;
//         margin-left: 40px;
//         transform: rotateY(180deg);
//     }

//     .hero-booking-container {
//         width: 300px;
//         height: 449px;
//         border-radius: 20px;
//         border-width: 1px;
//         margin: 80px 10px;
//         padding: 20px;
//         background-color: rgba(255, 249, 244, 1);
//         border: none;
//         text-align: center;
//     }

//     .hero-booking-title {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 20px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: rgba(48, 48, 48, 1);
//     }

//     .hero-booking-descrition {
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 16px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: rgba(71, 71, 71, 1);
//     }

//     .hero-booking-form {
//         width: 100%;
//         height: 256px;
//         display: flex;
//         justify-content: center;
//     }

//     .form-input {
//         width: 280px;
//         height: 38px;
//         border-width: 1px;
//         padding-left: 20px;
//         gap: 10px;
//         border-radius: 24px;
//         background: rgba(255, 255, 255, 1);
//         border: 1px solid rgba(255, 224, 196, 1);
//         margin-bottom: 20px;
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 16px;
//         line-height: 100%;
//         letter-spacing: 0%;
//     }

//     .form-captcha {
//         width: 415px;
//         height: 38px;
//         display: flex;
//         margin-bottom: 20px;
//     }

//     .form-input-captcha {
//         width: 185px;
//         height: 38px;
//         border-width: 1px;
//         padding-left: 20px;
//         border-top-left-radius: 24px;
//         border-bottom-left-radius: 24px;
//         background-color: rgba(255, 255, 255, 1);
//         border: 1px solid rgba(255, 224, 196, 1);
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 16px;
//         line-height: 100%;
//         letter-spacing: 0%;

//     }

//     .captcha {
//         width: 90px;
//         height: 42px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         border-top-right-radius: 24px;
//         border-bottom-right-radius: 24px;
//         background: rgba(70, 37, 18, 1);
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 14px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         color: #FFFFFF;
//     }

//     .form-input-checkbox-container {
//         width: 280px;
//         height: auto;
//         text-align: start;
//         display: flex;
//         justify-content: flex-start;
//         align-items: flex-start;
//         gap: 10px;
//         margin-bottom: 10px;
//     }

//     .checkbox-input {
//         width: 20px;
//         height: 20px;
//         border-width: 1px;
//         border-radius: 4px;
//         background: rgba(255, 255, 255, 1);
//         border: 1px solid rgba(255, 224, 196, 1);
//     }

//     .checkbox-description {
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 12px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: rgba(48, 48, 48, 1);
//         margin-top: 2px;
//     }

//     .links {
//         text-decoration: underline;
//         text-decoration-style: solid;
//         color: rgba(48, 48, 48, 1);

//     }

//     .form-button {
//         width: 290px;
//         height: 38px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         border-radius: 24px;
//         background: rgba(245, 132, 32, 1);
//         font-family: "Figtree", sans-serif;
//         font-weight: 600;
//         font-size: 14px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         color: rgba(255, 255, 255, 1);
//         border: none;
//         cursor: pointer;
//         margin-top: -10px;
//     }

//     .mobile-scrollable-container {
//         width: 390px;
//         height: 60px;
//         background-color: rgba(255, 249, 244, 1);
//         display: flex;
//         align-items: center;
//         overflow: hidden;
//         position: absolute;
//         margin-top: 390px;
//     }

//     .hero-scrollable-container {
//         display: none;
//     }

//     .hero-scrollable-track {
//         display: flex;
//         gap: 40px;
//         position: relative;
//         animation: scroll-left 15s linear infinite;
//         width: max-content;
//     }

//     .hero-scrollable-content {
//         font-family: "Figtree", sans-serif;
//         font-size: 18px;
//         font-weight: 600;
//         color: #462512;
//         white-space: nowrap;
//         display: flex;
//         align-items: center;
//         gap: 20px;
//     }

//     @keyframes scroll-left {
//         0% {
//             transform: translateX(0);
//         }

//         100% {
//             transform: translateX(-50%);
//         }
//     }

//     .scrollable-content {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 14px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: rgba(245, 132, 32, 1);
//     }

//     .scrollable-content-sapn {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 14px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #000000;
//     }

//     .features {
//         background-color: #FFFFFF;
//         width: 390px;
//         height: auto;
//         margin-top: 300px;
//         padding: 50px 0px;
//     }

//     .root-canal-container {
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         text-align: center;
//         width: 100%;
//         height: auto;
//     }

//     .root-canal-title {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 24px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #1A1A1A;
//     }

//     .root-canal-deactiption {
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 20px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #474747;
//         margin-top: -10px;
//     }

//     .root-canal-treatement-container {
//         display: flex;
//         justify-content: flex-start;
//         align-items: center;
//         width: 358px;
//         height: auto;
//         gap: 22px;
//         overflow-x: auto;
//         overflow-y: hidden;
//         scroll-behavior: smooth;
//         padding: 10px 0;
//         -webkit-overflow-scrolling: touch;
//         scrollbar-width: none;
//         -ms-overflow-style: none;
//     }

//     .root-canal-treatement-container::-webkit-scrollbar {
//         display: none;
//         width: 0;
//         height: 0;
//         background: transparent;
//     }

//     .root-canal-treatement {
//         display: flex;
//         flex-direction: column;
//         width: 285px;
//         height: auto;
//         border-radius: 20px;
//         border: 1px solid #FFE0C4;
//         flex-shrink: 0;
//     }

//     .root-canal-treatement-image {
//         width: 285px;
//         height: 285px;
//         border-top-left-radius: 20px;
//         border-top-right-radius: 20px;
//         background: #E0D5CB;
//         object-fit: cover;
//     }

//     .root-canal-treatement-detials {
//         width: 285px;
//         height: auto;
//         gap: 16px;
//         padding: 20px;
//         text-align: start;
//         display: flex;
//         flex-direction: column;
//     }

//     .root-canal-treatement-title {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 20px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         color: #1A1A1A;
//         margin: 0;
//     }

//     .root-canal-treatement-description {
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 16px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #474747;
//         margin: 8px 0;
//     }

//     .root-canal-treatement-list-title {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 16px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         color: #000000;
//         margin: 8px 0 4px 0;
//     }

//     .root-canal-treatement-list {
//         color: #474747;
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 16px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         margin: 4px 0;
//         padding-left: 20px;
//     }

//     .root-canal-treatement-list li {
//         margin-bottom: 4px;
//     }

//     .root-canal-treatement-price-title {
//         font-family: "Figtree", sans-serif;
//         font-weight: 600;
//         font-size: 14px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #f58420;
//         margin: 12px 0 4px 0;
//     }

//     .root-canal-treatement-price {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 20px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         color: #000000;
//         margin: 0 0 16px 0;
//     }

//     .root-canal-treatement-button {
//         width: 181px;
//         height: 38px;
//         border-radius: 50px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         background-color: #f58420;
//         color: #FFFFFF;
//         font-family: "Figtree", sans-serif;
//         font-weight: 600;
//         font-size: 14px;
//         cursor: pointer;
//         line-height: 100%;
//         letter-spacing: 0%;
//         border: none;
//         transition: background-color 0.3s ease;
//         margin-top: auto;
//     }

//     .transformations-container {
//         width: 100%;
//         height: auto;
//         gap: 20px;
//         text-align: center;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         padding: 60px 0px;
//         margin-top: 10px;
//     }

//     .transformations-title {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 20px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #1A1A1A;
//         margin: 20px 0 0 0;
//     }

//     .transformations-description {
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 16px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #474747;
//         margin: 8px 0 20px 0;
//     }

//     .transformations-before-after-container {
//         width: 100%;
//         height: 231px;
//         display: flex;
//         justify-content: flex-start;
//         align-items: center;
//         gap: 40px;
//         overflow-x: auto;
//         overflow-y: hidden;
//         scroll-behavior: smooth;
//         padding: 10px 20px;
//         -webkit-overflow-scrolling: touch;
//         scrollbar-width: none;
//         -ms-overflow-style: none;
//     }

//     .transformations-before-after-container::-webkit-scrollbar {
//         display: none;
//         width: 0;
//         height: 0;
//         background: transparent;
//     }

//     .before-after-container {
//         width: 295px;
//         height: 231px;
//         gap: 12px;
//         flex-shrink: 0;
//     }

//     .before-after-image {
//         width: 295px;
//         height: 200px;
//         border-radius: 20px;
//         object-fit: cover;
//     }

//     .before-after-details {
//         width: 295px;
//         height: 19px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         margin-top: 8px;
//     }

//     .before-after-details-name {
//         font-family: "Figtree", sans-serif;
//         font-weight: 600;
//         font-size: 16px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         color: #1A1A1A;
//         margin: 0;
//     }

//     .before-after-details-location {
//         font-family: "Figtree", sans-serif;
//         font-weight: 600;
//         font-size: 14px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         color: #f58420;
//         margin: 0;
//     }

//     .about-us {
//         background-color: #FFFFFF;
//         width: 390px;
//         height: auto;
//         margin-top: -30px;
//         margin-bottom: 60px;
//     }

//     .clove-dental-container {
//         width: 100%;
//         height: auto;
//         gap: 40px;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         text-align: center;
//     }

//     .clove-dental-title {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 20px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         color: #303030;

//     }

//     .clove-dental-description {
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 16px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         text-align: center;
//         color: #474747;
//         margin-top: -45px;
//     }

//     .clove-faqs-container {
//         width: 358px;
//         height: auto;
//         gap: 20px;
//         display: flex;
//         flex-direction: column-reverse;
//         justify-content: center;
//         align-items: flex-start;
//     }

//     .clove-faqs-questions-containers {
//         width: 358px;
//         height: auto;
//         gap: 24px;
//     }

//     .clove-faqs-questions {
//         width: 358px;
//         height: auto;
//         gap: 40px;
//         display: flex;
//         flex-direction: column;
//     }

//     .clove-faqs-question {
//         width: 358px;
//         height: 14px;
//         gap: 32px;
//         display: flex;
//         justify-content: space-between;
//         text-align: left;
//     }

//     .clove-faq {
//         font-family: "Figtree", sans-serif;
//         font-weight: 600;
//         font-size: 16px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         color: #1A1A1A;
//     }

//     .clove-faqs-answer {
//         width: 358px;
//         height: auto;
//         display: flex;
//         flex-direction: column;
//         gap: 15px
//     }

//     .clove-faq-a {
//         color: #474747;
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 16px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         margin-top: -20px;
//         margin-left: -10px;
//         text-align: start;
//     }

//     .clove-image-container {
//         width: 358px;
//         height: 250px;
//         border-radius: 12px;
//     }

//     .clove-image {
//         width: 100%;
//         height: 100%;
//         border-radius: 20px;
//     }

//     .feedback {
//         background-color: #FFFFFF;
//         width: 100%;
//         height: auto;
//         margin-top: -30px;
//         margin-bottom: 60px;
//         padding: 60px 0px;
//     }

//     .our-patients-container {
//         width: 390px;
//         height: auto;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//     }

//     .our-patients-title {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-size: 20px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #303030;
//     }

//     .our-patients-description {
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 14px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #474747;
//         margin-bottom: 40px;
//     }

//     .our-patients {
//         width: 350px;
//         height: 398px;
//         display: flex;
//         align-items: flex-start;
//         gap: 24px;
//         overflow-x: auto;
//         overflow-y: hidden;
//         padding: 20px 0;
//         scrollbar-width: none;
//         -ms-overflow-style: none;
//         margin-top: -50px;
//     }

//     .our-patients::-webkit-scrollbar {
//         display: none;
//     }

//     .patients {
//         width: 224px;
//         height: auto;
//         display: flex;
//         flex-direction: column;
//         gap: 12px;
//         border-radius: 10px;
//         flex-shrink: 0;
//     }

//     .patients-image {
//         width: 224px;
//         height: 350px;
//         border-radius: 10px;
//         object-fit: cover;
//     }

//     .patients-detials {
//         width: 224px;
//         height: auto;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//     }

//     .patients-name {
//         font-family: "Figtree", sans-serif;
//         font-weight: 600;
//         font-size: 16px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         color: #1A1A1A;
//         margin: 0;
//     }

//     .patients-role {
//         font-family: "Figtree", sans-serif;
//         font-weight: 600;
//         font-size: 16px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         color: #f58420;
//         margin: 0;
//     }

//     .patients-location {
//         font-family: "Figtree", sans-serif;
//         font-weight: 600;
//         font-size: 14px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         color: #777777;
//         margin: 0;
//         align-self: flex-start;
//     }

//     .book-appointment-container {
//         width: 350px;
//         height: auto;
//         border-radius: 10px;
//         background: #FFF9F4;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         margin-top: 30px;
//         padding: 20px;
//         margin-bottom: 60px;
//     }

//     .book-appointment-title {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-size: 20px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #303030;
//         text-align: center;
//         margin-bottom: 20px;
//     }

//     .book-appointment-form {
//         width: 380px;
//         height: auto;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//     }

//     .book-appointment-form-inputs-container {
//         width: 380px;
//         height: auto;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         margin-top: -20px;
//     }

//     .book-appointment-form-inputs-container input {
//         width: 326px;
//         height: 44px;
//         margin-bottom: 0px;
//         margin-top: 0px;
//     }

//     .book-appointment-form-inputs-container .form-captcha {
//         width: 360px;
//         height: 44px;
//     }

//     .book-form-input-checkbox-container {
//         width: 360px;
//         height: auto;
//         display: flex;
//         justify-content: center;
//         align-items: flex-start;
//         margin-left: 30px;
//     }

//     .safety-container {
//         width: 358px;
//         height: auto;
//         gap: 20px;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//     }

//     .safety-container-title {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 20px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #303030;
//         text-align: center;
//     }

//     .safety-container-description {
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 16px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         margin-top: -30px;
//         text-align: center;
//     }

//     .safety-technologies-container {
//         width: 360px;
//         height: auto;
//         gap: 41px;
//         display: flex;
//         justify-content: flex-start;
//         align-items: center;
//         overflow-x: auto;
//         overflow-y: hidden;
//         scrollbar-width: none;
//         -ms-overflow-style: none;
//     }

//     .safety-technologies-container::-webkit-scrollbar {
//         display: none;
//     }

//     .safety-technologies-container>div {
//         display: flex;
//         gap: 20px;
//         padding: 10px;
//     }

//     .safety-technologie {
//         width: 300px;
//         height: auto;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         padding-left: 50px;
//     }

//     .technology-image {
//         width: 340px;
//         height: 200px;
//         border-top-left-radius: 20px;
//         border-top-right-radius: 20px;
//         object-fit: cover;
//     }

//     .safety-technologie-details-container {
//         width: 300px;
//         height: auto;
//         border-bottom-left-radius: 20px;
//         border-bottom-right-radius: 20px;
//         border-top-left-radius: 0px;
//         border-top-right-radius: 0px;
//         background: #112230;
//         margin-top: -20px;
//     }

//     .safety-technologie-details {
//         width: 100%;
//         height: auto;
//         gap: 8px;
//         display: flex;
//         flex-direction: column;
//     }

//     .safety-technologie-details-title-container {
//         width: 300px;
//         height: auto;
//         gap: 10px;
//         display: flex;
//         flex-direction: column;
//         justify-content: flex-start;
//         align-items: flex-start;
//     }

//     .safety-technologie-details-tittle {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 16px;
//         line-height: 120%;
//         letter-spacing: 0%;
//         color: #FFFFFF;
//         margin: 0;
//     }

//     .safety-technologie-details-tittle-sapn {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 20px;
//         line-height: 120%;
//         letter-spacing: 0%;
//         color: #FFFFFF;
//     }

//     .safety-technologie-details-description-container {
//         width: 100%;
//         height: auto;
//     }

//     .safety-technologie-details-description {
//         font-family: "Figtree", sans-serif;
//         font-weight: 300;
//         font-style: Light;
//         font-size: 14px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         margin: 0;
//         margin-bottom: -30px;
//     }

//     .safety-technologie-details-bottom-container {
//         width: 157px;
//         height: 25px;
//         gap: 8px;
//         display: flex;
//         justify-content: flex-start;
//         align-items: center;

//     }

//     .safety-technologie-details-bottom-text {
//         font-family: "Figtree", sans-serif;
//         font-weight: 600;
//         font-size: 12px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #f58420;
//         margin: 0;
//     }

//     .pricing-table {
//         background-color: #FFFFFF;
//         width: 390px;
//         height: auto;
//         margin-bottom: 60px;
//     }

//     .google-reviews {
//         width: 309px;
//         height: auto;
//         padding: 40px;
//         background-color: #FFF9F5;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: flex-start;
//         border-radius: 12px;
//     }

//     .google-reviews-title {
//         display: none;
//     }

//     .google-reviews-container {
//         width: 390px;
//         height: auto;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         gap: 69px;
//     }

//     .google-reviews-ratings {
//         width: auto;
//         height: 155px;
//         display: flex;
//         flex-direction: row;
//         justify-content: center;
//         align-items: center;
//         gap: 12px;
//     }

//     .google-ratings-logo {
//         width: 87px;
//         height: 88px;
//     }

//     .google-ratings-contianer {
//         width: 174px;
//         height: 93px;
//         gap: 16px;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//         align-items: center;
//     }

//     .google-ratings-detials {
//         width: 80px;
//         height: 29px;
//         gap: 7.5px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         margin-bottom: -25px;
//     }

//     .google-rating {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-size: 24px;
//         line-height: 100%;
//         text-align: center;
//     }

//     .google-ratings {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-size: 20px;
//         line-height: 100%;
//         text-align: center;
//         color: #EA7D28;
//         margin-bottom: -20px;
//     }

//     .google-ratings-description {
//         font-family: "Figtree", sans-serif;
//         font-weight: 600;
//         font-size: 14px;
//         line-height: 100%;
//         text-align: center;
//         color: #474747;
//     }

//     .vertical-divider {
//         width: 2px;
//         height: 143px;
//         background-color: #FFDDC1;
//     }

//     .google-reviews-neha {
//         width: 360px;
//         height: 221px;
//         gap: 24px;
//         display: flex;
//         justify-content: flex-start;
//         align-items: center;
//         overflow-x: auto;
//         overflow-y: hidden;
//         scrollbar-width: none;
//         -ms-overflow-style: none;
//         margin-left: -50px;
//     }

//     .google-reviews-neha::-webkit-scrollbar {
//         display: none;
//     }

//     .google-reviews-neha-container {
//         width: 302px;
//         height: 202px;
//         gap: 18px;
//         border-radius: 25px;
//         padding: 15px;
//         background-color: #FFFFFF;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         position: relative;
//         box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
//     }

//     .google-reviews-neha-logo {
//         width: 51px;
//         height: 51px;
//         border-radius: 50%;
//         object-fit: cover;
//         margin-bottom: -10px;
//     }

//     .google-reviews-neha-top-right-container {
//         position: absolute;
//         top: 0;
//         right: 0;
//         width: 60px;
//         height: 60px;
//         background-color: #FFEBC4;
//         border-top-right-radius: 45px;
//         border-bottom-left-radius: 120px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//     }

//     .google-reviews-neha-top-right-logo {
//         width: 27px;
//         height: 27px;
//     }

//     .google-reviews-neha-detial {
//         width: 272px;
//         height: 103px;
//         gap: 18px;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//     }

//     .google-reviews-neha-name {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-size: 16px;
//         line-height: 100%;
//         color: #303030;
//     }

//     .google-reviews-neha-ratings {
//         width: 105px;
//         height: 18px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         margin-top: -20px;
//         margin-bottom: 10px;
//     }

//     .google-reviews-neha-description {
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 12px;
//         line-height: 150%;
//         color: #464646;
//         text-align: start;
//         margin-top: -20px;
//     }

//     .find-us {
//         width: 390px;
//         height: auto;
//         padding: 40px 0px;
//         display: flex;
//         flex-direction: column;
//         align-items: flex-start;
//     }

//     .find-us-top-container {
//         width: 380px;
//         height: auto;
//     }

//     .find-us-top-title {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 20px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         color: #303030;
//         text-align: center;
//     }

//     .find-us-top-description {
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 16px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         text-align: start;
//         color: #474747;
//         margin-top: -10px;
//         text-align: center;
//     }

//     .find-us-bottom-container {
//         width: 370px;
//         height: auto;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//         align-items: flex-start;

//     }

//     .find-us-locations-container {
//         width: 350px;
//         height: 374px;
//         gap: 10px;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: space-between;
//         margin-left: 25px;
//     }

//     .find-us-locations {
//         width: 350px;
//         height: 86px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//     }

//     .find-us-location {
//         width: 170px;
//         height: 86px;
//         border-radius: 8px;
//         border-width: 1px;
//         border-color: #ffffff;
//         border: 1px solid #D0D0D0;
//         display: flex;
//         justify-content: space-around;
//         align-items: center;
//     }

//     .find-us-location-name {
//         font-family: "Raleway", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 12px;
//         line-height: 150%;
//         letter-spacing: 0%;
//         color: #303030;
//         margin-top: 20px;
//     }

//     .find-us-location-count {
//         font-family: "Open Sans", sans-serif;
//         font-weight: 600;
//         font-size: 12px;
//         line-height: 150%;
//         letter-spacing: 0%;
//         color: #303030;
//         margin-top: -10px;
//     }

//     .find-us-images-container {
//         width: 350px;
//         height: 207px;
//         gap: 12px;
//         display: flex;
//         flex-direction: row;
//         margin: 20px;
//         overflow-x: auto;
//         overflow-y: hidden;
//         scrollbar-width: none;
//         -ms-overflow-style: none;
//     }

//     .sfind-us-images-container::-webkit-scrollbar {
//         display: none;
//     }

//     .find-us-images {
//         width: 269px;
//         height: 207px;
//         gap: 40px;
//         display: flex;
//         justify-content: space-between;
//         align-items: flex-start;

//     }

//     .find-us-image {
//         width: 269px;
//         height: 207px;
//         border-radius: 8px;
//         border-width: 1px;
//         border: 1px solid #B0B0B0;
//     }

//     .price {
//         width: 358px;
//         height: auto;
//         border-radius: 20px;
//         gap: 60px;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-around;
//         align-items: center;
//         padding: 0px;
//         margin-top: -10px;
//         padding-left: 20px;
//     }

//     .price-booking-container {
//         width: 358px;
//         height: auto;
//         border-radius: 20px;
//         border-width: 1px;
//         display: flex;
//         flex-direction: column;
//         justify-content: flex-start;
//         align-items: center;
//         background: #FFF9F4;
//         border: 1px solid #FFE0C4;
//         padding: 30px 20px;
//     }

//     .price-booking-tittle {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 24px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #303030;
//         margin-top: -10px;
//         text-align: center;
//     }

//     .price-booking-description {
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 14px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #474747;
//         margin-top: -20px;
//         text-align: center;
//     }

//     .price-booking-form {
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//         align-items: center;
//         width: 326px;
//         height: auto;
//     }

//     .price-banner-container {
//         width: 358px;
//         height: auto;
//         border-radius: 12px;
//         border-width: 0.6px;
//         border: 1px solid #FFE0C4;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//     }

//     .price-banner-image {
//         width: 358px;
//         height: 326px;
//         border-top-left-radius: 12px;
//         border-top-right-radius: 12px;
//         border-bottom-left-radius: 0px;
//     }

//     .price-banner-details {
//         width: 361px;
//         height: 290px;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         padding: 20px;
//     }

//     .price-banner-title {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 20px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         color: #303030;
//         margin-top: -0px;
//     }

//     .price-banner-list {
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 16px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #474747;
//         margin-top: -5px;
//         margin-bottom: -30px;
//     }

//     .price-banner-list li {
//         margin-bottom: 10px;
//         margin-left: -15px;
//     }

//     .price-banner-price-details {
//         width: 342px;
//         height: 83px;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//         align-items: flex-start;
//     }

//     .price-banner-price-details button {
//         width: 342px;
//         height: 38px;
//         border-radius: 24px;
//         padding: 16px;
//         margin-top: 30px;
//     }

//     .price-banner-special-container {
//         width: 147px;
//         height: 46px;
//         margin-top: 0px;
//         display: flex;
//         flex-direction: column;

//     }

//     .price-banner-price-tittle {
//         font-family: "Figtree", sans-serif;
//         font-weight: 600;
//         font-size: 14px;
//         line-height: 130%;
//         letter-spacing: 0%;
//         color: #f58420;
//     }

//     .price-banner-price {
//         font-family: "Figtree", sans-serif;
//         font-weight: 700;
//         font-style: Bold;
//         font-size: 20px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         color: #1a1a1a;
//         margin-top: -5px;
//     }

//     .price-banner-price-span {
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 20px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         text-decoration: line-through;
//         color: #303030;
//         margin-left: 10px;
//     }

//     .price-banner-price-button {
//         width: 138px;
//         height: 38px;
//         border-radius: 50px;
//         background-color: #F58420;
//         color: #ffffff;
//         font-family: "Figtree", sans-serif;
//         font-weight: 600;
//         font-style: SemiBold;
//         font-size: 12px;
//         line-height: 100%;
//         letter-spacing: 0%;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         cursor: pointer;
//         border: none;
//     }

//     .FAQS {
//         width: 100%;
//         max-width: 1440px;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         margin: 0 auto;
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         margin-bottom: 60px;
//         margin-top: 20px;
//     }

//     .FAQS-title {
//         color: #303030;
//         text-align: center;
//         margin-bottom: 40px;
//         font-weight: 700;
//         font-size: 24px;
//         line-height: 130%;
//         width: 100%;
//     }

//     .faq-grid {
//         width: 358px;
//         height: auto;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         margin-top: -40px;
//     }

//     .faq-column {
//         width: 358px;
//         height: 48px;
//         gap: 16px;
//         background-color: white;
//         overflow: hidden;
//         flex: 1;
//     }

//     .faq-column-mobile {
//         margin-top: -60px;
//     }

//     .faq-item {
//         border-bottom: 1px solid #eaeaea;
//         transition: all 0.3s ease;
//     }

//     .faq-item:last-child {
//         border-bottom: 1px solid #eaeaea;
//     }

//     .faq-question {
//         padding: 20px;
//         cursor: pointer;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         background-color: #fff;
//         transition: background-color 0.2s;
//         font-weight: 600;
//         font-size: 16px;
//         line-height: 130%;
//         color: #1A1A1A;
//     }

//     .faq-question:hover {
//         background-color: white;
//     }

//     .faq-question.active {
//         background-color: white;
//         color: #474747;
//     }

//     .faq-icon {
//         transition: transform 0.3s ease;
//         flex-shrink: 0;
//         margin-left: 10px;
//     }

//     .faq-question.active .faq-icon {
//         transform: rotate(45deg);
//     }

//     .faq-answer {
//         padding: 0 20px;
//         max-height: 0;
//         overflow: hidden;
//         transition: max-height 0.3s ease, padding 0.3s ease;
//         background-color: white;
//         color: #474747;
//         line-height: 1.7;
//         font-size: 14px;
//         font-weight: 500;
//     }

//     .faq-answer.active {
//         padding: 20px;
//         max-height: 500px;
//     }

//     .footer {
//         width: 390px;
//         height: auto;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: flex-start;
//         background: #462512;
//         padding: 30px;
//         gap: 20px;
//         box-sizing: border-box;
//     }

//     .footer-logo {
//         width: 120px;
//         height: auto;
//     }

//     .footer-details-container {
//         width: 100%;
//         height: auto;
//         display: flex;
//         flex-direction: row;
//         justify-content: space-between;
//         align-items: flex-start;
//     }

//     .footer-details-top-container {
//         width: auto;
//         height: auto;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: flex-end;
//         gap: 8px;
//     }

//     .footer-details-top-container p {
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 14px;
//         color: #ffffff;
//         margin: 0;
//         line-height: 1;
//     }

//     .footer-divider {
//         width: 100%;
//         height: 0px;
//         border: 1px solid #FFFFFF;
//     }

//     .footer-details-bottom {
//         width: 100%;
//         text-align: left;
//     }

//     .footer-details-description {
//         font-family: "Figtree", sans-serif;
//         font-weight: 400;
//         font-size: 12px;
//         color: #ffffff;
//         margin: 0;
//         line-height: 1.4;
//     }

//     .bottom-content {
//         width: 390px;
//         box-sizing: border-box;
//     }

//     .bottom-content img {
//         width: 100%;
//         height: auto;
//         display: block;
//     }

//     .bottom-content {
//         margin-top: -50px;
//     }
// }