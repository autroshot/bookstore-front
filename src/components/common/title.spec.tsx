import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../contexts/theme';
import Title from './title';

describe('title 컴포넌트 테스트', () => {
    it('렌더링을 확인', () => {
        render(
            <ThemeProvider>
                <Title size="large">제목</Title>
            </ThemeProvider>
        );

        expect(screen.getByText('제목')).toBeInTheDocument();
    });

    it('size 프롭 적용', () => {
        render(
            <ThemeProvider>
                <Title size="large">제목</Title>
            </ThemeProvider>
        );

        expect(screen.getByText('제목')).toHaveStyle({ fontSize: '2rem' });
    });

    it('color 프롭 적용', () => {
        render(
            <ThemeProvider>
                <Title size="large" color="primary">
                    제목
                </Title>
            </ThemeProvider>
        );

        expect(screen.getByText('제목')).toHaveStyle({ color: '#ff5800' });
    });
});
