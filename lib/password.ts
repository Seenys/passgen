interface PasswordOptions {
  length?: number;
  includeUppercase?: boolean;
  includeLowercase?: boolean;
  includeNumbers?: boolean;
  includeSymbols?: boolean;
}

export const generatePassword = ({
    includeUppercase = false,
    includeLowercase = false,
    includeNumbers = false,
    includeSymbols = false,
    length = 12,
}: PasswordOptions = {}) => {

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';

    let characters = '';
    if (includeUppercase) {
        characters += uppercase;
    }
    if (includeLowercase) {
        characters += lowercase;
    }
    if (includeNumbers) {
        characters += numbers;
    }
    if (includeSymbols) {
        characters += symbols;
    }

    if(characters.length === 0) {
        characters = uppercase + lowercase + numbers + symbols;
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}