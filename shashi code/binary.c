#include <stdio.h>

void main()
{
    int a[10], i, n, low, midd, high, search;
    printf("Enter size of elements:");
    scanf("%d", &n);
    printf("Enter elements of array:");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }
    printf("Enter no. for search:");
    scanf("%d", &search);
    low = 0;
    high = n - 1;
    midd = (low + high) / 2;
    while (low <= high)
    {
        midd = (low + high) / 2;
        if (a[midd] == search)
        {
            printf("%d elememts is spotted on %d index", search, midd);
            break;
        }
        else if (search > a[midd])
        {
            low = midd + 1;
        }
        else
        {
            high = midd - 1;
        }
    }
}