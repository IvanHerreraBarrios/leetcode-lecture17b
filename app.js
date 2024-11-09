var numTilePossibilities = function(tiles) {
    return rec(tiles)
};


function rec(tiles){
    if(tiles.length === 1){
        return 1
    }

    let sum = 0
    for(let i=0; i < tiles.length; i++){
        console.log(tiles.slice(0, i), tiles.slice(i+1) )
        let result = rec(tiles.slice(0, i) + tiles.slice(i+1))
        sum += result + 1
        console.log(sum, "sum")
    }
    return sum
}

//  version 2

var numTilePossibilities = function(tiles) {
    return rec(tiles)
};


function rec(tiles){
    if(tiles.length === 1){
        return 1
    }

    const visited = {}

    let sum = 0
    for(let i=0; i < tiles.length; i++){
        let current = tiles[i]

        if(!visited[current]){
            let result = rec(tiles.slice(0, i) + tiles.slice(i+1))
            sum += result + 1
            visited[current] = true
        }
        
    }
    return sum
}


//version 2
var numTilePossibilities = function(tiles) {
    return rec(tiles)
};


function rec(tiles){
    if(tiles.length === 1){
        return 1
    }

    const visited = {}

    let sum = 0
    for(let i=0; i < tiles.length; i++){
        let current = tiles[i]

        if(!visited[current]){
            let result = rec(tiles.slice(0, i) + tiles.slice(i+1))
            sum += result + 1
            visited[current] = true
        }
        
    }
    return sum
}