#include <stdio.h>
#include <string.h>
struct cust
{
    int id;
    char name[20];
    float bal;
};
void main()
{
    struct cust c[20];
    int i, n;
    printf("Enter no. of Coustmer:");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("Enter detail of %d cust:\n", i + 1);

        printf("Enter id:");
        scanf("%d", &c[i].id);
        getchar();
        printf("Enter name:");
        scanf("%s", &c[i].name);
        printf("Enter bal:");
        scanf("%0.2f", &c[i].bal);
    }
    printf("Id\tName\tBalance\n");
    for (i = 0; i < n; i++)
    {
        printf("%d\t%s\t%0.f", c[i].id, c[i].name, c[i].bal);
    }
}