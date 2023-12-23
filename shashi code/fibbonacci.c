#include <stdio.h>

int fibb(int n)
{
    if (n ==  0)
        return 0;
    else if(n==1)
     return 1;
     else
    return fibb(n - 1) + fibb(n - 2);
}
void main()
{
    int n;
    printf("enter number for fibbonacci:");
    scanf("%d", &n);
    for(int i=0;i<n;i++)
    printf(" %d\t", fibb(i));
}