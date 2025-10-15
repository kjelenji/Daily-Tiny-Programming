//Day 17 of Daily Tiny Programming
// This program calculates the factorial of a given non-negative integer.
#include <iostream>
int main() {
    long num;
    long output = 0;
    std::cout << "Enter a non-negative integer: ";
    std::cin >> num;
    if (num > 0) {
        output = 1;
        for (long i = 1; i <= num; ++i) {
            output *= i;
        }
    }
    std::cout << "Factorial is: " << output;

}
