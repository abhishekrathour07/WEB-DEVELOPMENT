#include <stdio.h>
#include <stdlib.h>
struct stack
{
  int s[10];
  int top;
} s1;
int stackempty()
{
  if (s1.top == -1)
    return 1;
  else
    return 0;
}
int stackfull()
{
  if (s1.top == 9)
    return 1;
  else
    return 0;
}
void pop()
{
  int i, x;
  x = stackempty();
  if (x == 0)
  {
    i = s1.s[s1.top];
    printf("deleted element is %d\n", i);
    s1.top--;
  }
  else
    printf("Stack is empty\n");
}
void push()
{
  int i, x;
  x = stackfull();
  if (x == 0)
  {
    s1.top++;
    printf("Enter element for push\n");
    scanf("%d", &i);
    s1.s[s1.top] = i;
  }
  else
    printf("Stack is full\n");
}
void count()
{
  printf("The no. of element in stack is %d\n", s1.top);
}
void display()
{
  for (int i = s1.top; i >= 0; i--)
    printf("Elements in stack are = %d \n", s1.s[i]);
}
int main()
{
  int choice;
  s1.top = -1;
  while (1)
  {
    printf("Enter your choice\n 1.pop\n 2.push\n 3.count\n 4.display\n 5.exit\n");
    scanf("%d", &choice);
    switch (choice)
    {
    case 1:
      pop();
      break;
    case 2:
      push();
      break;
    case 3:
      count();
      break;
    case 4:
      display();
      break;
    case 5:
      exit(1);
      break;
    }
  }
}