// let maxWidth = 1500;
// let body = document.querySelector('body');
// if (window.innerWidth <= maxWidth) {
//     body.classList.add('touch');
//
//     let arrow = document.querySelectorAll('.arrow');
//
//     for (let i = 0; i < arrow.length; i++) {
//         arrow[i].addEventListener('click', function () {
//             let thisLink = arrow[i].previousElementSibling;
//             let subMenu = arrow[i].nextElementSibling;
//             let thisArrow = arrow[i];
//
//             thisLink.classList.add('parent');
//             arrow[i].addEventListener('click', function () {
//                 subMenu.classList.toggle('open');
//                 thisArrow.classList.toggle('active');
//             })
//         })
//     }
// } else {
//     body.classList.add('mouse');
// }