import { forwardRef } from "react";
import { InputTypes } from "./InputTypes"

const MailInput = ({ className, inputRef, id }: InputTypes) => {
    return (
        <input
            id={id}
            ref={inputRef}
            type="mail"
            className={className}
            placeholder="seuemail@email.com"
        />
    );
}

export { MailInput }