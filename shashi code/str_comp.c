#include <stdio.h>
#include <string.h>
/* write a string to copmare between to string*/
void main()
{
  char str[20];
  char str2[20];
  puts("Enter S1");
  gets(str);
  puts("Enter S2");
  gets(str2);
  int i = strcmp(str, str2);
  printf("%d", i);
}