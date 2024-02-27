import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { login as loginApi } from '../apis/auth';
import Button from '../components/common/button';
import Input from '../components/common/input';
import Title from '../components/common/title';
import useAlert from '../hooks/alert';
import useAuthStore from '../store/auth';
import { StyledDiv } from './sign-up';

export default function Login() {
    const navigate = useNavigate();
    const showAlert = useAlert();
    const { login } = useAuthStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    return (
        <>
            <Title size="large">로그인</Title>
            <StyledDiv>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <Input
                            type="email"
                            autoComplete="username"
                            placeholder="이메일"
                            {...register('email', { required: true })}
                        />
                        {errors.email && (
                            <p className="error-text">
                                이메일을 입력해 주세요.
                            </p>
                        )}
                    </fieldset>
                    <fieldset>
                        <Input
                            type="password"
                            autoComplete="new-password"
                            placeholder="비밀번호"
                            {...register('password', { required: true })}
                        />
                        {errors.password && (
                            <p className="error-text">
                                비밀번호를 입력해 주세요.
                            </p>
                        )}
                    </fieldset>
                    <fieldset>
                        <Button type="submit" size="medium" scheme="primary">
                            로그인
                        </Button>
                    </fieldset>
                </form>
                <div className="info">
                    <Link to="/reset-password">비밀번호 초기화</Link>
                </div>
            </StyledDiv>
        </>
    );

    function onSubmit(inputs: Inputs) {
        loginApi(inputs)
            .then(() => {
                login();
                showAlert('로그인이 완료되었습니다.');

                navigate('/');
            })
            .catch((err) => {
                console.error(err);
                showAlert('로그인에 실패했습니다.');
            });
    }
}

interface Inputs {
    email: string;
    password: string;
}

export { StyledDiv };
export type { Inputs };
