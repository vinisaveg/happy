import React, { FunctionComponent } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Title, Text } from '../../styles/global';
import {
    ContentWrapper,
    LogoImage,
    Main,
    PageLanding,
    Location,
    EnterApp,
} from './styles';
import logoImg from '../../assets/logo/Logo.svg';

const Landing: FunctionComponent = () => {
    return (
        <PageLanding>
            <ContentWrapper>
                <LogoImage src={logoImg} alt="Happy logo" />

                <Main maxWidth={350}>
                    <Title fontSize={70} fontWeight={900} lineHeight={76}>
                        Leve felicidade para o mundo
                    </Title>

                    <Text
                        marginTop={40}
                        fontSize={24}
                        lineHeight={34}
                        fontWeight={600}
                    >
                        Visite orfanatos e mude o dia de muitas crianças.
                    </Text>
                </Main>

                <Location>
                    <Text
                        marginTop={0}
                        fontSize={18}
                        lineHeight={18}
                        fontWeight={600}
                    >
                        São Paulo
                    </Text>
                </Location>

                <Link to="/orphanages">
                    <EnterApp>
                        <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                    </EnterApp>
                </Link>
            </ContentWrapper>
        </PageLanding>
    );
};

export default Landing;
