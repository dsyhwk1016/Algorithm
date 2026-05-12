function solution(phone_book) {
    const map = new Map();

    for (const phone of phone_book) {
        let target = map;
        for (let ch of phone) {
            if (target.get("isEnd")) {
                return false;
            }

            if (!target.get(ch)) {
                target.set(ch, new Map());
            }
            target = target.get(ch);
        }

        if (target.size > 0) {
            return false;
        }

        target.set("isEnd", true);
    }

    return true;
}