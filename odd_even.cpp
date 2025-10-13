//Day 16 of Daily Tiny Programming
#include <iostream>
int main() {
    int num;
    std::cout << "Enter an integer: ";
    std::cin >> num;
    if (num % 2 == 0)
        std::cout << num << " is even.";
    else 
    std::cout << num << " is odd.";
}
