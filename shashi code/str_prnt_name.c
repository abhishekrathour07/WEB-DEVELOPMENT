#include <stdio.h>
#include <string.h>

void main()
{
    char str[3][10];
    int i;
    for (i = 0; i < 3; i++)
    {
        gets(str[i]);
    }
    for (i = 0; i < 3; i++)
    {
        printf("%s\n", str[i]);
    }
}