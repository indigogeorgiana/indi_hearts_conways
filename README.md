# My journey into the Indi's Game of Life began like this ...

## Check out others creations of Conway's Game of life, these are totally epic.

Example of Conway's [here](http://pmav.eu/stuff/javascript-game-of-life-v3.1.1/)
Also another breathtaking implementation [here](https://copy.sh/life/?gist=f3413564b1fa9c69f2bad4b0400b8090&step=512).

My interest was piqued, I loved what I saw and wanted to create something that I could make my own. However, I had to be realistic about what I could achieve and decided along with Don our great tutor to start small.

For anyone who is not familiar with the universe that is the Game of Life it is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Populated and unpopulated, respectively. 

Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

    - Any live cell with fewer than two live neighbors dies, as if by under population.
    - Any live cell with two or three live neighbors lives on to the next generation.
    - Any live cell with more than three live neighbors dies, as if by overpopulation.
    - Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

## Build it and they will come, or so I believed!

I, yes me Indigo was going to tackle the task of making my very own version of Conway's Game of Life. I would be able to  render the game out to the console at first. But I had no way of knowing how far I could really take it. 

Before I could start I needed to think about how this work. What are the things you're going to need to build? 

Are you going to start big and drill down (from the board down to a cell and its neighbours), or start small and expand (from a cell and its neighbours to the board)? There is no right answer, just your preference.

Regardless of where you start, focus on a single task. If that task feels overwhelming, break it down into smaller tasks. Try to come up with as many small tasks as you can. When you start to write code, be very intentional about what you aim to achieve.

## First I had to learn the rules...

See the rules section of [the Wikipedia article](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules). The rules are amazingly simple but with those simple rules some pretty cool complexity emerges.

Note that a rule for our system is that array indices should not _wrap around_ the edges. That means when counting a cell's neighbours that a corner cell will have only three neighbours and an edge cell will have five neighbours. The rest will have eight.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.

<details>
  <summary>Show me some tips</summary>

  These are some of the tasks you'll need to complete (in no particular order). Don't show more details until you have opinion about how you'll accomplish a specific task.

  * **creating a board**

    <details>
      <summary>Show more details</summary>

      There are a couple of ways you can approach this. The most common is to use an array of arrays to create a matrix of rows and columns. Each item in the inner array is an object that represents a cell. The other way is to use a single long array. Each approach has advantages and disadvantages. With the matrix you'll have nested loops (outer loop being rows and inner loop being columns), but you'll be able to reference a cell with row/col (x/y) coordinates. Using a single array means you won't have nested arrays, but you'll have to calculate the location of every cell using the size of the board.

      You will either want to start with a specific board state or a random board. While you're creating the cells of the board, you should have a function that either a random value or a predefined one. If you want to use a predefined one, you might consider hard coding the matrix into its own file and importing (requiring) it.

    </details>

  * **displaying a board (in a loop)**

    <details>
      <summary>Show more details</summary>

      You need to loop over each of the cells, but you can decide to print a row at a time with `console.log` or each cell using `process.stdout.write`. If you use `stdout`, you can use `\n` to end a line.

    </details>

  * **determining if a cell is on an edge**

    <details>
      <summary>Show more details</summary>

      The first row is 0. So if you decrement the row of any cell and it is less than 0, you know the cell is on the top edge. The same is true for the first column. To determine if a cell is on the right or bottom edge, you'll need to know the size of the board. If the board isn't square, you'll need the wiidth and height of the board.

    </details>

  * **counting the number of neighbours that are alive**

    <details>
      <summary>Show more details</summary>

      This is just a matter of looping over all of the neighbours and checking their state. 

    </details>

  * **getting a list of all of the neighbours of a cell**

    <details>
      <summary>Show more details</summary>

      To do this you're going to need to know if the cell in question is on an edge because this will determine how many neighbours it has. One approach is to increment and decrement the row and column of the current cell and determine if it is valid based on the size of the board. If it's valid, it's a neighbour.

    </details>

  * **determining the next state of a cell based on its neighbours**

    <details>
      <summary>Show more details</summary>

      To know the next state of the cell, you need to know how many alive neighbours it has. You'll also need a function that can return the next state based on the number of alive neighbours.

    </details>

</details>


## Printing to the console

* Printing to the console and getting the formatting right will be a challenge. Your instructor can help if needed, but try it for yourself first. Check out the Node package [clear](https://www.npmjs.com/package/clear).


## Stretch ideas

* Can you get it working in the browser? Feel free to consult with an instructor for help before you start.

* Can you write it without loops?


## Resources

* [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

