# Password Puzzle Game

This is a simple password puzzle game created with HTML, Tailwind CSS, and JavaScript. The goal of the game is to crack a 3-digit password by analyzing hints provided in the interface. The user has **only 3 attempts** to guess the correct password.

## Features

- **Interactive Puzzle Interface**: The interface shows hints about the password, which users can use to deduce the correct code.
- **Limited Attempts**: Users have a maximum of **3 attempts** to guess the password correctly. After 3 incorrect attempts, access is locked, and they cannot try again.
- **Real-Time Feedback**: After each attempt, users receive feedback on whether their guess was correct or incorrect, along with the remaining attempts.

## How to Play

1. **Analyze the Hints**: 
   - Look at the hints provided in the grid. Each hint will give information on which numbers are correct and whether they are in the correct or incorrect position.
2. **Enter the Password**:
   - Type a 3-digit number into the input box based on the hints.
3. **Check Your Password**:
   - Click the "Check Password" button to see if your guess is correct.
   - If your guess is correct, a success message will be displayed.
4. **Limited Attempts**:
   - If your guess is incorrect, you will see a message showing how many attempts are left.
   - After 3 incorrect attempts, the input and button are disabled, and the game will display a "locked out" message.

## Installation and Usage

1. Clone or download this repository.
2. Open the `index.html` file in your web browser to play the game.

## Technologies Used

- **HTML**: For creating the structure of the game.
- **Tailwind CSS**: For styling the game interface.
- **JavaScript**: For handling game logic, including checking the password and tracking the number of attempts.

## Example Walkthrough

The game provides five hints to help you deduce the correct 3-digit code:

1. **682**: One number is correct and well placed.
2. **614**: One number is correct but wrongly placed.
3. **206**: Two numbers are correct but wrongly placed.
4. **738**: Nothing is correct.
5. **780**: One number is correct but wrongly placed.


---

Enjoy solving the puzzle!
