import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../contexts/theme';
import Button from './button';

describe('button 컴포넌트 테스트', () => {
    it('렌더링을 확인', () => {
        render(
            <ThemeProvider>
                <Button size="large" scheme="primary">
                    버튼
                </Button>
            </ThemeProvider>
        );

        expect(screen.getByText('버튼')).toBeInTheDocument();
    });

    it('size 프롭 적용', () => {
        render(
            <ThemeProvider>
                <Button size="large" scheme="primary">
                    버튼
                </Button>
            </ThemeProvider>
        );

        expect(screen.getByRole('button')).toHaveStyle({ fontSize: '1.5rem' });
    });
});
