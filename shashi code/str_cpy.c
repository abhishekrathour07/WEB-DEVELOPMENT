#include <stdio.h>
#include <string.h>
/* Write s string to copy a string to another string*/
void main()
{
    char str1[20];
    char str2[20];
    puts("Enter str1 name: ");
    gets(str1);
    puts(strcpy(str2, str1));
}