n = int(input())
for i in range(1, n+1):
    print(('*'*i).rjust(n, ' '))
for i in reversed(range(1, n)):
    print(('*'*i).rjust(n, ' '))