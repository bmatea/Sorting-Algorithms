const bubble = document.querySelector("#bubble");
bubble.addEventListener("click", handleBubble);

const selection = document.querySelector("#selection");
selection.addEventListener("click", handleSelection);

const insertion = document.querySelector("#insertion");
insertion.addEventListener("click", handleInsertion);

const merge = document.querySelector("#merge");
merge.addEventListener("click", handleMerge);

const quick = document.querySelector("#quick");
quick.addEventListener("click", handleQuick);

const heap = document.querySelector("#heap");
heap.addEventListener("click", handleHeap);

function handleBubble(e) {
    e.preventDefault();
    let bubble = {
        name: "Bubble Sort",
        screenshot: ".\\slike\\Bubblesort.png",
        complexity: "O(n2)",
        desc: "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent pairs and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements 'bubble' to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort. Bubble sort can be practical if the input is in mostly sorted order with some out-of-order elements nearly in position. Bubble sort has a worst-case and average complexity of О(n2), where n is the number of items being sorted. Most practical sorting algorithms have substantially better worst-case or average complexity, often O(n log n). Even other О(n2) sorting algorithms, such as insertion sort, generally run faster than bubble sort, and are no more complex. Therefore, bubble sort is not a practical sorting algorithm. The only significant advantage that bubble sort has over most other algorithms, even quicksort, but not insertion sort, is that the ability to detect that the list is sorted efficiently is built into the algorithm."
    };

    document.querySelector("#alg-container .one-alg-box").innerHTML = `<img src=${bubble.screenshot} id="screenshot" alt="screenshot" />`;
    document.querySelector("#alg-container .name-label").innerHTML = "Algorithm: ";
    document.querySelector("#alg-container .alg-name").textContent = bubble.name;
    document.querySelector("#alg-container .complexity-label").textContent = "Complexity: ";
    document.querySelector("#alg-container .complexity").textContent = bubble.complexity;
    document.querySelector("#alg-container .desc-label").textContent = "Algorithm Description: ";
    document.querySelector("#alg-container .alg-description").textContent = bubble.desc;
}

function handleInsertion(e) {
    //e.preventDefault();
    let insertion = {
        name: "Insertion Sort",
        screenshot: ".\\slike\\InsertionSort.png",
        complexity: "O(n2)",
        desc: "Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain. Sorting is typically done in-place, by iterating up the array, growing the sorted list behind it. At each array-position, it checks the value there against the largest value in the sorted list (which happens to be next to it, in the previous array-position checked). If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct position within the sorted list, shifts all the larger values up to make a space, and inserts into that correct position."
    };

    document.querySelector("#alg-container .one-alg-box").innerHTML = `<img src=${insertion.screenshot} id="screenshot" alt="screenshot" />`;
    document.querySelector("#alg-container .name-label").textContent = "Algorithm: ";
    document.querySelector("#alg-container .alg-name").innerHTML = insertion.name;
    document.querySelector("#alg-container .complexity-label").textContent = "Complexity: ";
    document.querySelector("#alg-container .complexity").textContent = insertion.complexity;
    document.querySelector("#alg-container .desc-label").textContent = "Algorithm Description: ";
    document.querySelector("#alg-container .alg-description").innerHTML = insertion.desc;
}

function handleSelection(e) {
    e.preventDefault();
    let selection = {
        name: "Selection Sort",
        screenshot: ".\\slike\\Selectionsort.png",
        complexity: "O(n2)",
        desc: "In computer science, selection sort is a sorting algorithm, specifically an in-place comparison sort. It has O(n2) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited. The algorithm divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right."
    };

    document.querySelector("#alg-container .one-alg-box").innerHTML = `<img src=${selection.screenshot} id="screenshot" alt="screenshot" />`;
    document.querySelector("#alg-container .name-label").textContent = "Algorithm: ";
    document.querySelector("#alg-container .alg-name").textContent = selection.name;
    document.querySelector("#alg-container .complexity-label").textContent = "Complexity: ";
    document.querySelector("#alg-container .complexity").textContent = selection.complexity;
    document.querySelector("#alg-container .desc-label").textContent = "Algorithm Description: ";
    document.querySelector("#alg-container .alg-description").textContent = selection.desc;
}

function handleMerge(e) {
    e.preventDefault();
    let merge = {
        name: "Merge Sort",
        screenshot: ".\\slike\\MergeSort.png",
        complexity: "O(nlogn)",
        desc: "In computer science, merge sort (also commonly spelled mergesort) is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945. A detailed description and analysis of bottom-up mergesort appeared in a report by Goldstine and von Neumann as early as 1948. In sorting n objects, merge sort has an average and worst-case performance of O(n log n). If the running time of merge sort for a list of length n is T(n), then the recurrence T(n) = 2T(n/2) + n follows from the definition of the algorithm (apply the algorithm to two lists of half the size of the original list, and add the n steps taken to merge the resulting two lists). The closed form follows from the master theorem for divide-and-conquer recurrences. In the worst case, merge sort does about 39% fewer comparisons than quicksort does in the average case. In terms of moves, merge sort's worst case complexity is O(n log n)—the same complexity as quicksort's best case, and merge sort's best case takes about half as many iterations as the worst case."
    };

    document.querySelector("#alg-container .one-alg-box").innerHTML = `<img src=${merge.screenshot} id="screenshot" alt="screenshot" />`;
    document.querySelector("#alg-container .name-label").textContent = "Algorithm: ";
    document.querySelector("#alg-container .alg-name").textContent = merge.name;
    document.querySelector("#alg-container .complexity-label").textContent = "Complexity: ";
    document.querySelector("#alg-container .complexity").textContent = merge.complexity;
    document.querySelector("#alg-container .desc-label").textContent = "Algorithm Description: ";
    document.querySelector("#alg-container .alg-description").textContent = merge.desc;
}

function handleQuick(e) {
    e.preventDefault();
    let quick = {
        name: "Quick Sort",
        screenshot: ".\\slike\\QuickSort.png",
        complexity: "O(nlogn)",
        desc: "Quicksort is a sorting algorithms which uses divide-and-conquer paradigm, just like mergesort and heapsort algorithms. However, the majority of action happens in the partitionig step of the process, whereas the combining step dos hardly anything. The main advantage of quicksort is that it sorts in place, it's average running time is Θ(nlogn) and the constant factors hidden in big-omega notation are not big. The worst-case running time, which happens if the array is already sorted, is Θ(n^2). The algorithms works in two parts: first it partitions the array into two subarrays and then recursively calls the partition function on the subarrays until the array is sorted. After this there is no need for any action in the combining part. DIVIDE: an element from the original array A[p...r] is chosen. This element is called a pivot and is used as a reference for all other elements. The remainder of the array is compared with pivot and elements that are less than pivot are put on one, while the larger element are put on the other side. CONQUER: the previously explained procedure is called on created subarrays until the array is sorted."
    };

    document.querySelector("#alg-container .one-alg-box").innerHTML = `<img src=${quick.screenshot} id="screenshot" alt="screenshot" />`;
    document.querySelector("#alg-container .name-label").textContent = "Algorithm: ";
    document.querySelector("#alg-container .alg-name").textContent = quick.name;
    document.querySelector("#alg-container .complexity-label").textContent = "Complexity: ";
    document.querySelector("#alg-container .complexity").textContent = quick.complexity;
    document.querySelector("#alg-container .desc-label").textContent = "Algorithm Description: ";
    document.querySelector("#alg-container .alg-description").textContent = quick.desc;
}

function handleHeap(e) {
    e.preventDefault();
    let heap = {
        name: "Heap Sort",
        screenshot: ".\\slike\\HeapSort.png",
        complexity: "O(nlogn)",
        desc: "Heapsort is a sorting algorithm which uses a heap data structure. A heap is a partially (horizontally) ordered tree where each node contains one element and values of elements in nodes are at most as big as that of their parent. Heaps are represented as arrays, since arrays are space-efficient. Also, for a given index of a node it is easy to calculate the indices of its parent: i/2 and of its left: 2*i and right: 2*i+1 child. Heapsort algorithm contains two parts: heapifying and ordering(arranging). Heapifying is a procedure in which an unsorted arrys is turned into a heap. This is done by starting with one level above the last one, since the last level contains only leaves and leaves may be thought of as root nodes of subheaps(they have no children and are thus the largest element positioned in the root of the subtree). Each element of the starting level is compared with its children to see if any swaps need o be donein order to preserve the heap-property. If the swap is made, the element placed in the child node is bubbled-down to its proper position. The procedure continues up to the root. After the array has been made into a heap, it needs to be arranged. This is acchieved by swapping the last element with the root element, disregarding that last element as no longer a part of the heap, and bubbling-down the root element. This is kept up until there is only one element left in the heap. Starting from the first index, the array is now sorted in an ascending order."
    };

    document.querySelector("#alg-container .one-alg-box").innerHTML = `<img src=${heap.screenshot} id="screenshot" alt="screenshot" />`;
    document.querySelector("#alg-container .name-label").textContent = "Algorithm: ";
    document.querySelector("#alg-container .alg-name").textContent = heap.name;
    document.querySelector("#alg-container .complexity-label").textContent = "Complexity: ";
    document.querySelector("#alg-container .complexity").textContent = heap.complexity;
    document.querySelector("#alg-container .desc-label").textContent = "Algorithm Description: ";
    document.querySelector("#alg-container .alg-description").textContent = heap.desc;
}

document.querySelector("header nav a i").addEventListener('click', () => {
    document.querySelector("#side-menu").classList.toggle('active');
});