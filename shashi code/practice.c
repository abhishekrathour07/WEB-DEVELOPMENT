#include <stdio.h>

void main()
{
  int a[20], i, n, pos;
  printf("Enter size of array:");
  scanf("%d", &n);
  printf("Enter elements of array:");
  for (i = 0; i < n; i++)
  {
    scanf("%d", &a[i]);
  }
  printf("Enter position delete:");
  scanf("%d", &pos);
  for (i = (pos - 1); i < n; i++)
  {
    a[i] = a[i + 1];
  }
  n--;
  printf("array after delete element");
  for (i = 0; i < n; i++)
    printf("%d ", a[i]);
}