n = int(input())
for i in range(n):
    print((' '*i).ljust(2*n-i-1, '*'))
for i in reversed(range(n-1)):
    print((' '*i).ljust(2*n-i-1, '*'))