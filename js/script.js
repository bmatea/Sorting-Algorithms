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
        screenshot: ".\\slike\\bubble.png",
        complexity: "O(n2)",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    };

    document.querySelector("#alg-container .one-alg-box").innerHTML = `<img src=${bubble.screenshot} alt="screenshot" />`;
    document.querySelector("#alg-container .name-label").textContent = "Algorithm: ";
    document.querySelector("#alg-container .alg-name").textContent = bubble.name;
    document.querySelector("#alg-container .complexity-label").textContent = "Complexity: ";
    document.querySelector("#alg-container .complexity").textContent = bubble.complexity;
    document.querySelector("#alg-container .desc-label").textContent = "Algorithm Description: ";
    document.querySelector("#alg-container .alg-description").textContent = bubble.desc;

}

function handleInsertion(e) {

}

function handleSelection(e) {

}

function handleMerge(e) {

}

function handleQuick(e) {

}

function handleHeap(e) {

}

document.querySelector("header nav a i").addEventListener('click', () => {
    document.querySelector("#side-menu").classList.toggle('active');
});