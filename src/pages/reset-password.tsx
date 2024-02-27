import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { changeUserInfo, emailAuth } from '../apis/auth';
import Button from '../components/common/button';
import Input from '../components/common/input';
import Title from '../components/common/title';
import useAlert from '../hooks/alert';
import { StyledDiv } from './sign-up';

export default function ResetPassword() {
    const navigate = useNavigate();
    const showAlert = useAlert();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const [isResetRequested, setIsResetRequested] = useState(false);

    return (
        <>
            <Title size="large">비밀번호 초기화</Title>
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
                    {isResetRequested && (
                        <fieldset>
                            <input hidden type="text" autoComplete="username" />
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
                    )}
                    <fieldset>
                        <Button type="submit" size="medium" scheme="primary">
                            {isResetRequested
                                ? '비밀번호 초기화'
                                : '이메일 인증'}
                        </Button>
                    </fieldset>
                </form>
            </StyledDiv>
        </>
    );

    function onSubmit(inputs: Inputs) {
        if (isResetRequested) {
            changeUserInfo(inputs)
                .then(() => {
                    showAlert('비밀번호가 변경되었습니다.');
                    navigate('/login');
                })
                .catch((err) => console.error(err));

            return;
        }
        emailAuth({ email: inputs.email })
            .then(() => {
                setIsResetRequested(true);
            })
            .catch((err) => console.error(err));

        return;
    }
}

interface Inputs {
    email: string;
    password: string;
}

export type { Inputs };
