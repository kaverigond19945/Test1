document.addEventListener("DOMContentLoaded", function () {
    // Get all checkbox inputs
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const submitButton = document.getElementById('submitButton');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            const anyChecked = Array.from(checkboxes).some(function (checkbox) {
                submitButton.classList.add("btn-active");
                submitButton.classList.remove("disabled");
                return checkbox.checked;
            });
            submitButton.disabled = !anyChecked;
        });
    });
});