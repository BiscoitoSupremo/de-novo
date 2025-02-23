document.addEventListener("DOMContentLoaded", () => {
    const textAreas = document.querySelectorAll("textarea");

    textAreas.forEach((textarea, index) => {
        textarea.value = localStorage.getItem(`anotacao_${index}`) || "";
        textarea.addEventListener("input", () => {
            localStorage.setItem(`anotacao_${index}`, textarea.value);
        });
    });
});
