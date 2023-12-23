#include <stdio.h>

void main()
{
    int a[20], i, n, x, pos;
    printf("Enter array size:");
    scanf("%d", &n);
    printf("Enter elements of array:");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    } 
    printf("Enter value of pos:");
    scanf("%d",&pos);
    x = a[pos - 1];
    printf("Deleting item = %d\n", x);
    for (i = pos - 1; i < n; i++)
    {
        a[i] = a[i + 1];
        n--;
    }
    for(i=0; i<n; i++){
        printf("%d\t",a[i]);
    }
}