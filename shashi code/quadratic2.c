#include<stdio.h>
#include<math.h>
void main()
{
    int a,b,c;
    float disc,r1,r2;
    printf("enter the value of a,b,c\n");
    scanf("%d%d%d",&a,&b,&c);
    disc=(b*b)-(4*a*c);
    if(disc>=0)
    {
        if(disc>0)
        {
            printf("here we have two roots since our discriminant is greater than zero\n");
            r1=(-b+sqrt(disc))/2*a;
            r2=(-b-sqrt(disc))/2*a;
            printf("%f\n%f",r1,r2);


        }
        else
        {
            printf("you have an equal roots here ");
            r1=r2=-b/(2*a); 
            printf("%f\n%f",r1,r2);
        }
    }
    else
    {
        printf("you have an immaginary roots");
    }
}