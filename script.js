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

// bg-gray-300
// hover:bg-gray-300

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

});