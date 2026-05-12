let COLOR = "FF0000";

const generateBoard = (grid) => {
    const board = document.querySelector("div.board-container");
    board.style.display = "flex";
    board.style.flexWrap = "wrap";
    board.style.width = "70vw";
    board.style.height = "70vw";
    for (let i = 0 ; i < grid**2; i++) {
        const box = document.createElement("div");
        box.classList = `grid-${i}`;
        box.style.height = `calc(100% / ${grid})`;
        box.style.width = `calc(100% / ${grid})`;
        box.style.boxShadow = "0 0 1px black";
        board.append(box);
    }
    addEventListeners();
};

const addEventListeners = () => {
    const boxes = document.querySelectorAll("div.board-container > div");
    boxes.forEach(box => {
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `#${COLOR}`;
        });
    });
};

const clearBoard = () => {
    const grids = document.querySelectorAll("div.board-container > div");
    grids.forEach((grid) => grid.remove());
}

const randomizeColor = () => {
    COLOR = Math.floor(Math.random()*16777215).toString(16);
};

generateBoard(12);