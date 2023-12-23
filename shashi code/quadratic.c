#include <stdio.h>
#include <math.h>

void main()
{
    int a, b, c;
    float disc, r1, r2;
    printf("Enter co efficieant numbers:");
    scanf("%d%d%d", &a, &b, &c);
    if (a == 0)
    {
        printf("Not a quadratic equ.");
    }
    else
    {
        disc = b * b - 4 * a * c;
        if (disc < 0)
        {
            printf("Complex root\n");
            r1 = -b / 2.0 * a;
            r2 = sqrt(disc);
            printf("Root1 = %f\n Root2 = %f", r1, r2);
        }
        else if (disc == 0)
        {
            printf("Real and equal\n");
            r1 = -b / 2.0 * a;
            printf("Root1 = %f\n Root2 = %f", r1, r1);
        }
        else
        {
            printf("Real and unequal\n");
            r1 = (-b + sqrt(disc)) / (2 * a);
            r2 = (-b - sqrt(disc)) / (2 * a);
            printf("Root1 = %f\n Root2 = %f", r1, r2);
        }
    }
}