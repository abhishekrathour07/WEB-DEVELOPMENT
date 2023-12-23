#include <stdio.h>

void main()
{
    int a[3][3], b[3][3], c[3][3], i, j, sum = 0, k;
    printf("Enter 9 elements for A matrix: ");
    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++)
            scanf("%d\n", &a[i][j]);

    printf("Enter 9 elements for B matrix: ");
    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++)
            scanf("%d\n", &b[i][j]);

    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++)
        {
            for (k = 0; k < 3; k++)
                sum = sum + a[i][k] * b[k][j];

            c[i][j] = sum;
        }
    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++)
            printf("%d\t", c[i][j]);
}
