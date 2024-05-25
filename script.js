// Navbar
const navbar = document.querySelector('#navbar');
const navbarLink = document.querySelector('#navbarLink');
const navbarBarSVG = document.querySelector('#navbarBarSVG');
const navbarImg = document.querySelector('#navbarImg');

// Main
const main = document.querySelector('#main');

// Button
const whatIsSorting = document.querySelector('#whatIsSorting');

const bubbleSort = document.querySelector('#bubbleSort');
const selectionSort = document.querySelector('#selectionSort');
const insertionSort = document.querySelector('#insertionSort');
const mergeSort = document.querySelector('#mergeSort');
const quickSort = document.querySelector('#quickSort');

// Content
const whatIsSorting_content = document.querySelector('#whatIsSorting_content');

const bubbleSort_content = document.querySelector('#bubbleSort_content');
const selectionSort_content = document.querySelector('#selectionSort_content');
const insertionSort_content = document.querySelector('#insertionSort_content');
const mergeSort_content = document.querySelector('#mergeSort_content');
const quickSort_content = document.querySelector('#quickSort_content');

// Ukuran Window
const screenWidth = window.innerWidth;

// Navbar
whatIsSorting.addEventListener("click", () => {

    // Button
    whatIsSorting.classList.add('bg-gray-300');
    whatIsSorting.classList.remove('hover:bg-gray-300');

    bubbleSort.classList.add('hover:bg-gray-300');
    selectionSort.classList.add('hover:bg-gray-300');
    insertionSort.classList.add('hover:bg-gray-300');
    mergeSort.classList.add('hover:bg-gray-300');
    quickSort.classList.add('hover:bg-gray-300');

    bubbleSort.classList.remove('bg-gray-300');
    selectionSort.classList.remove('bg-gray-300');
    insertionSort.classList.remove('bg-gray-300');
    mergeSort.classList.remove('bg-gray-300');
    quickSort.classList.remove('bg-gray-300');

    // Content
    whatIsSorting_content.classList.remove('hidden');

    bubbleSort_content.classList.add('hidden');
    selectionSort_content.classList.add('hidden');
    insertionSort_content.classList.add('hidden');
    mergeSort_content.classList.add('hidden');
    quickSort_content.classList.add('hidden');

    // Main
    mainContent();

});

bubbleSort.addEventListener("click", () => {

    // Button
    bubbleSort.classList.add('bg-gray-300');
    bubbleSort.classList.remove('hover:bg-gray-300');

    whatIsSorting.classList.add('hover:bg-gray-300');
    selectionSort.classList.add('hover:bg-gray-300');
    insertionSort.classList.add('hover:bg-gray-300');
    mergeSort.classList.add('hover:bg-gray-300');
    quickSort.classList.add('hover:bg-gray-300');

    whatIsSorting.classList.remove('bg-gray-300');
    selectionSort.classList.remove('bg-gray-300');
    insertionSort.classList.remove('bg-gray-300');
    mergeSort.classList.remove('bg-gray-300');
    quickSort.classList.remove('bg-gray-300');

    // Content
    bubbleSort_content.classList.remove('hidden');

    whatIsSorting_content.classList.add('hidden');
    selectionSort_content.classList.add('hidden');
    insertionSort_content.classList.add('hidden');
    mergeSort_content.classList.add('hidden');
    quickSort_content.classList.add('hidden');

    // Main
    mainContent();

});

selectionSort.addEventListener("click", () => {

    // Button
    selectionSort.classList.add('bg-gray-300');
    selectionSort.classList.remove('hover:bg-gray-300');

    whatIsSorting.classList.add('hover:bg-gray-300');
    bubbleSort.classList.add('hover:bg-gray-300');
    insertionSort.classList.add('hover:bg-gray-300');
    mergeSort.classList.add('hover:bg-gray-300');
    quickSort.classList.add('hover:bg-gray-300');

    whatIsSorting.classList.remove('bg-gray-300');
    bubbleSort.classList.remove('bg-gray-300');
    insertionSort.classList.remove('bg-gray-300');
    mergeSort.classList.remove('bg-gray-300');
    quickSort.classList.remove('bg-gray-300');

    // Content
    selectionSort_content.classList.remove('hidden');

    whatIsSorting_content.classList.add('hidden');
    bubbleSort_content.classList.add('hidden');
    insertionSort_content.classList.add('hidden');
    mergeSort_content.classList.add('hidden');
    quickSort_content.classList.add('hidden');

    // Main
    mainContent();

});

insertionSort.addEventListener("click", () => {

    // Button
    insertionSort.classList.add('bg-gray-300');
    insertionSort.classList.remove('hover:bg-gray-300');

    whatIsSorting.classList.add('hover:bg-gray-300');
    bubbleSort.classList.add('hover:bg-gray-300');
    selectionSort.classList.add('hover:bg-gray-300');
    mergeSort.classList.add('hover:bg-gray-300');
    quickSort.classList.add('hover:bg-gray-300');

    whatIsSorting.classList.remove('bg-gray-300');
    bubbleSort.classList.remove('bg-gray-300');
    selectionSort.classList.remove('bg-gray-300');
    mergeSort.classList.remove('bg-gray-300');
    quickSort.classList.remove('bg-gray-300');

    // Content
    insertionSort_content.classList.remove('hidden');

    whatIsSorting_content.classList.add('hidden');
    bubbleSort_content.classList.add('hidden');
    selectionSort_content.classList.add('hidden');
    mergeSort_content.classList.add('hidden');
    quickSort_content.classList.add('hidden');

    // Main
    mainContent();

});

mergeSort.addEventListener("click", () => {

    // Button
    mergeSort.classList.add('bg-gray-300');
    mergeSort.classList.remove('hover:bg-gray-300');

    whatIsSorting.classList.add('hover:bg-gray-300');
    bubbleSort.classList.add('hover:bg-gray-300');
    selectionSort.classList.add('hover:bg-gray-300');
    insertionSort.classList.add('hover:bg-gray-300');
    quickSort.classList.add('hover:bg-gray-300');

    whatIsSorting.classList.remove('bg-gray-300');
    bubbleSort.classList.remove('bg-gray-300');
    selectionSort.classList.remove('bg-gray-300');
    insertionSort.classList.remove('bg-gray-300');
    quickSort.classList.remove('bg-gray-300');

    // Content
    mergeSort_content.classList.remove('hidden');

    whatIsSorting_content.classList.add('hidden');
    bubbleSort_content.classList.add('hidden');
    selectionSort_content.classList.add('hidden');
    insertionSort_content.classList.add('hidden');
    quickSort_content.classList.add('hidden');

    // Main
    mainContent();

});

quickSort.addEventListener("click", () => {

    // Button
    quickSort.classList.add('bg-gray-300');
    quickSort.classList.remove('hover:bg-gray-300');

    whatIsSorting.classList.add('hover:bg-gray-300');
    bubbleSort.classList.add('hover:bg-gray-300');
    selectionSort.classList.add('hover:bg-gray-300');
    insertionSort.classList.add('hover:bg-gray-300');
    mergeSort.classList.add('hover:bg-gray-300');

    whatIsSorting.classList.remove('bg-gray-300');
    bubbleSort.classList.remove('bg-gray-300');
    selectionSort.classList.remove('bg-gray-300');
    insertionSort.classList.remove('bg-gray-300');
    mergeSort.classList.remove('bg-gray-300');

    // Content
    quickSort_content.classList.remove('hidden');

    whatIsSorting_content.classList.add('hidden');
    bubbleSort_content.classList.add('hidden');
    selectionSort_content.classList.add('hidden');
    insertionSort_content.classList.add('hidden');
    mergeSort_content.classList.add('hidden');

    // Main
    mainContent();

});

function mainContent() {
    main.classList.remove("hidden");

    if (screenWidth < 767) {
        navbar.classList.add("h-10");
        navbar.classList.remove("h-full");
    }
};

// Media Query
function toggleHiddenClass() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1200) {
        navbar.classList.add("h-10");
        navbar.classList.remove("h-full");
        navbar.classList.add("w-full");
        navbar.classList.remove("w-50");

        navbarImg.classList.add('ms-5');

        document.body.classList.remove("p-10");
        document.body.classList.add("p-1");
        document.body.classList.add("flex-col");
        document.body.classList.remove("space-x-6");
        navbarBarSVG.classList.remove('hidden');
    } else {
        navbar.classList.remove("h-10");
        navbar.classList.add("h-full");
        navbar.classList.remove("w-full");
        navbar.classList.add("w-50");

        navbarImg.classList.remove('ms-5');

        document.body.classList.add("p-10");
        document.body.classList.remove("p-1");
        document.body.classList.remove("flex-col");
        document.body.classList.add("space-x-6");
        navbarBarSVG.classList.add('hidden');
    }
}

toggleHiddenClass();
window.addEventListener("resize", toggleHiddenClass);

navbarBarSVG.addEventListener("click", () => {
    navbar.classList.toggle("h-10");
    navbar.classList.toggle("h-full");
    main.classList.toggle("hidden");
});