let COLOR = "FF0000";
let GRID_SIZE = 12;

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
};

const randomizeColor = () => {
    COLOR = Math.floor(Math.random()*16777215).toString(16);
};

const updateGridSizeNumber = (size) => {
    const gridText = document.querySelector("p.grid-number > span");
    gridText.textContent = GRID_SIZE + " x " + GRID_SIZE;
};

(function() {
    const gridSizeButton = document.querySelector("button.grid-button");
    gridSizeButton.addEventListener("click", () => {
        GRID_SIZE = prompt("Input size of grid");
        if (GRID_SIZE <= 0 || GRID_SIZE > 100) {
            alert("Grid size cannot be less than 0 or greater than 100");
            return;
        }
        updateGridSizeNumber(GRID_SIZE);
        clearBoard();
        generateBoard(GRID_SIZE);
    });
})();

generateBoard(GRID_SIZE);