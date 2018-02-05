/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

var robotPaths = function(n, board, i, j) {
  let count = 0;
  
  let check = (i, j) => {
    if ( i === n - 1  && j === n - 1 ) {
      count++
    } else {
      if ( !board[i][j] ) {
        board.togglePiece(i, j)
        if ( i-1 >= 0) {
          if ( !board[i-1][j] ) {
            check( i-1, j );
          }
        }
        if ( j+1 < n ) {
          if ( !board[i][j+1] ) {
            check( i, j+1 );
          }
        }
        if ( i+1 < n ) {
          if ( !board[i+1][j] ) {
            check( i+1, j ) 
          }
        }
        if ( j-1 >= 0 ) {
          if ( !board[i][j-1] ) {
            check( i, j-1 )
          }
        }
        board.togglePiece(i, j)
      }
    }
  }
  check(i, j)
  return count;
}

console.log( robotPaths(3, makeBoard(3), 0, 0) );

