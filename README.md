# Pre-work - *Memory Game*

**Omar's Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Omar Torres**

Time spent: **5** hours spent in total

Link to project: (https://glitch.com/edit/#!/rare-inky-orbit)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Win: For length purposes, example was stopped at 4 clues
![Win: For length purposes, example was stopped at 4 clues](https://github.com/omart980/LightSound/blob/main/Win(4).gif)

Start/Stop
![Start/ Stop](https://github.com/omart980/LightSound/blob/main/Start:Stop%20.gif)

Lose
![Lose](https://github.com/omart980/LightSound/blob/main/Lose%20.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[I used StackOverflow.com to figure out some of the optional components.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[I think what was most challenging was figuring out how to implement the random function. I wanted to have a function where each time the 
game resets, a new pattern would appear and start at random. It was difficult for me to implement it, but thanks to the resource listed 
above, I was able to get some guidance and figure it out. I only needed to make a function and then make another loop statement underneath 
the method. When I was testing this solution, it worked and I saw the results various times each time I reset the game. 
that started the game. 
Another challenge that I encountered was using the console log. In the beginning, I had a few errors where I did not get the clear output 
I wanted. Instead, it was the wrong number of guesses. I had to manually look over the steps and using Stack Overflow, I was able to 
figure out the issue. The issue I had was a sort of syntax error in one of my functions that misplaced my calling judgment. I was quickly 
able to fix this issue by changing the output and testing if the control log output was correct.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[Will we build similar applications such as this example? What kind of websites will we be doing (as in for what field)?
Will there be a good emphasize on mobile development if needed? How many projecs per day will we be completing?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[I think I would focus on continuing to figure out the remaining optional steps. It was quite challenging to figure out
all of the steps. Perhaps, I could use React.js to publish this application and share it to my friend's to test it. Then,
I could gather some feedback as to what could be improved. I was also thinking that at the start of the game, the screen will turn black
and clue in the colors for each box. Then, when the clues stop, the original screen comes back and the user must choose which box lit up.
This process will repeat until the game ends.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1-329Tg3MRjrpzTy8otidMW4mmmMalKSZ/view?usp=sharing)
[Side note: may need to download it]


## License

    Copyright [Omar Torres]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
