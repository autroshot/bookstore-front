import { ReactNode } from 'react';
import styled from 'styled-components';
import { ColorKey, HeadingSize } from '../../styles/theme';

export default function Title({ children, size, color }: Props) {
    return <StyledHeadingOne size={size}>{children}</StyledHeadingOne>;
}

const StyledHeadingOne = styled.h1<Omit<Props, 'children'>>`
    font-size: ${({ theme, size }) => theme.heading[size].fontSize};
    color: ${({ theme, color }) =>
        color ? theme.color[color] : theme.color.primary};
`;

interface Props {
    children: ReactNode;
    size: HeadingSize;
    color?: ColorKey;
}
