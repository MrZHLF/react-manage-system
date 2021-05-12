export const reg_password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
// 密码验证
export const validate_password = reg_password;