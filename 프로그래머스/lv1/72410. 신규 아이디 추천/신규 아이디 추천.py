import re

def solution(new_id):
    answer = new_id.lower() # 1단계 : 소문자로 치환
    
    # 2단계 : 허용되지 않은 문자 제거
    for a in answer:
        if not (a.isalnum() or a == '-' or a == '_' or a == '.'):
            i = answer.index(a)
            answer = answer[:i] + answer[i+1:]
    
    answer = re.sub('\.+', '.', answer) # 3단계 : 연속된 마침표 치환
    answer = answer.strip('.')  # 4단계 : 양 끝 마침표 제거
    answer = 'a' if not answer else answer  # 5단계 : 빈 문자열일 경우 a 대입
    if len(answer) >= 16: answer = answer[:15].strip('.')   # 6단계 : 15로 길이 제한
    
    # 7단계 : 3자리가 될 때까지 마지막 문자 반복
    if len(answer) <= 2:
        while len(answer) < 3:
            answer = answer + answer[-1]
    
    return answer