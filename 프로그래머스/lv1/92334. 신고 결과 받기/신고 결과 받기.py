def solution(id_list, report, k):
    n = len(id_list)
    answer = [0] * n
    
    temp = {}
    for r in report:
        a, b = r.split()
        
        if b in temp:
            if a not in temp[b]:
                temp[b].append(a)
        else:
            temp[b] = [a]
    
    for key in temp:
        l = len(temp[key])
        if l >= k:
            for v in temp[key]:
                index = id_list.index(v)
                answer[index] += 1
    
    return answer