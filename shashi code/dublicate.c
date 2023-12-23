#include <stdio.h>

void main()
{
    int a[20], i, n, j, k;
    printf("Enter size of aaray:");
    scanf("%d", &n);
    printf("Ente array elemnets:");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }
    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (a[i] == a[j])
            {
                for (k = j; k < n; k++)
                {
                    a[k] = a[k + 1];
                }
                n--;
                j--;
            }
        }
    }
    printf("Array after delete dublicate items:\n");
    for (i = 0; i < n; i++)
    {
        printf("%d\t", a[i]);
    }
}