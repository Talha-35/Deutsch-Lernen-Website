export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export const validatePhone = (phone) => {
    return String(phone)
        .toLowerCase()
        .match(
            /( |^|>)((((\+|00)[0-9]{2} ?(\(0\))?)|0)([0-9]{2}-? ?[0-9]{7})|([0-9]{3}-? ?[0-9]{6})|([0-9]{1}-? ?[0-9]{8}))( |$|<)/gi
        );
};