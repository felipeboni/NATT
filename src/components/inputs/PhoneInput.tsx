import { InputTypes } from "./InputTypes"
import { InputMask } from '@react-input/mask';

const PhoneInput = ({ className, inputRef, id }: InputTypes) => {
    const modify = (input: string) => {
        return { mask: input.length === 10 ? '(__) ____-_____' : '(__) _____-____' };
    };

    return (
        <InputMask
            id={id}
            ref={inputRef}
            mask="(__) ____-_____" 
            replacement={{ _: /\d/ }}
            className={className}
            modify={modify}
            autoComplete="none"
            placeholder="(00) 00000-0000"
            // @ts-ignore
            inputMode="numeric"
        />
    );
}

export { PhoneInput }