import { useState } from "react";
import { InputTypes } from "./InputTypes"

import { formatMoney, formatToInt } from "@/helpers/formatters";

interface CurrencyInputProps extends InputTypes {
    maxValue: number,
    minValue?: number,
}

const CurrencyInput = ({ className, inputRef, id, maxValue, minValue }: CurrencyInputProps) => {
    const [rawInput, setRawInput] = useState<string[]>([]);
    const [formattedInput, setFormattedInput] = useState<string>("");

    var typingTimer: string | number | NodeJS.Timeout | undefined;
    const doneTypingInterval = 1000;

    const handleInput = (e: { target: { value: any; }; }) => {
        var val = e.target.value;
        const lastTypedChar = val[val.length - 1];
        setRawInput([...rawInput, lastTypedChar]);

        if (maxValue) {
            let rawValue = formatToInt(val);
            if (rawValue > maxValue) val = maxValue;
        }

        const formatted = formatMoney(val);
        setFormattedInput(formatted);
    };

    const checkMinValue = () => {
        if (minValue) {
            let rawValue = formatToInt(formattedInput);
            if (rawValue < minValue) setFormattedInput(formatMoney(minValue));
        }
    }

    return (
        <input
            type="text"
            id={id}
            ref={inputRef}
            className={className}
            placeholder={formatMoney(minValue || 100)}
            onChange={handleInput}
            onBlur={checkMinValue}
            value={formattedInput}
            inputMode="numeric"
            autoComplete="none"
        />
    );
}

export { CurrencyInput }