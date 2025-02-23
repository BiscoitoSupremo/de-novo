document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".symbol input");

    inputs.forEach((input, index) => {
        input.value = localStorage.getItem(`glossario_${index}`) || "";
        input.addEventListener("input", () => {
            localStorage.setItem(`glossario_${index}`, input.value);
        });
    });
});
