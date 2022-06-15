s = input()
for i in range(len(s)//10):
    print(s[0:10])
    s = s[10:]
print(s)