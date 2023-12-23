#include <stdio.h>

int fact(int n)
{
  
    if (n == 0 || n == 1)
        return 1;
    
    return n * fact(n-1);
    }
void main()
{
    int n;
    printf("enter number for fact:");
    scanf("%d", &n);
    printf("Factorial = %d", fact(n));
}