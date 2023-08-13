document.querySelectorAll(".carName").forEach(e => {
    e.addEventListener("mouseover", e => {
        const menu = e.currentTarget.dataset.path;
        const modal = document.querySelector('.modal');
        document.querySelectorAll(".subMenu").forEach(e => {
            const subMenu = document.querySelector(`[data-target=${menu}]`);
            if (!subMenu.classList.contains("open")) {
                e.classList.remove("subMenu-active");
                e.classList.remove("open");
                subMenu.classList.add("subMenu-active");
                timeoutId = setTimeout(() => {
                    subMenu.classList.add("open");
                    modal.classList.add("modal-active");
                }, 0);
            }
            window.onmouseover = e => {
                if (e.target == subMenu || e.target == document.querySelector(`[data-path=${menu}]`) || e.target.tagName === "LI" || e.target.className == "subCategoryName") {
                    return;
                } else {
                    subMenu.classList.remove("subMenu-active");
                    subMenu.classList.remove("open");
                    modal.classList.remove("modal-active")
                }
            }
        })
    });
});




































































// добавляем категорию
// function addCategory () {
//     const categories = document.querySelector(".categories");
//     const categoryName = "<a>Mercedes-Benz</a>";
//     categories.innerHTML = categoryName;
// }// 
// addCategory ();
// стрелка развертывания
// function arrow () {
//     const categories = document.querySelector(".categories");
//     const arrow = document.createElement("a");
//     arrow.innerHTML = "&#709;";
//     arrow.classList.add("arrow");
//     categories.appendChild = arrow;
// }
// arrow ();
// создаем и добавляем подкатегории



























// всплытие подкатегории
// function openSubCategory (event) {
//     const targetCategory = event.target.parentElement;
//     const subCategory = targetCategory.lastElementChild;
//     subCategories = document.querySelectorAll(".subCategory");
//     if (event.target.className === "carName" || event.target.className === "arrow" || event.target.className === "subCategory" || event.target.className === "subCategoryName") {
//         for (let i = 0; i < 4; i++) {
//             subCategories[i].style.display = "none";
//         }
//         subCategory.style.display = "flex";
//         clearTimeout(timeoutId);
//         console.log("test");
//     } 
// }
// // скрытие подкатегории
// function closeSubCategory () {
//     subCategory = document.querySelectorAll(".subCategory");
//     for (let i = 0; i < 4; i++) {
//         subCategory[i].style.display = "none";
//     }
// }
// // таймер скрытия подкатегории
// function removeTimer (event) {
//     if (event.target.className === "carName" || event.target.className === "arrow" || event.target.className === "subCategory") {
//         timeoutId = setTimeout(closeSubCategory, 1000);
//     }
// }
// // наличия развернутых категори
// function init() {
// // document.querySelector(".categories").addEventListener("mouseover", openSubCategory);
// const test = document.querySelectorAll(".categories");
// test.forEach(e => {
//     addEventListener("mouseover", openSubCategory);
// })
// document.querySelector(".subCategory").addEventListener("mouseover", openSubCategory);
// const categories = document.querySelectorAll(".carName");
// categories.forEach(element => {
//     addEventListener("mouseout", removeTimer);
// });
// }
// window.addEventListener("DOMContentLoaded", init);



// // всплытие подкатегории
// function openSubCategory (event) {
//     const targetCategory = event.target.parentElement;
//     const subCategory = targetCategory.lastElementChild;
//     const test = document.querySelectorAll(".carName");
//     if (event.target.className === "carName" || event.target.className === "arrow" || event.target.className === "subCategory" || event.target.className === "subCategoryName") {
//             subCategory.style.display = "flex";
//             console.log("test2");
//             clearTimeout(timeoutId);
//     } 
// }
// // скрытие подкатегории
// function closeSubCategory (event) {
//     subCategory = document.querySelectorAll(".subCategory");
//     for (let i = 0; i < 4; i++) {
//             console.log("test1");
//             subCategory[i].style.display = "none";
//     }
// }
// // таймер скрытия подкатегории
// function removeTimer (event) {
//     if (event.target.className === "carName" || event.target.className === "arrow" || event.target.className === "subCategory") {
//         timeoutId = setTimeout(closeSubCategory, 1000);
//         console.log("test3");
//     }
// }
// // наличия развернутых категори
// function init() {
// document.querySelector(".carName").addEventListener("mouseover", closeSubCategory);
// document.querySelector(".carName").addEventListener("mouseover", openSubCategory);
// // document.querySelector(".categories").addEventListener("mouseover", openSubCategory);
// // document.querySelector(".subCategory").addEventListener("mouseover", openSubCategory);
// // const test = document.querySelectorAll(".carName");
// // const test2 = document.querySelectorAll(".subCategory");
// // test.forEach(element => {
// //     addEventListener("mouseover", closeSubCategory);
// // });
// // document.querySelector(".categories").addEventListener("mouseover", openSubCategory);
// // test2.forEach(e => {
// //     // addEventListener("mouseover", closeSubCategory);
// //     addEventListener("mouseover", openSubCategory);
// // })
// document.querySelector(".subCategory").addEventListener("mouseover", openSubCategory);
// // document.querySelector(".subCategoryName").addEventListener("mouseover", openSubCategory);
// const categories = document.querySelectorAll(".categories");
// categories.forEach(element => {
//     addEventListener("mouseout", removeTimer);
// });
// }
// window.addEventListener("DOMContentLoaded", init);