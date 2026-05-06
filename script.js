const generateBoard = (grid) => {
    const board = document.querySelector("div.board-container");
    for (let i = 0 ; i < grid; i++) {
        const box = document.createElement("div");
        box.classList = `grid-${i}`;
        box.style.height = "10px";
        box.style.width = "10px";
        board.append(box);
    }
};

const addEventListeners = () => {
    const boxes = document.querySelectorAll("div.board-container > div");
    boxes.forEach(box => {
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "red";
        })
    })
}

generateBoard(12);
addEventListeners();