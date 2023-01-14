def solution(X, Y):
    answer = ""
    for i in range(0, 10):
        i_str = str(i)
        num = min(X.count(i_str), Y.count(i_str))
        
        answer = i_str*num + answer

    if answer == "":
        return "-1"
    if answer < "1":
        return "0"
    return answer