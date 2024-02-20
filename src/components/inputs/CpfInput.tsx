import { InputTypes } from "./InputTypes"
import { InputMask } from '@react-input/mask';

const CpfInput = ({ className, inputRef, id }: InputTypes) => {
    return (
        <InputMask
            id={id}
            ref={inputRef}
            mask="___.___.___-__"
            replacement={{ _: /\d/ }}
            className={className}
            placeholder="000.000.000-00"
            autoComplete="none"
            // @ts-ignore
            inputMode="numeric"
        />
    );
}

export { CpfInput }