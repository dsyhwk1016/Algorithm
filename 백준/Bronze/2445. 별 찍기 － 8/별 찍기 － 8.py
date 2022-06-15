n = int(input())
for i in reversed(range(1, n)):
    print('*'*(n-i)+' '*(2*i)+'*'*(n-i))
for i in range(n):
    print('*'*(n-i)+' '*(2*i)+'*'*(n-i))