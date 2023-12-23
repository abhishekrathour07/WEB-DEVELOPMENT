#include <stdio.h>
#include <string.h>
/* Write a string to print leanght of string*/
void main()
{
    char str[20];
    puts("Enter name ");
    gets(str);
    int i = strlen(str);
    printf("%d", i);
}