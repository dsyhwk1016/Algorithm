def cantor(n):
    if n <= 1:
        return "-"
    else:
        unit = cantor(n // 3)
        return unit + " " * (n // 3) + unit


while True:
    try:
        N = int(input())
        print(cantor(3**N))
    except:
        break