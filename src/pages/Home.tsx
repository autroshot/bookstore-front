import Button from '../components/common/button';
import Input from '../components/common/input';
import Title from '../components/common/title';
import ThemeSwitcher from '../components/header/theme-switcher';

export default function Home() {
    return (
        <>
            <Title size="medium" color="background">
                제목 테스트
            </Title>
            <ThemeSwitcher />
            <Button size="large" scheme="primary">
                버튼
            </Button>
            <Input placeholder="여기에 입력하세요" />
            <div>home body</div>
        </>
    );
}
