def solution(k, m, score):
    answer = 0
    
    score.sort(reverse=True)
    
    answer = sum([score[m*i-1]*m for i in range(1, len(score)//m + 1)])
    
    return answer