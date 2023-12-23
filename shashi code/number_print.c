#include <stdio.h>
void main()
{
    int a, b, i;
    printf("Enter a ,b \n");
    scanf("%d%d", &a, &b);
    if (a >= 1 && a <= 9)
    {
        for (i = a; i <= 9; i++)
        {
            if (a == 1)
            {
                printf("one\n");
            }
            else if (a == 2)
            {
                printf("two\n");
            }
            else if (a == 3)
            {
                printf("three\n");
            }
            else if (a == 4)
            {
                printf("four\n");
            }
            else if (a == 5)
            {
                printf("five\n");
            }
            else if (a == 6)
            {
                printf("six\n");
            }
            else if (a == 7)
            {
                printf("seven\n");
            }
            else if (a == 8)
            {
                printf("eight\n");
            }
            else if (a == 9)
            {
                printf("nine\n");
            }
            a++;
        }
    }
    if (b > 9)
    {
        for (i = 10; i < b; i++)
        {
            if (i % 2 == 0)
            {
                printf("even\n");
            }
            else
            {
                printf("odd\n");
            }

        }
    }
}