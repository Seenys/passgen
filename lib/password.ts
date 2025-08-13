export interface PasswordOptions {
  length?: number;
  useUppercase?: boolean;
  useLowercase?: boolean;
  useNumbers?: boolean;
  useSymbols?: boolean;
}

export const generatePassword = ({
    useUppercase = false,
    useLowercase = false,
    useNumbers = false,
    useSymbols = false,
    length = 12,
}: PasswordOptions = {
    length: 12,
    useUppercase: false,
    useLowercase: false,
    useNumbers: false,
    useSymbols: false,
}) => {

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';

    let characters = '';
    if (useUppercase) {
        characters += uppercase;
    }
    if (useLowercase) {
        characters += lowercase;
    }
    if (useNumbers) {
        characters += numbers;
    }
    if (useSymbols) {
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