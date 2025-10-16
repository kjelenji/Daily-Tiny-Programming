//Day 19 of Daily Tiny Programming
//Conditions: 4 horseshoes of different colors
//lowest price possible
#include <iostream>
main() {
    std::cout << "Enter four integers with spaces in between: ";
    int a, b, c, d;
    int count = 0;
    std::cin >> a >> b >> c >> d;
    if (a == b || a == c || a == d) ++count;
    if (b == c || b == d) ++count;
    if (c == d) ++count;
    std::cout << count;
    return 0;
}
