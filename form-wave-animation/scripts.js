const labels = document.querySelectorAll('.form-control label');
console.log(labels)

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) => `<span>${letter}</span>`)
        .join('');
});

