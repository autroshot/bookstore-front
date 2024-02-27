import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { ThemeProvider } from '../../contexts/theme';
import Input from './input';

describe('input 컴포넌트 테스트', () => {
    it('렌더링을 확인', () => {
        render(
            <ThemeProvider>
                <Input placeholder="여기에 입력하세요" />
            </ThemeProvider>
        );

        expect(
            screen.getByPlaceholderText('여기에 입력하세요')
        ).toBeInTheDocument();
    });

    it('forwardRef 확인', () => {
        const ref = createRef<HTMLInputElement>();

        render(
            <ThemeProvider>
                <Input placeholder="여기에 입력하세요" ref={ref} />
            </ThemeProvider>
        );

        expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
});
