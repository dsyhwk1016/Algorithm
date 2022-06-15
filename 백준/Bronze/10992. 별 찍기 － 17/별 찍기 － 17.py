n = int(input())
for i in range(1, n):
    if i==1:
        print('*'.rjust(n, ' '));
    else:
        print('*'.rjust(n-i+1, ' ') + '*'.rjust((i-1)*2,' '))
print('*'*(2*n-1))