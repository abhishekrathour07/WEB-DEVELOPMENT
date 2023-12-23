#include <stdio.h>
#include <stdlib.h>
struct queue
{
    int q[10];
    int front, rear;
} q1;
int queueempty()
{
    if (q1.front == -1 && q1.rear == -1)
        return 1;
    else
        return 0;
}
int queuefull()
{
    if (q1.rear == 9)
        return 1;
    else
        return 0;
}
void enqueue()
{
    int i, x;
    i = queuefull();
    if (i == 0)
    {
        q1.rear++;
        printf("Enter element for insert:");
        scanf("%d", &x);
        if (q1.rear == 0)
            q1.front = 0;
    }
    else
        printf("Queue if full");
}
void dequeue()
{
    int i, x;
    i = queueempty();
    if (i == 0)
    {
        x = q1.q[q1.front];
        printf("deletion element is %d\n", x);
        q1.front++;
        if (q1.front == q1.rear + 1)
        {
            q1.front = -1;
            q1.rear = -1;
        }
    }
    else
        printf("Queue is empty");
}
void display()
{
    int i;
    for (i = q1.front; i <= q1.rear; i++)
        printf("%d\t", q1.q[i]);
}
void main()
{
    int q1.rear=-1;
    int q1.front=-1;

}