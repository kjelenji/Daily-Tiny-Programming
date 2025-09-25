#DAY 1 OF DAILY TINY PROGRAMMING 
#let's play rock, paper, and scissors!
#Tips to Play (According to Numberphile)
#1. Winners repeat their strategy
#2. Losers change their strategy
#So if you lose, play the thing that didn't come up 
#So if you win, play what your competitor just played
#Wait, you're playing with a computer and this is based on a study of 360 HUMAN students 
#... Good luck!

#mark each option by number
#rock for 1, paper for 2, scissors for 3
#user can only type r(1), p(2), or s(3)

import random
i = 0
user = 0
computer = 0

while(i<3):
    user_choice = input("Please enter rock (1), paper (2), or scissors (3).\n")
    user_choice = int(user_choice)
    computer_choice = random.randint(1,3)
    print("The computer chose " + str(computer_choice))
    if (user_choice == 1 and computer_choice == 3) | (user_choice == 2 and computer_choice == 1) | (user_choice == 3 and computer_choice == 2):
        user += 1
    elif (user_choice == 1 and computer_choice == 2) | (user_choice == 2 and computer_choice == 3) | (user_choice == 3 and computer_choice == 1):
        computer += 1
    else:
        user += 0
        computer += 0
    i += 1

WINS_SUFFIX = " wins"
if user > computer:
    print("You win! You have " + str(user) + WINS_SUFFIX)
elif user == computer:
    print("It's a tie! You have " + str(user) + WINS_SUFFIX)
else:
    print("You lose! You have " + str(user) + WINS_SUFFIX)
    
    
    
        
    

