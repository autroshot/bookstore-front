import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

const Input = forwardRef(
    ({ placeholder, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <StyledInputText
                placeholder={placeholder}
                ref={ref}
                {...props}
            ></StyledInputText>
        );
    }
);

const StyledInputText = styled.input`
    padding: 0.25rem 0.75rem;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    font-size: 1rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.text};
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

export default Input;
