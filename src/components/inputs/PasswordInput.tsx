import { InputTypes } from "./InputTypes";

interface PasswordInputTypes extends InputTypes {
    showPassword: boolean,
    placeholder: string
}

const PasswordInput = ({ className, inputRef, id, showPassword, placeholder }: PasswordInputTypes) => {
    return (
        <input
            id={id}
            ref={inputRef}
            type={showPassword ? "text" : "password"}
            className={className}
            placeholder={placeholder}
            autoComplete="none"
        />
    );
}

export { PasswordInput }