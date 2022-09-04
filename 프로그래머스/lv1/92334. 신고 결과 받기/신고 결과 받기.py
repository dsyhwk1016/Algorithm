def solution(id_list, report, k):
    answer = [0] * len(id_list) # 이메일 받은 횟수 리스트
    temp = {id: [] for id in id_list}   # {신고 받은 사람: [신고한 사람]}
    
    # 신고 내역 정리
    for r in set(report):
        a, b = r.split()
        temp[b].append(a)
    
    # 신고 횟수가 k번 이상이라면 신고한 사람들의 이메일 횟수 1증가
    for key in temp:
        l = len(temp[key])
        if l >= k:
            for v in temp[key]:
                index = id_list.index(v)
                answer[index] += 1
    
    return answer