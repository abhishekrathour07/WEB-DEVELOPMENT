#include <stdio.h>
void main()
{
   int n, i, c = 0;
   printf("enter number:");
   scanf("%d", &n);
   for (i = 2; i < n; i++)
   {
      if (n % i == 0)
      {
         printf("Not a prime number");
         c = 1;
         break;
      }
      if (c == 0)
      {
         printf("Prime number");
         break;
      }
   }
   if (n == 0 || n == 1)
   {
      printf("Not a prime number");
   }
   if (n == 2)
      printf("Prime number");
}
