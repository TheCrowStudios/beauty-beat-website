"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const observer = new IntersectionObserver((entries) => __awaiter(void 0, void 0, void 0, function* () {
    for (const entry of entries) {
        console.log(entry);
        // TODO - fix the delay thing
        if (entry.isIntersecting) {
            yield sleep(500);
            entry.target.classList.add('show');
            console.log('timeout');
        }
    }
}), { threshold: [0.8] });
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));
const navbar = document.querySelector('.navbar');
const showNavbar = document.querySelector('.show-navbar');
const hideNavbar = document.querySelector('.hide-navbar');
const divToggleNavbar = document.querySelector('.div-toggle-navbar-hidden');
showNavbar === null || showNavbar === void 0 ? void 0 : showNavbar.addEventListener('click', (event) => {
    divToggleNavbar === null || divToggleNavbar === void 0 ? void 0 : divToggleNavbar.classList.add('div-toggle-navbar-show');
    divToggleNavbar === null || divToggleNavbar === void 0 ? void 0 : divToggleNavbar.classList.remove('div-toggle-navbar-hidden');
    showNavbar.classList.add('toggle-navbar-hidden');
    showNavbar.classList.remove('toggle-navbar-show');
    hideNavbar === null || hideNavbar === void 0 ? void 0 : hideNavbar.classList.add('toggle-navbar-show');
    hideNavbar === null || hideNavbar === void 0 ? void 0 : hideNavbar.classList.remove('toggle-navbar-hidden');
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.add('navbar-show');
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove('navbar-hidden');
});
hideNavbar === null || hideNavbar === void 0 ? void 0 : hideNavbar.addEventListener('click', (event) => {
    divToggleNavbar === null || divToggleNavbar === void 0 ? void 0 : divToggleNavbar.classList.remove('div-toggle-navbar-show');
    divToggleNavbar === null || divToggleNavbar === void 0 ? void 0 : divToggleNavbar.classList.add('div-toggle-navbar-hidden');
    showNavbar === null || showNavbar === void 0 ? void 0 : showNavbar.classList.add('toggle-navbar-show');
    showNavbar === null || showNavbar === void 0 ? void 0 : showNavbar.classList.remove('toggle-navbar-hidden');
    hideNavbar.classList.add('toggle-navbar-hidden');
    hideNavbar.classList.remove('toggle-navbar-show');
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove('navbar-show');
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.add('navbar-hidden');
});
