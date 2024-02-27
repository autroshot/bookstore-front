import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { ButtonScheme, ButtonSize } from '../../styles/theme';

export default function Button({
    children,
    size,
    scheme,
    disabled,
    isLoading,
    ...props
}: Props) {
    return (
        <StyledButton
            size={size}
            $scheme={scheme}
            disabled={disabled}
            isLoading={isLoading}
            {...props}
        >
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button<
    Omit<Props, 'children' | 'scheme'> & { $scheme: ButtonScheme }
>`
    font-size: ${({ theme, size }) => theme.button[size].fontSize};
    padding: ${({ theme, size }) => theme.button[size].padding};
    color: ${({ theme, $scheme }) => theme.buttonScheme[$scheme].color};
    background-color: ${({ theme, $scheme }) =>
        theme.buttonScheme[$scheme].backgroundColor};
    border: 0;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
    cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    size: ButtonSize;
    scheme: ButtonScheme;
    disabled?: boolean;
    isLoading?: boolean;
}
