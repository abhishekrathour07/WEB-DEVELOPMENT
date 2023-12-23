#include <stdio.h>
void main()
{
    int a[20], i, j, n, temp;
    printf("Enter size of array:");
    scanf("%d", &n);
    printf("Enter elements in array:\n");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }
    for (i = 0; i < n - 1; i++)
    {
        for (j = 0; j < n - 1; j++)
        {
            if (a[j] > a[j + 1])
            {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    printf("Array elements after shorting:");
    for (i = 0; i < n; i++)
    {
        printf("%d ", a[i]);
    }
}