//Day 18 of Daily Tiny Programming

//Conditions:
//1. At least 2 of them need to be sure of the solution

//Input:
//1. first input contains a single integer n (1<=n<=1000)
//2. n lines contain 3 integers each, (either 0 or 1) like (110)
#include <iostream>
int main() {
    int n;
    std::cin >> n;
    int firstNum = 0;
    int secondNum = 0;
    int thirdNum = 0;
    int numSol = 0;
    for (int i = 0; i < n; ++i) {
        std::cin >> firstNum >> secondNum >> thirdNum;
        if (firstNum + secondNum + thirdNum >= 2) {
            ++numSol;
        }
    }
    std::cout << numSol;
    return 0;
    
}
