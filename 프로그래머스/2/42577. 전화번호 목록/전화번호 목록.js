function solution(phone_book) {
    phone_book.sort();
    return !phone_book.find((phone, index) => {
        if (index === phone_book.length - 1) {
            return false;
        }

        return phone_book[index + 1].startsWith(phone);
    });
}