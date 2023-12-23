#include <stdio.h>
#include <string.h>
/* Write a string to add two string */
void main()
{
    char str1[20], str2[20];
    puts("ente s1 ");
    gets(str1);
    puts("enter s2");
    gets(str2);
    puts(strcat(str1, str2));
}