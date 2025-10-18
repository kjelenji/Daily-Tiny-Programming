//Day 20 of Daily Tiny Programming
#include <iostream>
int main() {
    int array[5] = {1,2,3,4,5};
    int val = 3;
    size_t n = sizeof(array) / sizeof(array[0]);
    for (size_t i = 0; i + 1 < n; ++i) {
        if (array[i] == val) {
            array[i] = array[i+1];
        }
    }

    std::cout << n << ", ";
    for (size_t i = 0; i < n; ++i) {
        std::cout << array[i] << (i + 1 < n ? " " : "");
    }
    std::cout << std::endl;
    return n;
}
