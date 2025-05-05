n = int(input())
num_list = list(map(int, input().split()))
oper_list = list(map(int, input().split()))

max_result = -float("inf")
min_result = float("inf")


def select_operator(result, index):
    global max_result, min_result

    if index == n:
        max_result = max(max_result, result)
        min_result = min(min_result, result)
        return

    if oper_list[0] > 0:
        oper_list[0] -= 1
        select_operator(result + num_list[index], index + 1)
        oper_list[0] += 1
    if oper_list[1] > 0:
        oper_list[1] -= 1
        select_operator(result - num_list[index], index + 1)
        oper_list[1] += 1
    if oper_list[2] > 0:
        oper_list[2] -= 1
        select_operator(result * num_list[index], index + 1)
        oper_list[2] += 1
    if oper_list[3] > 0:
        oper_list[3] -= 1
        select_operator(int(result / num_list[index]), index + 1)
        oper_list[3] += 1


select_operator(num_list[0], 1)
print(max_result)
print(min_result)