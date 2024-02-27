import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signUp } from '../apis/auth';
import Button from '../components/common/button';
import Input from '../components/common/input';
import Title from '../components/common/title';
import useAlert from '../hooks/alert';

export default function SignUp() {
    const navigate = useNavigate();
    const showAlert = useAlert();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    return (
        <>
            <Title size="large">회원가입</Title>
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
                            회원가입
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
        signUp(inputs)
            .then(() => {
                showAlert('회원가입이 완료되었습니다.');
                navigate('/login');
            })
            .catch((err) => console.error(err));
    }
}

const StyledDiv = styled.div`
    max-width: ${({ theme }) => theme.layout.width.small};
    margin: 80px auto;

    fieldset {
        border: 0;
        padding: 0 0 8px 0;
        .error-text {
            color: red;
        }
    }

    input {
        width: 100%;
    }

    button {
        width: 100%;
    }

    .info {
        text-align: center;
        padding: 16px 0 0 0;
    }
`;

interface Inputs {
    email: string;
    password: string;
}

export { StyledDiv };
export type { Inputs };
