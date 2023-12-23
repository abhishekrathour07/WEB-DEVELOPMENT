#include <stdio.h>

struct student
{
    int roll;
    char name[20];
    float mark;
};


void main()
{
   struct student s[20];
   int n,i;
   printf("Enter the no of student \n");
   scanf("%d",&n);
   for(i=0;i<n;i++){
   printf("Enter the student detail %d",i+1);
   printf("Ente roll,name and marks:");
   scanf("%d",&s[i].roll);
   scanf("%s",&s[i].name);
   scanf("%f",&s[i].mark);
   }
     for(i=0;i<n;i++){
      printf("\n %d,%s,%f",s[i].roll,s[i].name,s[i].mark);
}

}