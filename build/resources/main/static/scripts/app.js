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
            entry.target.classList.add('show');
            console.log('timeout');
        }
    }
}), { threshold: [0.8] });
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));
