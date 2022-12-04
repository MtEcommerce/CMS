import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProductCardProps {}

const StyledProductCard = styled.div`
  fontSize: 32px;
  color: blue;
`;

export function ProductCard(props: ProductCardProps) {
  return (
    <StyledProductCard>
      <h1>Welcome to ProductCard!</h1>
    </StyledProductCard>
  );
}

export default ProductCard;
