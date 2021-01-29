import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

export const IndexContainer = styled(Container)`
    padding: ${({ theme }) => theme.spacing(4) + ' ' + theme.spacing(2)};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(4)};
`;
