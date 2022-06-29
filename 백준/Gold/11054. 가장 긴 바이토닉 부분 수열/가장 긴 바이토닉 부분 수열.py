n = int(input())
numbers = list(map(int, input().split()))

increase = [1] * n
decrease = [1] * n

for i in range(n):
    for j in range(i):
        if numbers[i] > numbers[j]:
            increase[i] = max(increase[i], increase[j] + 1)
        if numbers[n-1-i] > numbers[n-1-j]:
            decrease[n-1-i] = max(decrease[n-1-i], decrease[n-1-j] + 1)

print(max([ a+b-1 for a,b in zip(increase, decrease) ]))