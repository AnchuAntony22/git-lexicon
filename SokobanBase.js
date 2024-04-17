
/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/

/*   Enum of CSS Classes for the static elements   */
var Tiles = {
    Wall: "tile-wall",
    Space: "tile-space",
    Goal: "tile-goal"
};

/*   Enum of CSS Classes for the moving elements   */
var Entities = {
    Character: "entity-player",
    Block: "entity-block",
    BlockDone: "entity-block-goal"
};

/*  Legend
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
*/
var tileMap01 = {
    width: 19,
    height: 16,
    mapGrid: [
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], ['B'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], ['W'], [' '], [' '], ['B'], [' '], ['B'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [['W'], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
    [['W'], [' '], ['B'], [' '], [' '], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['G'], ['G'], ['W']],
    [['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], [' '], ['W'], ['P'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
    [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
    ]
};
document.addEventListener("DOMContentLoaded", () => {
    const generateMapElements = tileMap => {
        const mapContainer = document.createElement("div");
        mapContainer.id = "map-container";
    
        const rows = tileMap.mapGrid.map((row, rowIndex) => {
            const rowElement = document.createElement("div");
            rowElement.className = "row";
     
            const tiles = row.map((column, columnIndex) => {
                const tileElement = document.createElement("div");
                tileElement.className = getColumnClass(column);
                tileElement.id = 'tile-' + rowIndex + '-' + columnIndex;
                rowElement.appendChild(tileElement);
                return tileElement;
            });
    
            
            mapContainer.appendChild(rowElement);
            return rowElement;
        });
    
        return mapContainer;
    };
  
    const getColumnClass = column => ({
        'W': Tiles.Wall,
        'B': Entities.Block,
        'P': Entities.Character,
        'G': Tiles.Goal,
    }[column] || Tiles.Space);

    const mapContainer = generateMapElements(tileMap01);
    document.body.appendChild(mapContainer);
});

let playerPosition = { x: 11, y: 11 }; 


const calculateNewPosition = (direction, currentPosition) => {
    const newPosition = { ...currentPosition }; 

    if (direction === 'left') {
        newPosition.x--;
    } else if (direction === 'right') {
        newPosition.x++;
    } else if (direction === 'up') {
        newPosition.y--;
    } else if (direction === 'down') {
        newPosition.y++;
    }

    return newPosition;
};



const movePlayer = (direction) => {
    const newPosition = calculateNewPosition(direction, playerPosition);

    if (isValidMove(newPosition)) {
        
        const currentTile = document.getElementById('tile-' + playerPosition.y + '-' + playerPosition.x);

        if (tileMap01.mapGrid[newPosition.y][newPosition.x][0] === 'B') {
            const newBlockPosition = calculateNewPosition(direction, newPosition);
            if (isValidMove(newBlockPosition)) {
                
                updatePlayerPosition(newPosition);
                updateBlockPosition(newBlockPosition);
            }
        } else {
            
            updatePlayerPosition(newPosition);
        }

        currentTile.classList.remove(Entities.Block);
    }
};



const isValidMove = ({ x, y }) => {
    return tileMap01.mapGrid[y][x][0] !== 'W';
};


const updatePlayerPosition = (newPosition) => {
  
   
    document.getElementById('tile-' + playerPosition.y + '-' + playerPosition.x).classList.remove(Entities.Character);
    playerPosition = newPosition;
    document.getElementById('tile-' + newPosition.y + '-' + newPosition.x).classList.add(Entities.Character);
};


const updateBlockPosition = (newPosition, oldPosition) => {
   
    if (oldPosition) {
        
        if (!isCharacterAtPosition(oldPosition)) {
            document.getElementById('tile-' + oldPosition.y + '-' + oldPosition.x).classList.remove(Entities.Block);
            document.getElementById('tile-' + oldPosition.y + '-' + oldPosition.x).classList.add(Tiles.Space);
            tileMap01.mapGrid[oldPosition.y][oldPosition.x][0] = ' '; 
        }
    }
 
    tileMap01.mapGrid[newPosition.y][newPosition.x][0] = 'B';

    const blockTile = document.getElementById('tile-' + newPosition.y + '-' + newPosition.x);
    blockTile.classList.add(Entities.Block);
};

const isCharacterAtPosition = (position) => {
    return tileMap01.mapGrid[position.y][position.x][0] === 'P';
};


document.addEventListener('keydown', (event) => {
    const direction = getDirectionFromKey(event.key);
    if (direction) movePlayer(direction);
});

const getDirectionFromKey = (key) => ({
    'ArrowUp': 'up',
    'ArrowDown': 'down',
    'ArrowLeft': 'left',
    'ArrowRight': 'right'
}[key]);

