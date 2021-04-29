import styled from 'styled-components';

export const Icon = styled.img`
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
    padding: 0.5rem;
`;

export const WrapperList = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ListItem = styled.ul`
    border: 1px solid #303644;
    padding: 1.5rem;
    margin: 1rem;
`;

export const List = styled.ul`
    margin-top: 2rem !important;
`;

export const Title = styled.p`
    font-size: 1.4rem;
    padding: 0;
    margin: 0;
    font-weight: bold;
    opacity: ${(props) => props.done && '0.5'};
    text-decoration: ${(props) => props.done && 'line-through'};
    color: ${(props) => props.importanted && '#ffc720'};
`;

export const Description = styled.p`
   font-size: 1 rem;
   font-weight: normal;
   padding: 0;
   margin: 0;
   opacity: ${(props) => props.done && '0.5'};
   text-decoration: ${(props) => props.done && 'line-through'};
   color: ${(props) => props.importanted && '#ffc720'};
`;

export const WrapperIcon = styled.div``;

export const Date = styled.div`
    opacity: ${(props) => props.done && '0.5'};
    text-decoration: ${(props) => props.done && 'line-through'};
    color: ${(props) => props.importanted && '#ffc720'};
`